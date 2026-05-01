'use client';

import { useEffect, useState, useRef } from 'react';

const steps = [
  { num: '01', title: '고객 질문', desc: '매일 1억 건+ AI에게 질문 발생', sub: 'ChatGPT·Gemini·Perplexity', tag: 'USER INPUT', icon: '🙋', color: 'var(--blu)' },
  { num: '02', title: 'AI 크롤링', desc: '수만 개 사이트 1초 스캔', sub: '한국 95% 탈락', tag: 'CRAWL', icon: '🔍', color: '#ff8c00' },
  { num: '03', title: '신뢰도 평가', desc: '4개 AI 각자 평가 공통: E-E-A-T', sub: '전문성·권위·신뢰', tag: 'E-E-A-T', icon: '⚖️', color: '#7c3aed' },
  { num: '04', title: 'AI 답변', desc: 'TOP 3만 노출', sub: '4위 이하 invisible', tag: 'TOP 3', icon: '🏆', color: 'var(--grn)' }
];

export default function AeoPipelineSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fill, setFill] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(ens => {
      if (ens[0].isIntersecting) {
        let si = 0;
        const iv = setInterval(() => {
          setActiveIdx(si);
          si = (si + 1) % steps.length;
        }, 1500);
        
        setTimeout(() => setFill(95), 500);
        
        setTimeout(() => {
          clearInterval(iv);
        }, 10000);
        
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="s5" ref={sectionRef}>
      <div className="pipeline-wrap">
        <h2 className="pipeline-title">AI가 <em>걸러내는</em> 방식</h2>
        <div className="pipeline" id="pipelineEl">
          {steps.map((s, i) => (
            <div key={i} className={`pipe-step ${activeIdx === i ? 'on' : ''}`}>
              <div className="pipe-num">STEP {s.num}</div>
              <div className="pipe-icon" style={{ borderColor: activeIdx === i ? s.color : '' }}>{s.icon}</div>
              <div className="pipe-title">{s.title}</div>
              <div className="pipe-desc">
                {s.desc}<br />
                <span style={{ color: s.color, fontSize: '10px' }}>{s.sub}</span>
              </div>
              <div className="pipe-tag" style={{ color: s.color }}>{s.tag}</div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '28px', width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '18px 28px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '0.14em', color: 'var(--t2)', textTransform: 'uppercase', marginBottom: '8px' }}>AEO 작업의 본질</div>
          <div style={{ fontSize: '14px', color: 'var(--t1)', lineHeight: 1.8 }}>
            <span style={{ color: '#93c5fd' }}>Step 02에서 '읽히게'</span> 만들고 &nbsp;·&nbsp;
            <span style={{ color: '#a78bfa' }}>Step 03에서 '신뢰받게'</span> 만들고 &nbsp;·&nbsp;
            <span style={{ color: 'var(--grn)' }}>Step 04에서 'Top 3 안에 들어가게'</span> 만드는 작업
          </div>
        </div>

        <div className="reject-overlay" id="rejectBar">
          <span>⚠ 한국 홈페이지 STEP 02 탈락 비율</span>
          <div className="reject-bar">
            <div className="reject-fill" style={{ width: `${fill}%` }}></div>
          </div>
          <span style={{ color: 'var(--red2)', fontWeight: 700 }}>95%</span>
        </div>
      </div>
    </section>
  );
}