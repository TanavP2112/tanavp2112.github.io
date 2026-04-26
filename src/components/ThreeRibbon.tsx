import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Subtle animated tube/ribbon for inner-page banners. */
export function ThreeRibbon() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const state = { t0: 0 };
    class WaveCurve extends THREE.Curve<THREE.Vector3> {
      constructor() { super(); }
      getPoint(t: number, target: THREE.Vector3 = new THREE.Vector3()) {
        const x = (t - 0.5) * 14;
        const y = Math.sin(t * Math.PI * 4 + state.t0) * 0.8;
        const z = Math.cos(t * Math.PI * 3 + state.t0) * 0.8;
        return target.set(x, y, z);
      }
    }
    const curve = new WaveCurve();
    let geometry = new THREE.TubeGeometry(curve, 200, 0.04, 8, false);
    const material = new THREE.MeshBasicMaterial({
      color: 0x4d9eff,
      transparent: true,
      opacity: 0.7,
    });
    const tube = new THREE.Mesh(geometry, material);
    scene.add(tube);

    const onResize = () => {
      const ww = mount.clientWidth;
      const hh = mount.clientHeight;
      camera.aspect = ww / hh;
      camera.updateProjectionMatrix();
      renderer.setSize(ww, hh);
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      state.t0 += 0.01;
      const newGeo = new THREE.TubeGeometry(curve, 200, 0.04, 8, false);
      tube.geometry.dispose();
      tube.geometry = newGeo;
      geometry = newGeo;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
