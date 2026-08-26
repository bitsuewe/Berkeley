import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MicrofluidicMeshProps {
  scrollProgress: number;
  accentColor: string;
}

export const MicrofluidicMesh: React.FC<MicrofluidicMeshProps> = ({ scrollProgress, accentColor }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const fluidRef = useRef<THREE.Points>(null);

  // Generate fluidic capillary geometry
  const fluidParticles = useMemo(() => {
    const count = 400;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = (Math.random() - 0.5) * 6;
      const r = 1.2 + Math.sin(v * 2) * 0.4;
      pos[i * 3] = r * Math.cos(u);
      pos[i * 3 + 1] = v;
      pos[i * 3 + 2] = r * Math.sin(u);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.15;

      // Deform membrane vertices organically
      const geo = meshRef.current.geometry;
      const posAttr = geo.attributes.position;
      const time = state.clock.getElapsedTime();

      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);
        const z = posAttr.getZ(i);
        const wave = Math.sin(time * 2 + y * 3) * 0.08 * (1 + scrollProgress);
        posAttr.setZ(i, z + wave * 0.1);
      }
      posAttr.needsUpdate = true;
    }

    if (fluidRef.current) {
      fluidRef.current.rotation.y -= delta * 0.4;
      // Scroll moves fluid down channel
      fluidRef.current.position.y = (scrollProgress * 2) % 1;
    }
  });

  return (
    <group>
      {/* Cellular Microchannel Mesh */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1.5, 1.2, 4, 32, 32, true]} />
        <meshPhysicalMaterial
          color={accentColor}
          wireframe
          transparent
          opacity={0.4 + scrollProgress * 0.2}
          roughness={0.1}
          transmission={0.8}
          ior={1.33}
        />
      </mesh>

      {/* Internal Colloidal Fluid Particles */}
      <points ref={fluidRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[fluidParticles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color={accentColor}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};
