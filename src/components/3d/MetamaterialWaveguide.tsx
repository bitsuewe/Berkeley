import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MetamaterialWaveguideProps {
  scrollProgress: number;
  accentColor: string;
}

export const MetamaterialWaveguide: React.FC<MetamaterialWaveguideProps> = ({ scrollProgress, accentColor }) => {
  const groupRef = useRef<THREE.Group>(null);
  const elementsRef = useRef<THREE.InstancedMesh>(null);

  const gridCount = 6;
  const totalElements = gridCount * gridCount * gridCount;

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;

    if (elementsRef.current) {
      const dummy = new THREE.Object3D();
      let idx = 0;
      const spacing = 0.8 + scrollProgress * 0.4; // Separation on scroll

      for (let x = 0; x < gridCount; x++) {
        for (let y = 0; y < gridCount; y++) {
          for (let z = 0; z < gridCount; z++) {
            const posX = (x - (gridCount - 1) / 2) * spacing;
            const posY = (y - (gridCount - 1) / 2) * spacing;
            const posZ = (z - (gridCount - 1) / 2) * spacing;

            dummy.position.set(posX, posY, posZ);
            
            // Optical wave pulse perturbation
            const dist = Math.sqrt(posX * posX + posY * posY + posZ * posZ);
            const scale = (0.2 + Math.sin(state.clock.getElapsedTime() * 3 - dist * 2) * 0.08) * (1 - scrollProgress * 0.2);
            dummy.scale.set(scale, scale, scale);
            dummy.rotation.set(posX * 0.2, posY * 0.2, state.clock.getElapsedTime() * 0.5);

            dummy.updateMatrix();
            elementsRef.current.setMatrixAt(idx++, dummy.matrix);
          }
        }
      }
      elementsRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh
        ref={elementsRef}
        args={[undefined, undefined, totalElements]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color={accentColor}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </instancedMesh>
    </group>
  );
};
