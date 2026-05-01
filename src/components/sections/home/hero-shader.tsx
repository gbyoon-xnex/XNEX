'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroShader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const xObjectRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer: import('three').WebGLRenderer;
    let scene: import('three').Scene;
    let camera: import('three').Camera;
    let uniforms: { [uniform: string]: import('three').IUniform };
    let animationFrameId: number;

    const init = async () => {
      const THREE = await import('three');

      camera = new THREE.Camera();
      camera.position.z = 1;

      scene = new THREE.Scene();
      const geometry = new THREE.PlaneGeometry(2, 2);

      uniforms = {
        time: { value: 1.0 },
        resolution: { value: new THREE.Vector2() },
      };

      const vertexShader = `
        void main() {
          gl_Position = vec4( position, 1.0 );
        }
      `;

      const fragmentShader = `
        #define TWO_PI 6.2831853072
        #define PI 3.14159265359

        precision highp float;
        uniform vec2 resolution;
        uniform float time;

        float random (in float x) {
          return fract(sin(x)*1e4);
        }
        float random (vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);
        }

        void main(void) {
          vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

          vec2 fMosaicScal = vec2(4.0, 2.0);
          vec2 vScreenSize = vec2(256,256);
          uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
          uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

          float t = time*0.06+random(uv.x)*0.4;
          float lineWidth = 0.0008;

          vec3 color = vec3(0.0);
          for(int j = 0; j < 3; j++){
            for(int i=0; i < 5; i++){
              color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*1.0 - length(uv));
            }
          }

          gl_FragColor = vec4(color[2],color[1],color[0],1.0);
        }
      `;

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      
      if (containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
      }

      const onResize = () => {
        if (!containerRef.current || !renderer) return;
        const rect = containerRef.current.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height);
        uniforms.resolution.value.x = renderer.domElement.width;
        uniforms.resolution.value.y = renderer.domElement.height;
      };

      onResize();
      window.addEventListener('resize', onResize);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        uniforms.time.value += 0.05;
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(animationFrameId);
        renderer.dispose();
      };
    };

    const cleanupPromise = init();

    return () => {
      cleanupPromise.then(cleanup => cleanup && cleanup());
    };
  }, []);

  // X Object Tilt Logic
  useEffect(() => {
    const el = xObjectRef.current;
    if (!el) return;

    let lastX: number | null = null;
    let lastY: number | null = null;
    let lastT = 0;
    let targetRX = 0;
    let targetRY = 0;
    let rx = 0;
    let ry = 0;
    const MAX = 28;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (lastX !== null && lastY !== null) {
        const dt = Math.max(8, now - lastT);
        const vx = (e.clientX - lastX) / dt;
        const vy = (e.clientY - lastY) / dt;
        targetRY = Math.max(-MAX, Math.min(MAX, targetRY + vx * 10));
        targetRX = Math.max(-MAX, Math.min(MAX, targetRX - vy * 10));
      }
      lastX = e.clientX;
      lastY = e.clientY;
      lastT = now;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const loop = () => {
      animationId = requestAnimationFrame(loop);
      targetRX *= 0.9;
      targetRY *= 0.9;
      rx += (targetRX - rx) * 0.12;
      ry += (targetRY - ry) * 0.12;
      if (el) {
        el.style.transform = `perspective(600px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      }
    };

    loop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black">
      <div ref={containerRef} id="shader-container" className="w-full h-full absolute inset-0" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-[5]" />
      <Image
        ref={xObjectRef}
        id="hero-x-object"
        src="/images/object(sharp2).png"
        alt="X"
        width={420}
        height={420}
        className="pointer-events-none z-10 w-[28vw] max-w-[420px] h-auto transition-transform"
        style={{ filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.5))', willChange: 'transform' }}
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </div>
  );
}