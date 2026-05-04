"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingObjects() {
  const group = useRef<THREE.Group>(null);
  
  const objects = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5 - 2,
      ] as [number, number, number],
      scale: Math.random() * 0.3 + 0.1,
      color: Math.random() > 0.5 ? "#009ce0" : "#f36c21", // Blue or Orange
    }));
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {objects.map((obj, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={3} position={obj.position}>
          <mesh scale={obj.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial 
              color={obj.color} 
              emissive={obj.color}
              emissiveIntensity={0.5}
              wireframe={Math.random() > 0.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function CoreSphere() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[2, 0, -2]} scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#ffffff"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.1}
          roughness={0.1}
          distort={0.3}
          speed={2}
        />
      </mesh>
      {/* Glow effect behind the sphere */}
      <mesh position={[2, 0, -3]} scale={2.2}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial color="#009ce0" transparent opacity={0.1} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#009ce0" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#f36c21" />
        
        <CoreSphere />
        <FloatingObjects />
        
        <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.5} color="#009ce0" />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
