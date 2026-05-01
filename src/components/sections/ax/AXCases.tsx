'use client';

import React, { useEffect, useRef } from 'react';

const AXCases = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

    // DRAG SCROLL
    const el = scrollRef.current;
    if (!el) return;

    let down = false;
    let sx = 0;
    let sl = 0;

    const handleMouseDown = (e: MouseEvent) => {
      down = true;
      sx = e.pageX - el.offsetLeft;
      sl = el.scrollLeft;
      el.style.scrollBehavior = 'auto';
    };

    const handleMouseLeave = () => {
      down = false;
    };

    const handleMouseUp = () => {
      down = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!down) return;
      e.preventDefault();
      el.scrollLeft = sl - (e.pageX - el.offsetLeft - sx) * 1.5;
    };

    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseup', handleMouseUp);
    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      revealObserver.disconnect();
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseup', handleMouseUp);
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const sf = () => {
    document.getElementById('s10')?.scrollIntoView({ behavior: 'smooth' });
  };

  const cases = [
    { industry: '유아동 리테일', title: '12개 브랜드<br />460<em>채널</em>', metrics: ['+33~73%', '-80%'], desc: '영업이익 -23.7%, 140명 추가 채용 불가 → 6단계 AI 로드맵 적용' },
    { industry: '이커머스', title: 'ROI<br /><em>2,380%</em>', metrics: ['14,508h', '×3~4'], desc: '4주 8회차 맞춤 교육 → 연간 14,508시간 절감, 콘텐츠 생산량 3~4배' },
    { industry: '중견 뷰티', title: '교육이<br /><em>SaaS가 됐다</em>', metrics: ['-80%', '신사업'], desc: '교육 중 나온 아이디어 → 자동화 도구 개발 → SaaS 신사업화' },
    { industry: '제조/유통', title: '1개월<br /><em>투자 회수</em>', metrics: ['2.6억', '/년'], desc: '30명 교육 → 연간 2.6~3.6억 절감 효과, 투자 회수 기간 약 1개월' },
  ];

  return (
    <section id="s8" ref={sectionRef}>
      <div className="case-header rv">
        <h2>AI 전환,<br /><em>결과로 말합니다.</em></h2>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '10px', color: 'var(--t2)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
          {`← 드래그하여 확인 →`}
        </p>
      </div>
      <div className="case-scroll" id="caseScroll" ref={scrollRef}>
        {cases.map((c, idx) => (
          <div key={idx} className="case-card">
            <div className="cc-industry">{c.industry}</div>
            <div className="cc-title" dangerouslySetInnerHTML={{ __html: c.title }} />
            <div className="cc-metrics">
              {c.metrics.map((m, mIdx) => (
                <span key={mIdx} className="cc-metric">{m}</span>
              ))}
            </div>
            <div className="cc-desc">{c.desc}</div>
          </div>
        ))}
        <div 
          className="case-card" 
          style={{ background: 'var(--org-dim)', borderColor: 'rgba(255,107,53,.25)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', cursor: 'pointer', gap: '12px' }}
          onClick={sf}
        >
          <div style={{ fontFamily: 'var(--fd)', fontSize: '32px', color: 'var(--org)' }}>우리 회사도?</div>
          <div style={{ fontFamily: 'var(--fm)', fontSize: '12px', color: 'var(--t2)', letterSpacing: '.1em', textTransform: 'uppercase' }}>무료 진단으로 확인하세요</div>
          <div style={{ fontFamily: 'var(--fm)', fontSize: '13px', fontWeight: '700', color: '#000', background: 'var(--org)', padding: '11px 24px', borderRadius: '3px', letterSpacing: '.08em', textTransform: 'uppercase' }}>신청하기 →</div>
        </div>
      </div>
    </section>
  );
};

export default AXCases;