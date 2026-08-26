import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface QuantumLatticeProps {
  scrollProgress: number; // 0 to 1
  accentColor: string;
}

export const QuantumLattice: React.FC<QuantumLatticeProps> = ({ scrollProgress, accentColor }) => {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate crystal lattice points (MoS2/WSe2 moiré structure)
  const { nodePositions, bondPairs, particlePositions } = useMemo(() => {
    const positions: [number, number, number][] = [];
    const bonds: Array<[[number, number, number], [number, number, number]]> = [];
    const gridSize = 4;
    const spacing = 1.2;

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let y = -gridSize; y <= gridSize; y++) {
        for (let z = -1; z <= 1; z++) {
          // Hexagonal lattice perturbation
          const offsetX = (y % 2) * 0.5 * spacing;
          const pos: [number, number, number] = [
            x * spacing + offsetX,
            y * spacing * 0.866,
            z * spacing * 0.7 + Math.sin(x * 0.5 + y * 0.5) * 0.3
          ];
          positions.push(pos);
        }
      }
    }

    // Connect nearest neighbor bonds
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dx = positions[i][0] - positions[j][0];
        const dy = positions[i][1] - positions[j][1];
        const dz = positions[i][2] - positions[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist > 0.8 && dist < 1.4) {
          bonds.push([positions[i], positions[j]]);
        }
      }
    }

    // Generate orbiting electron cloud particles
    const pCount = 300;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const r = 2.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i * 3 + 2] = r * Math.cos(phi);
    }

    return { nodePositions: positions, bondPairs: bonds, particlePositions: pPos };
  }, []);

  // Animate node positions and exploded view on scroll
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Slow ambient rotation
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;

    // Exploded view separation calculation based on scroll
    const explodeFactor = scrollProgress * 2.5;

    if (nodesRef.current) {
      const dummy = new THREE.Object3D();
      nodePositions.forEach((pos, idx) => {
        // Expand outwards from center on scroll
        const scale = 1 + scrollProgress * 0.3;
        dummy.position.set(
          pos[0] * (1 + explodeFactor * 0.3),
          pos[1] * (1 + explodeFactor * 0.3),
          pos[2] * (1 + explodeFactor * 0.8) // Z layer separation
        );
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        nodesRef.current?.setMatrixAt(idx, dummy.matrix);
      });
      nodesRef.current.instanceMatrix.needsUpdate = true;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y -= delta * 0.2;
      particlesRef.current.rotation.z += delta * 0.1;
    }
  });

  const parsedAccent = useMemo(() => new THREE.Color(accentColor), [accentColor]);

  return (
    <group ref={groupRef}>
      {/* Atomic Nodes Instanced Mesh */}
      <instancedMesh
        ref={nodesRef}
        args={[undefined, undefined, nodePositions.length]}
      >
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshPhysicalMaterial
          color={parsedAccent}
          roughness={0.2}
          metalness={0.8}
          clearcoat={0.6}
          clearcoatRoughness={0.1}
          emissive={parsedAccent}
          emissiveIntensity={0.2}
        />
      </instancedMesh>

      {/* Valence Bond Lines */}
      {bondPairs.map((pair, i) => {
        const points = [
          new THREE.Vector3(...pair[0]),
          new THREE.Vector3(...pair[1])
        ];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={lineGeo}>
            <lineBasicMaterial
              color={accentColor}
              transparent
              opacity={0.25 - scrollProgress * 0.1}
              linewidth={1}
            />
          </line>
        );
      })}

      {/* Orbiting Quantum Electron Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color={accentColor}
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};
