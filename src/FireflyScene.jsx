// src/components/FireflyScene.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function FireflyScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const fireflies = [];

    function getFirefly() {
      let hue = 0.6 + Math.random() * 0.2;
      if (Math.random() < 0.02) hue = 0.25;
    //   const color = new THREE.Color().setHSL(hue, 1, 0.5);
    const color = new THREE.Color("#FF8800");

      const geo = new THREE.IcosahedronGeometry(0.02, 2);
      const mat = new THREE.MeshBasicMaterial({ color });
      const mesh = new THREE.Mesh(geo, mat);
      const light = new THREE.SpotLight(color, 2);
      mesh.add(light);

      const glowMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.15,
      });

      [1.5, 2.5, 4, 6].forEach((scale) => {
        const glow = new THREE.Mesh(geo, glowMat);
        glow.scale.multiplyScalar(scale);
        mesh.add(glow);
      });

      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      );

      function update() {
        mesh.position.add(velocity);
        ["x", "y", "z"].forEach((axis) => {
          if (Math.abs(mesh.position[axis]) > 4) {
            velocity[axis] *= -1;
            mesh.position[axis] = THREE.MathUtils.clamp(
              mesh.position[axis],
              -4,
              4
            );
          }
        });
      }

      mesh.userData = { update };
      return mesh;
    }

    for (let i = 0; i < 80; i++) {
      const f = getFirefly();
      scene.add(f);
      fireflies.push(f);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      fireflies.forEach((f) => f.userData.update());
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    />
  );
}
