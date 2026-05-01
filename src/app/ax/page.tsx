'use client';

import React, { useEffect, useRef, useState } from 'react';
import './ax.css';
import AXHero from '@/components/sections/ax/AXHero';
import AXTransformBand from '@/components/sections/ax/AXTransformBand';
import AXROICalc from '@/components/sections/ax/AXROICalc';
import AXBeforeAfter from '@/components/sections/ax/AXBeforeAfter';
import AXAlliance from '@/components/sections/ax/AXAlliance';
import AXProcess from '@/components/sections/ax/AXProcess';
import AXDiagnosis from '@/components/sections/ax/AXDiagnosis';
import AXCases from '@/components/sections/ax/AXCases';
import AXScarcity from '@/components/sections/ax/AXScarcity';
import AXForm from '@/components/sections/ax/AXForm';
import AXFaq from '@/components/sections/ax/AXFaq';

export default function AxPage() {
  const curRef = useRef<HTMLDivElement>(null);
  const curRRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFcta, setShowFcta] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animationId: number;
    let cursorVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorVisible) {
        cursorVisible = true;
        if (curRef.current) curRef.current.style.opacity = '1';
        if (curRRef.current) curRRef.current.style.opacity = '1';
      }
      mx = e.clientX;
      my = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = mx + 'px';
        curRef.current.style.top = my + 'px';
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (curRRef.current) {
        curRRef.current.style.left = rx + 'px';
        curRRef.current.style.top = ry + 'px';
      }
      animationId = requestAnimationFrame(loop);
    };

    const handleScroll = () => {
      const s = window.scrollY;
      setIsScrolled(s > 60);
      setShowFcta(s > 400);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    loop();

    const interactiveElements = document.querySelectorAll('button, a, .cl-item, .fq-q, .case-card, .ba-item, .tb, .tr-item');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const sf = () => {
    document.getElementById('s10')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`ax-page ${isHovering ? 'ax-page-body hovering' : 'ax-page-body'}`}>
      <div id="cur" ref={curRef}><div className="cur-dot"></div></div>
      <div className="cur-ring" id="curR" ref={curRRef}></div>
      
      <div className={`fcta ${showFcta ? 'on' : ''}`} id="fcta">
        <button className="fcta-btn" onClick={sf}>무료 AX 진단 신청 →</button>
      </div>

      <AXHero />
      <AXTransformBand />
      <AXROICalc />
      <AXBeforeAfter />
      <AXAlliance />
      <AXProcess />
      <AXDiagnosis />
      <AXCases />
      <AXScarcity />
      <AXForm />
      <AXFaq />
    </div>
  );
}