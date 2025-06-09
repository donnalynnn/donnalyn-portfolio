// Petal.js
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Petal = ({ url, radius, speed, index, total }) => {
  const group = useRef();
  const { scene } = useGLTF(url);

  useFrame(({ clock }) => {
    const angle = (clock.getElapsedTime() * speed + (index * (Math.PI * 2)) / total);
    group.current.position.x = Math.cos(angle) * radius;
    group.current.position.z = Math.sin(angle) * radius;
    group.current.rotation.y = angle;
  });

  return <primitive ref={group} object={scene} scale={3} />;
};

export default Petal;
