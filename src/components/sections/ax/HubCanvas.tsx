'use client';

import React, { useEffect, useRef } from 'react';

const HubCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;

    const ctx = c.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, cx = 0, cy = 0, R = 0;
    let t = 0, mx2 = 0, my2 = 0, pulse = 0;
    let animationId: number;

    const satellites = [
      { n: '글로벌케이', i: '🎓', base: 0 },
      { n: '엑시온', i: '⚙️', base: Math.PI * 0.4 },
      { n: '브랜드모먼트', i: '📣', base: Math.PI * 0.8 },
      { n: '하이퍼AI', i: '🎬', base: Math.PI * 1.2 },
      { n: '전략설계', i: '🗂️', base: Math.PI * 1.6 },
    ];
    const phasedPulse = satellites.map((_, i) => i * (Math.PI * 2 / satellites.length));

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        if (width > 0) {
          W = c.width = width;
          H = c.height = width;
          cx = W / 2;
          cy = W / 2;
          R = W * 0.38;
          if (mx2 === 0) mx2 = cx;
          if (my2 === 0) my2 = cy;
        }
      }
    });

    if (c.parentElement) {
      resizeObserver.observe(c.parentElement);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = c.getBoundingClientRect();
      mx2 = e.clientX - rect.left;
      my2 = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mx2 = cx;
      my2 = cy;
    };

    c.addEventListener('mousemove', handleMouseMove);
    c.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      if (W === 0 || H === 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, W, H);
      pulse += 0.04;

      const mdx = mx2 - cx;
      const mdy = my2 - cy;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      const speed = 0.004 + Math.min(mdist / W, 0.4) * 0.018;

      const ringAlpha = 0.08 + Math.sin(pulse) * 0.03;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,107,53,${ringAlpha})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 12]);
      ctx.stroke();
      ctx.setLineDash([]);

      const glowR = Math.max(1, 28 + Math.sin(pulse) * 0.6);
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR * 2.5);
      grd.addColorStop(0, 'rgba(255,107,53,.5)');
      grd.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, glowR * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      const pos = satellites.map((n, i) => {
        const pR = R * (1 + Math.sin(pulse + phasedPulse[i]) * 0.12);
        const a = n.base + t;
        let x = cx + pR * Math.cos(a);
        let y = cy + pR * Math.sin(a);
        const dx = x - mx2;
        const dy = y - my2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80 && dist > 0) {
          const push = (80 - dist) / 80 * 18;
          x += (dx / dist) * push;
          y += (dy / dist) * push;
        }
        return { x, y, a };
      });

      pos.forEach(p => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(p.x, p.y);
        const lineDist = Math.sqrt((p.x - cx) ** 2 + (p.y - cy) ** 2);
        const lineAlpha = 0.15 + 0.1 * (1 - (lineDist / (R || 1)));
        ctx.strokeStyle = `rgba(255,107,53,${lineAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      pos.forEach((p, i) => {
        const next = pos[(i + 1) % pos.length];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(next.x, next.y);
        ctx.strokeStyle = 'rgba(255,255,255,.04)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      pos.forEach((p, i) => {
        const distToMouse = Math.sqrt((p.x - mx2) ** 2 + (p.y - my2) ** 2);
        const hovered = distToMouse < 22;
        const radius = hovered ? 32 : 22;
        const safeRadius = Math.max(1, radius);
        
        const ng = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, safeRadius);
        ng.addColorStop(0, hovered ? 'rgba(255,107,53,.3)' : 'rgba(255,255,255,.07)');
        ng.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(p.x, p.y, safeRadius, 0, Math.PI * 2);
        ctx.fillStyle = ng;
        ctx.fill();

        const circleRadius = hovered ? 16 : 13;
        ctx.beginPath();
        ctx.arc(p.x, p.y, circleRadius, 0, Math.PI * 2);
        ctx.fillStyle = hovered ? 'rgba(255,107,53,.2)' : 'rgba(255,255,255,.06)';
        ctx.strokeStyle = hovered ? 'rgba(255,107,53,.7)' : 'rgba(255,255,255,.2)';
        ctx.lineWidth = hovered ? 1.5 : 1;
        ctx.fill();
        ctx.stroke();

        ctx.font = '13px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(satellites[i].i, p.x, p.y);
      });

      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.fillStyle = '#FF6B35';
      ctx.strokeStyle = 'rgba(255,107,53,.8)';
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
      ctx.font = '15px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('⚡', cx, cy);

      t += speed;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      c.removeEventListener('mousemove', handleMouseMove);
      c.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} id="hubCanvas" />;
};

export default HubCanvas;