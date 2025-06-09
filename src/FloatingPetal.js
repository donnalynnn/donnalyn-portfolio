// FloatingPetal.js
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingPetal = ({ url, initialPosition }) => {
  const group = useRef();
  const { scene } = useGLTF(url);

  const floatOffset = Math.random() * 1000; // gives each petal a different motion

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + floatOffset;
    group.current.position.y = initialPosition[1] + Math.sin(t * 0.6) * 0.2;
    group.current.position.x = initialPosition[0] + Math.sin(t * 0.3) * 0.1;
    group.current.rotation.y = Math.sin(t * 0.2) * 0.5;
  });

  return <primitive ref={group} object={scene} scale={5} position={initialPosition} />;
};

export default FloatingPetal;
