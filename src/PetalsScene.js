// PetalsScene.js
import React from 'react';
import { Environment } from '@react-three/drei';
import FloatingPetal from './FloatingPetal';

const petals = [1, 2, 3, 4, 5];
const positions = [
  [-18, 2, 1],   // far left
  [-3.5, 2, -1],
  [-3.8, 1.2, 0.8],
  [3.5, 1.5, 0],  // right
  [4, 2, -1],
];


const PetalsScene = () => (
  <>
    <ambientLight intensity={1.2} />
    <Environment preset="sunset" />
    {petals.map((num, index) => (
      <FloatingPetal
        key={index}
        url={`/Petal${num}.glb`}
        initialPosition={positions[index]}
      />
    ))}
  </>
);

export default PetalsScene;
