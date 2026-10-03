"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { RefObject } from "react";
import * as THREE from "three";
import type { NormalizedMouse } from "@/hooks/useNormalizedMouse";
import { interactiveParticles } from "./particleData";

const COUNT = 2000;

type Props = {
  mouse: RefObject<NormalizedMouse>;
};

export function InteractiveParticles({ mouse }: Props) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors, base } = interactiveParticles;

  useFrame((state) => {
    if (!ref.current) return;

    const geo = ref.current.geometry;
    const attr = geo.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const mx = mouse.current.x * 2;
    const my = mouse.current.y * 2;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < COUNT; i++) {
      const bx = base[i * 3];
      const by = base[i * 3 + 1];
      const bz = base[i * 3 + 2];
      const wave = Math.sin(t * 0.4 + i * 0.02) * 0.08;
      const dx = bx - mx * 3;
      const dy = by - my * 2;
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
      const repel = Math.min(0.6 / dist, 0.35);
      arr[i * 3] = bx + (dx / dist) * repel + wave;
      arr[i * 3 + 1] = by + (dy / dist) * repel + wave * 0.5;
      arr[i * 3 + 2] = bz + Math.sin(t * 0.3 + i * 0.015) * 0.05;
    }

    attr.needsUpdate = true;
    ref.current.rotation.y = t * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
