"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles, MeshDistortMaterial, Html } from "@react-three/drei";
import * as THREE from "three";

interface FloatingTagProps {
  position: [number, number, number];
  text: string;
  dotColor: string;
  speed?: number;
  floatIntensity?: number;
}

function FloatingTag({ position, text, dotColor, speed = 1.5, floatIntensity = 1 }: FloatingTagProps) {
  return (
    <Float speed={speed} floatIntensity={floatIntensity} rotationIntensity={0.1}>
      <group position={position}>
        <Html center distanceFactor={7}>
          <div className="px-3.5 py-1.5 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:border-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer flex items-center space-x-2 select-none border-b-[2px] border-b-gray-300/20">
            <span 
              className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
              style={{ 
                backgroundColor: dotColor, 
                boxShadow: `0 0 8px ${dotColor}` 
              }} 
            />
            <span className="text-xs sm:text-sm font-extrabold text-[#4a4a4a] tracking-tight whitespace-nowrap font-sans">
              {text}
            </span>
          </div>
        </Html>
      </group>
    </Float>
  );
}

function CoursePreviewCard() {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const vid = document.createElement("video");
      vid.src = "https://assets.mixkit.co/videos/preview/mixkit-woman-explaining-something-during-a-video-call-41712-large.mp4";
      vid.crossOrigin = "anonymous";
      vid.loop = true;
      vid.muted = true;
      vid.playsInline = true;
      vid.play().catch((err) => console.log("Card video play failed", err));
      setVideo(vid);
    }
  }, []);

  return (
    <Float speed={1.5} floatIntensity={0.8} rotationIntensity={0.15}>
      <group position={[3.3, -0.2, 0.6]}>
        <Html center distanceFactor={7}>
          <div className="w-[180px] sm:w-[225px] bg-white/70 backdrop-blur-xl border border-white/45 rounded-2xl p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer border-b-[3px] border-b-gray-300/30">
            {/* Video Preview */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-950 border border-white/20 mb-2 shadow-inner">
              {video && (
                <video
                  src={video.src}
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                  ref={(el) => {
                    if (el && el.paused) {
                      el.play().catch(() => {});
                    }
                  }}
                />
              )}
              {/* Pulsing Demo Badge */}
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-extrabold text-white tracking-wide uppercase flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f36c21] animate-ping" />
                Live Demo
              </span>
            </div>
            {/* Course Information */}
            <div className="px-1 py-0.5">
              <h4 className="text-[11px] sm:text-xs font-extrabold text-gray-800 leading-tight tracking-tight">
                English Speaking Masterclass
              </h4>
              <p className="text-[9px] font-bold text-gray-400 tracking-wide mt-0.5 uppercase">
                Udemy Top Course
              </p>
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
}

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
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const vid = document.createElement("video");
      // Beautiful wavy colorful liquid surface video loop
      vid.src = "https://assets.mixkit.co/videos/preview/mixkit-wavy-colorful-liquid-surface-background-loop-41640-large.mp4";
      vid.crossOrigin = "anonymous";
      vid.loop = true;
      vid.muted = true;
      vid.playsInline = true;
      vid.play().catch((err) => console.log("Core video play failed", err));
      setVideo(vid);
    }
  }, []);

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

      {/* Innovative video texture core inside the glass sphere */}
      {video && (
        <mesh scale={0.95}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial toneMapped={false}>
            <videoTexture attach="map" args={[video]} />
          </meshBasicMaterial>
        </mesh>
      )}

      {/* Internal colorful emitting shapes */}
      {/* 1. Brand Blue (Sky Blue) */}
      <mesh ref={blob1Ref} scale={0.7}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#009ce0" transparent opacity={0.6} />
      </mesh>

      {/* 2. Brand Orange */}
      <mesh ref={blob2Ref} scale={0.6}>
        <torusGeometry args={[0.7, 0.2, 16, 32]} />
        <meshBasicMaterial color="#f36c21" transparent opacity={0.6} />
      </mesh>

      {/* 3. Deep Purple blend shape */}
      <mesh ref={blob3Ref} scale={0.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.6} />
      </mesh>

      {/* Subtle backglow */}
      <mesh position={[0, 0, -1]} scale={2.4}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial color="#009ce0" transparent opacity={0.08} />
      </mesh>

      {/* Dynamic Course Keyword Tags floating around the orb */}
      <FloatingTag position={[-2.8, 1.4, 0.4]} text="English Fluency" dotColor="#009ce0" speed={1.2} floatIntensity={0.8} />
      <FloatingTag position={[-2.8, -1.2, 0.6]} text="Mindfulness" dotColor="#f36c21" speed={1.5} floatIntensity={1.0} />
      <FloatingTag position={[2.8, 1.6, 0.3]} text="Communication" dotColor="#fcb913" speed={1.3} floatIntensity={0.9} />
      <FloatingTag position={[-1.2, -2.4, 0.5]} text="App Security" dotColor="#009ce0" speed={1.4} floatIntensity={0.7} />
      <FloatingTag position={[-0.2, 2.7, 0.2]} text="Productivity" dotColor="#f36c21" speed={1.6} floatIntensity={1.1} />
      <FloatingTag position={[2.4, -1.8, 0.4]} text="Storytelling" dotColor="#fcb913" speed={1.1} floatIntensity={0.8} />
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
        <CoursePreviewCard />
        <FloatingObjects />
        
        <Sparkles count={50} scale={10} size={1.5} speed={0.4} opacity={0.6} color="#009ce0" />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
