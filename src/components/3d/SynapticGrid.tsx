import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SynapticGridProps {
  scrollProgress: number;
  accentColor: string;
}

export const SynapticGrid: React.FC<SynapticGridProps> = ({ scrollProgress, accentColor }) => {
  const groupRef = useRef<THREE.Group>(null);
  const pulsesRef = useRef<THREE.Points>(null);

  // Create interconnected synaptic node network
  const { nodes, connections, pulses } = useMemo(() => {
    const nodeCount = 35;
    const nPos: THREE.Vector3[] = [];
    const conns: [THREE.Vector3, THREE.Vector3][] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nPos.push(new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3
      ));
    }

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nPos[i].distanceTo(nPos[j]) < 2.2) {
          conns.push([nPos[i], nPos[j]]);
        }
      }
    }

    // Pulse positions along connections
    const pulseCount = 120;
    const pArray = new Float32Array(pulseCount * 3);
    return { nodes: nPos, connections: conns, pulses: pArray };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.1;
    }

    if (pulsesRef.current && connections.length > 0) {
      const time = state.clock.getElapsedTime() * 2;
      const positions = pulsesRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < positions.length / 3; i++) {
        const connIndex = i % connections.length;
        const [start, end] = connections[connIndex];
        const t = (time * 0.8 + i * 0.1) % 1;

        positions[i * 3] = THREE.MathUtils.lerp(start.x, end.x, t);
        positions[i * 3 + 1] = THREE.MathUtils.lerp(start.y, end.y, t);
        positions[i * 3 + 2] = THREE.MathUtils.lerp(start.z, end.z, t);
      }
      pulsesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Synaptic Nodes */}
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <octahedronGeometry args={[0.15 + (idx % 3) * 0.05, 0]} />
          <meshStandardMaterial
            color={accentColor}
            emissive={accentColor}
            emissiveIntensity={0.6}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Neural Pathway Connections */}
      {connections.map(([start, end], idx) => {
        const lineGeo = new THREE.BufferGeometry().setFromPoints([start, end]);
        return (
          <line key={idx} geometry={lineGeo}>
            <lineBasicMaterial
              color={accentColor}
              transparent
              opacity={0.25 + scrollProgress * 0.2}
              linewidth={1}
            />
          </line>
        );
      })}

      {/* Electrical Spiking Pulses */}
      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pulses, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#FFFFFF"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};
