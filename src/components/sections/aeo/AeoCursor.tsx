'use client';

import { useEffect, useRef } from 'react';

export default function AeoCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = cursorRef.current;
    const curR = ringRef.current;
    if (!cur || !curR) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = `${mx}px`;
      cur.style.top = `${my}px`;
    };

    const animCursor = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      curR.style.left = `${rx}px`;
      curR.style.top = `${ry}px`;
      animationId = requestAnimationFrame(animCursor);
    };

    const handleMouseEnter = () => {
      curR.style.width = '60px';
      curR.style.height = '60px';
      curR.style.borderColor = 'rgba(224,32,32,0.6)';
    };

    const handleMouseLeave = () => {
      curR.style.width = '40px';
      curR.style.height = '40px';
      curR.style.borderColor = 'rgba(255,255,255,0.4)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    animCursor();

    const targets = document.querySelectorAll('button, a, .chip, .ref-card, .fq-q');
    targets.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} className="hidden sm:block"></div>
      <div id="cursor-ring" ref={ringRef} className="hidden sm:block"></div>
    </>
  );
}