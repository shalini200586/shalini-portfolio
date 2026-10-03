"use client";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { RefObject } from "react";
import type * as THREE from "three";
import type { NormalizedMouse } from "@/hooks/useNormalizedMouse";

type Props = {
  mouse: RefObject<NormalizedMouse>;
};

function WireTorus({ radius, tube, position, speed }: { radius: number; tube: number; position: [number, number, number]; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed;
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.6;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, tube, 24, 128]} />
      <meshBasicMaterial color="#c41e3a" transparent opacity={0.35} wireframe />
    </mesh>
  );
}

function WireIcosahedron({ position, scale }: { position: [number, number, number]; scale: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#6366f1" transparent opacity={0.25} wireframe />
    </mesh>
  );
}

export function FloatingGeometry({ mouse }: Props) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const mx = mouse.current.x;
    const my = mouse.current.y;
    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.position.x = 2.4 + mx * 0.35;
    groupRef.current.position.y = my * 0.25;
  });

  return (
    <group ref={groupRef} position={[2.4, 0, 0]}>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <WireTorus radius={2.1} tube={0.018} position={[0, 0, 0]} speed={0.12} />
      </Float>
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.8}>
        <WireTorus radius={1.55} tube={0.012} position={[0, 0.15, 0.3]} speed={-0.18} />
      </Float>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <WireIcosahedron position={[0.4, -0.5, 0.8]} scale={0.55} />
      </Float>
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5}>
        <WireIcosahedron position={[-0.6, 0.7, -0.4]} scale={0.35} />
      </Float>
    </group>
  );
}
