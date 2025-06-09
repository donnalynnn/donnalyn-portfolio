// OrbitScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Petal from './Petal.js';

const OrbitScene = () => {
  const petals = [1, 2, 3, 4, 5];

  return (
    <Canvas camera={{ position: [0, 2, 16], fov: 50 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="sunset" />
      {petals.map((num, i) => (
        <Petal
          key={i}
          url={`/Petal${num}.glb`}
          radius={2}
          speed={0.5}
          index={i}
          total={petals.length}
        />
      ))}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default OrbitScene;
