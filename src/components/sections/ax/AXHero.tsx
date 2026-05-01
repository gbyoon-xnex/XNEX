'use client';

import React, { useEffect, useRef } from 'react';

const AXHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hc1Ref = useRef<HTMLDivElement>(null);
  const hc2Ref = useRef<HTMLDivElement>(null);
  const hc3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // BG CANVAS
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;

    let W: number, H: number, pts: { x: number; y: number; vx: number; vy: number; r: number; col: string }[] = [];
    let animationId: number;

    const resize = () => {
      W = c.width = window.innerWidth;
      H = c.height = window.innerHeight;
    };

    const init = () => {
      pts = [];
      const n = Math.floor((W * H) / 18000);
      for (let i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          r: Math.random() * 0.7 + 0.2,
          col: Math.random() < 0.12 ? 'rgba(255,107,53,' : 'rgba(255,255,255,',
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = 'rgba(255,255,255,' + 0.03 * (1 - d / 110) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.col + '.35)';
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    window.addEventListener('resize', () => {
      resize();
      init();
    });

    // COUNTERS
    const animNum = (el: HTMLDivElement | null, target: number, dur: number, dec?: boolean) => {
      if (!el) return;
      const start = performance.now();
      const f = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const v = p * target;
        el.textContent = dec ? v.toFixed(1) : Math.floor(v).toLocaleString();
        if (p < 1) requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    };

    const timer = setTimeout(() => {
      animNum(hc1Ref.current, 14508, 2000);
      animNum(hc2Ref.current, 2380, 2000);
      animNum(hc3Ref.current, 6, 1500);
    }, 400);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(timer);
    };
  }, []);

  const sf = () => {
    document.getElementById('s10')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <canvas ref={canvasRef} id="bgC" />
      <div className="hero-bg-text">AI전환</div>
      <div className="hero-inner">
        <h1 className="hero-h1">
          <div className="reveal-word">교육은<br />끝났다.</div>
          <div className="line2">
            <span className="reveal-word">업무가</span>{' '}
            <span className="reveal-word" style={{ animationDelay: '.15s' }}>바뀌어야</span>{' '}
            <span className="reveal-word" style={{ animationDelay: '.25s' }}>한다.</span>
          </div>
        </h1>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginTop: '8px' }}>
          <button className="gnb-cta" style={{ fontSize: '13px', padding: '13px 28px' }} onClick={sf}>
            무료 AX 진단 신청 →
          </button>
        </div>
      </div>
      <aside className="hero-aside">
        <div className="hero-stat">
          <div className="hs-num" ref={hc1Ref}>0</div>
          <div className="hs-lbl">절감 시간/연</div>
        </div>
        <div className="hero-stat">
          <div className="hs-num"><span ref={hc2Ref}>0</span>%+</div>
          <div className="hs-lbl">ROI 달성</div>
        </div>
        <div className="hero-stat">
          <div className="hs-num"><span ref={hc3Ref}>0</span>개월</div>
          <div className="hs-lbl">평균 전환 완성</div>
        </div>
      </aside>
      <div className="scroll-ind">
        <span>scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default AXHero;