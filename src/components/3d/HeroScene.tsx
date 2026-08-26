import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { QuantumLattice } from './QuantumLattice';
import { MicrofluidicMesh } from './MicrofluidicMesh';
import { SynapticGrid } from './SynapticGrid';
import { MetamaterialWaveguide } from './MetamaterialWaveguide';
import type { Model3DType } from '../../types/lab';

interface HeroSceneProps {
  modelType?: Model3DType;
  scrollProgress?: number;
  accentColor?: string;
}

// Cursor Light Follower Component
const CursorLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ mouse, viewport }) => {
    if (lightRef.current) {
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      lightRef.current.position.set(x, y, 4);
    }
  });

  return <pointLight ref={lightRef} intensity={2.5} distance={10} color="#FFFFFF" />;
};

export const HeroScene: React.FC<HeroSceneProps> = ({
  modelType = 'quantum',
  scrollProgress = 0,
  accentColor = '#0D47A1',
}) => {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(!!gl);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[var(--color-ink-muted)] border border-dashed border-[var(--color-ink-border)] rounded-lg p-8">
        [3D WebGL Canvas Fallback — Scientific Visual Active]
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 7.5 - scrollProgress * 2]} fov={45} />
        
        {/* Lighting setup */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <directionalLight position={[-5, -4, -3]} intensity={0.4} color={accentColor} />
        <CursorLight />

        {/* Dynamic 3D Model Render */}
        {modelType === 'quantum' && (
          <QuantumLattice scrollProgress={scrollProgress} accentColor={accentColor} />
        )}
        {modelType === 'microfluidic' && (
          <MicrofluidicMesh scrollProgress={scrollProgress} accentColor={accentColor} />
        )}
        {modelType === 'synaptic' && (
          <SynapticGrid scrollProgress={scrollProgress} accentColor={accentColor} />
        )}
        {modelType === 'metamaterial' && (
          <MetamaterialWaveguide scrollProgress={scrollProgress} accentColor={accentColor} />
        )}

        {/* Smooth Orbit & Cursor Interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
