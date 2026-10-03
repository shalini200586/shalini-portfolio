"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { RefObject } from "react";
import type * as THREE from "three";
import { useNormalizedMouse } from "@/hooks/useNormalizedMouse";
import type { NormalizedMouse } from "@/hooks/useNormalizedMouse";
import { FloatingGeometry } from "./FloatingGeometry";
import { InteractiveParticles } from "./InteractiveParticles";

function CameraRig({ mouse }: { mouse: RefObject<NormalizedMouse> }) {
  useFrame((state) => {
    const mx = mouse.current.x;
    const my = mouse.current.y;
    state.camera.position.x += (mx * 0.6 - state.camera.position.x) * 0.04;
    state.camera.position.y += (my * 0.35 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0.8, 0, 0);
  });

  return null;
}

function SceneContents({ mouse }: { mouse: RefObject<NormalizedMouse> }) {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = -6 + Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[4, 2, 4]} intensity={1.2} color="#c41e3a" />
      <pointLight position={[-4, -2, 2]} intensity={0.5} color="#6366f1" />
      <InteractiveParticles mouse={mouse} />
      <FloatingGeometry mouse={mouse} />
      <gridHelper
        ref={gridRef}
        args={[30, 40, "#1a1a1a", "#111111"]}
        position={[0, -2.5, -6]}
        rotation={[0, 0, 0]}
      />
      <CameraRig mouse={mouse} />
    </>
  );
}

export function HeroScene() {
  const mouse = useNormalizedMouse();

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneContents mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
}
