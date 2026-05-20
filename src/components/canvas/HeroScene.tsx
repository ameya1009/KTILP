"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingObjects() {
  const group = useRef<THREE.Group>(null);
  
  const objects = useMemo(() => {
    return Array.from({ length: 12 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4 - 1,
      ] as [number, number, number],
      scale: Math.random() * 0.2 + 0.08,
      color: Math.random() > 0.5 ? "#009ce0" : "#f36c21", // Blue or Orange
      speed: Math.random() * 1.5 + 0.5,
    }));
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {objects.map((obj, i) => (
        <Float key={i} speed={obj.speed} rotationIntensity={1.5} floatIntensity={2} position={obj.position}>
          <mesh scale={obj.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial 
              color={obj.color} 
              emissive={obj.color}
              emissiveIntensity={0.3}
              wireframe={Math.random() > 0.6}
              transparent
              opacity={0.7}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function GlassOrb() {
  const orbRef = useRef<THREE.Group>(null);
  const blob1Ref = useRef<THREE.Mesh>(null);
  const blob2Ref = useRef<THREE.Mesh>(null);
  const blob3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const { x, y } = state.pointer;
    const time = state.clock.getElapsedTime();

    // Smooth cursor-tracking parallax tilt & glide
    if (orbRef.current) {
      orbRef.current.rotation.y = THREE.MathUtils.lerp(orbRef.current.rotation.y, x * 0.5 + time * 0.05, 0.05);
      orbRef.current.rotation.x = THREE.MathUtils.lerp(orbRef.current.rotation.x, -y * 0.5, 0.05);
      orbRef.current.position.x = THREE.MathUtils.lerp(orbRef.current.position.x, x * 0.8, 0.05);
      orbRef.current.position.y = THREE.MathUtils.lerp(orbRef.current.position.y, y * 0.8, 0.05);
    }

    // Animate custom color blobs inside the glass shell
    if (blob1Ref.current) {
      blob1Ref.current.position.x = Math.sin(time * 0.8) * 0.5;
      blob1Ref.current.position.y = Math.cos(time * 0.6) * 0.5;
      blob1Ref.current.position.z = Math.sin(time * 0.4) * 0.3;
      blob1Ref.current.rotation.x = time * 0.15;
    }
    if (blob2Ref.current) {
      blob2Ref.current.position.x = Math.cos(time * 0.7) * 0.5;
      blob2Ref.current.position.y = Math.sin(time * 0.5) * 0.5;
      blob2Ref.current.position.z = Math.cos(time * 0.6) * 0.3;
      blob2Ref.current.rotation.y = time * 0.2;
    }
    if (blob3Ref.current) {
      blob3Ref.current.position.x = Math.sin(time * 0.5) * 0.4;
      blob3Ref.current.position.y = Math.cos(time * 0.8) * 0.4;
      blob3Ref.current.position.z = Math.sin(time * 0.7) * 0.4;
      blob3Ref.current.rotation.z = time * 0.25;
    }
  });

  return (
    <group ref={orbRef}>
      {/* Outer refractives/morphing glass sphere */}
      <mesh scale={2.0}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#ffffff"
          transmission={1.0}
          thickness={1.6}
          roughness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          ior={1.55}
          distort={0.3}
          speed={1.8}
        />
      </mesh>

      {/* Internal colorful emitting shapes */}
      {/* 1. Brand Blue (Sky Blue) */}
      <mesh ref={blob1Ref} scale={0.7}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#009ce0" />
      </mesh>

      {/* 2. Brand Orange */}
      <mesh ref={blob2Ref} scale={0.6}>
        <torusGeometry args={[0.7, 0.2, 16, 32]} />
        <meshBasicMaterial color="#f36c21" />
      </mesh>

      {/* 3. Deep Purple blend shape */}
      <mesh ref={blob3Ref} scale={0.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#a855f7" />
      </mesh>

      {/* Subtle backglow */}
      <mesh position={[0, 0, -1]} scale={2.4}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial color="#009ce0" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="relative w-full h-full pointer-events-auto overflow-visible">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#009ce0" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#f36c21" />
        <pointLight position={[0, 5, 0]} intensity={1.0} color="#ffffff" />
        
        <GlassOrb />
        <FloatingObjects />
        
        <Sparkles count={50} scale={10} size={1.5} speed={0.4} opacity={0.6} color="#009ce0" />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
