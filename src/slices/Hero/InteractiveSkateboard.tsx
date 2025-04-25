"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Skateboard } from "@/components/Skateboard";

type BoardType = {
  deckTexture: string;
  wheelTexture: string;
  trucksColor: string;
  boardColor: string;
};

export default function InteractiveSkateboard({
  deckTexture,
  wheelTexture,
  trucksColor,
  boardColor,
}: BoardType) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <Canvas
        className="min-h-[60rem] w-full"
        camera={{ position: [1.5, 1, 1.4], fov: 55 }}
      >
        <Suspense>
          <Scene
            deckTexture={deckTexture}
            wheelTexture={wheelTexture}
            trucksColor={trucksColor}
            boardColor={boardColor}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene({
  deckTexture,
  wheelTexture,
  trucksColor,
  boardColor,
}: BoardType) {
  return (
    <group>
      <OrbitControls />
      <Environment files={"/hdr/warehouse-256.hdr"} />
      <Skateboard
        deckTextureURLs={[deckTexture]}
        deckTextureURL={deckTexture}
        wheelTextureURLs={[wheelTexture]}
        wheelTextureURL={wheelTexture}
        truckColor={trucksColor}
        boltColor={boardColor}
        constantWheelSpin
      />
      <ContactShadows opacity={0.6} position={[0, -0.08, 0]} />
    </group>
  );
}
