'use client';

import React, { useEffect, useRef } from 'react';
import HubCanvas from './HubCanvas';

const AXAlliance = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.07 }
    );

    const rvElements = section.querySelectorAll('.rv');
    rvElements.forEach(el => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <section id="s5" ref={sectionRef}>
      <div className="alliance-inner">
        <div className="hub-canvas-wrap rv">
          <HubCanvas />
        </div>
        <div className="alliance-text rv">
          <h2>하나의 계약,<br /><em>5개 전문팀.</em></h2>
          <div className="team-rows">
            <div className="tr-item"><span className="tr-name">XNEX AX</span><span className="tr-role">전략 총괄 · PM</span></div>
            <div className="tr-item"><span className="tr-name">글로벌케이</span><span className="tr-role">교육 설계 · 커리큘럼</span></div>
            <div className="tr-item"><span className="tr-name">엑시온</span><span className="tr-role">SaaS 개발 · 자동화</span></div>
            <div className="tr-item"><span className="tr-name">브랜드모먼트</span><span className="tr-role">마케팅 · 디자인</span></div>
            <div className="tr-item"><span className="tr-name">하이퍼 AI 스튜디오</span><span className="tr-role">AI 영상 제작</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AXAlliance;