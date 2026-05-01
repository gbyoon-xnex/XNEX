'use client';

import React, { useEffect, useRef } from 'react';

const AXProcess = () => {
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

  const steps = [
    { num: '01', badge: 'FREE', badgeType: 'free', h: '무료 유선 상담', desc: '담당 PM이 현황 파악. <strong>진단은 무료입니다.</strong>' },
    { num: '02', badge: 'FREE', badgeType: 'free', h: '대면 미팅 & 진단', desc: '4개 영역 정밀 진단. <strong>구체적 로드맵 제시.</strong>' },
    { num: '03', badge: 'STRATEGY', badgeType: 'normal', h: '맞춤 솔루션 설계', desc: 'ROI 높은 순서로 우선순위 설계.' },
    { num: '04', badge: 'EXECUTE', badgeType: 'normal', h: 'V5 전문가 직접 실행', desc: '5개 법인 직접 투입. <strong>실전 실행.</strong>' },
    { num: '05', badge: 'ONGOING', badgeType: 'normal', h: '성과 보고 & 사후 지원', desc: '성과가 날 때까지 <strong>함께합니다.</strong>' },
  ];

  return (
    <section id="s6" ref={sectionRef}>
      <div className="proc-header rv">
        <h2>신청부터 성과까지 <em>5단계</em></h2>
      </div>
      <div className="proc-track">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="proc-step rv">
              <div className="proc-num">{step.num}</div>
              <span className={`proc-badge ${step.badgeType}`}>{step.badge}</span>
              <div className="proc-h">{step.h}</div>
              <div className="proc-desc" dangerouslySetInnerHTML={{ __html: step.desc }} />
            </div>
            {/* Optional arrow between steps could be added here if it was in original design */}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default AXProcess;