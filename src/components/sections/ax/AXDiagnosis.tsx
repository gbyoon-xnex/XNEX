'use client';

import React, { useState, useEffect, useRef } from 'react';

const AXDiagnosis = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(6).fill(false));
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

  const checklistData = [
    'AI 도입은 알지만 어디서 시작할지 모른다',
    '직원 교육 후 달라진 게 없다',
    '경쟁사는 AI로 앞서가는 것 같아 불안하다',
    '컨설팅은 받았지만 실행이 안 된다',
    'ChatGPT는 쓰는데 업무 연결이 안 된다',
    'AI 인력 비용도, 격차도 부담스럽다',
  ];

  const kpiData = [
    { h: '—', r: '—', c: '—', u: '—' },
    { h: '2,400h', r: '480%', c: '8mo', u: '30%' },
    { h: '4,800h', r: '960%', c: '7mo', u: '45%' },
    { h: '7,200h', r: '1,440%', c: '6mo', u: '60%' },
    { h: '9,600h', r: '1,920%', c: '6mo', u: '70%' },
    { h: '12,000h', r: '2,380%', c: '5mo', u: '80%' },
    { h: '14,508h', r: '2,380%+', c: '5mo', u: '90%' },
  ];

  const diagMsgs = [
    '// 왼쪽 항목을 체크하면 AI 전환 긴급도를 진단합니다.',
    'AI 전환 시작을 고려해보세요.',
    '부분적 도입 검토가 필요합니다.',
    '3개 이상 — 지금이 전환점입니다.',
    '즉각적인 AI 전환 설계가 필요합니다.',
    '5개 이상 — AI 전환이 매우 시급합니다.',
    '전 항목 해당! 즉시 무료 진단을 받으세요.',
  ];

  const toggleItem = (idx: number) => {
    const newChecked = [...checkedItems];
    newChecked[idx] = !newChecked[idx];
    setCheckedItems(newChecked);
  };

  const count = checkedItems.filter(Boolean).length;
  const pct = Math.round((count / 6) * 100);
  const currentKPI = kpiData[count];
  const currentMsg = diagMsgs[count];
  const isUrgent = count >= 3;
  const showKPIs = count >= 2;

  const sf = () => {
    document.getElementById('s10')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="s7" ref={sectionRef}>
      <div className="check-layout">
        <div className="check-left rv">
          <h2>지금 귀사에<br /><em>해당됩니까?</em></h2>
          <p style={{ fontSize: '13px', color: 'var(--t2)', lineHeight: '1.8', marginTop: '16px' }}>
            체크할수록 오른쪽에서 진단 결과를 확인하세요.
          </p>
          <div className="cl-items" style={{ marginTop: '32px' }}>
            {checklistData.map((item, idx) => (
              <div
                key={idx}
                className={`cl-item ${checkedItems[idx] ? 'on' : ''}`}
                onClick={() => toggleItem(idx)}
              >
                <div className="cl-box">{checkedItems[idx] ? '✓' : ''}</div>
                <span className="cl-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="diag-result rv" id="diagResult">
          <div className="diag-score">{count}</div>
          <div className="diag-bar-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '10px', color: 'var(--t2)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
                전환 긴급도
              </span>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '10px', color: 'var(--org)' }}>
                {pct}%
              </span>
            </div>
            <div className="diag-bar-track">
              <div className="diag-bar-fill" style={{ width: `${pct}%` }}></div>
            </div>
          </div>
          <div className={`diag-msg ${isUrgent ? 'urgent' : ''}`} dangerouslySetInnerHTML={{ __html: currentMsg }} />
          <div className={`diag-kpis ${showKPIs ? 'show' : ''}`}>
            <div className="dk"><div className="dk-n">{currentKPI.h}</div><div className="dk-l">예상 절감 시간/연</div></div>
            <div className="dk"><div className="dk-n">{currentKPI.r}</div><div className="dk-l">예상 ROI</div></div>
            <div className="dk"><div className="dk-n">{currentKPI.c}</div><div className="dk-l">전환 완성 기간</div></div>
            <div className="dk"><div className="dk-n">{currentKPI.u}</div><div className="dk-l">업무 자동화율</div></div>
          </div>
          <button
            className={`gnb-cta diag-cta ${isUrgent ? 'show' : ''}`}
            style={{ marginTop: '4px', fontSize: '12px', width: '100%', padding: '13px' }}
            onClick={sf}
          >
            지금 무료 진단 신청 →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AXDiagnosis;