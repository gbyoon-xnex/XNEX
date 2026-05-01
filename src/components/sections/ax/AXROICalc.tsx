'use client';

import React, { useState, useEffect, useRef } from 'react';

const AXROICalc = () => {
  const [empCount, setEmpCount] = useState(30);
  const [workHours, setWorkCount] = useState(2);
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

  const savedHours = Math.round(empCount * workHours * 0.75 * 240);
  const savedMoney = (savedHours * 25000 / 100000000).toFixed(1);

  return (
    <section id="s3" ref={sectionRef}>
      <div className="roi-layout">
        <div className="roi-left rv">
          <h2>직접 계산해보세요.<br /><em>얼마나 아낄 수 있는지.</em></h2>
          <p>실제 고객사 데이터 기반입니다. 인원과 업무 시간을 조정하면 예상 절감 효과를 확인할 수 있습니다.</p>
        </div>
        <div className="calc-card rv">
          <div className="calc-row">
            <div className="calc-lbl">직원 수</div>
            <input
              className="calc-slider"
              type="range"
              min="5"
              max="200"
              value={empCount}
              onChange={(e) => setEmpCount(parseInt(e.target.value))}
            />
            <div className="calc-val"><span>{empCount}</span>명</div>
          </div>
          <div className="calc-row">
            <div className="calc-lbl">1인당 반복업무 시간/일</div>
            <input
              className="calc-slider"
              type="range"
              min="0.5"
              max="6"
              step="0.5"
              value={workHours}
              onChange={(e) => setWorkCount(parseFloat(e.target.value))}
            />
            <div className="calc-val"><span>{workHours}</span>시간</div>
          </div>
          <div className="calc-divider"></div>
          <div className="calc-result">
            <div>
              <div className="calc-result-lbl">연간 절감 가능 시간</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <div className="calc-result-num">{savedHours.toLocaleString()}</div>
                <div className="calc-result-unit">시간</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="calc-result-lbl">예상 비용 절감</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', justifyContent: 'flex-end' }}>
                <div className="calc-result-num" style={{ fontSize: '36px' }}>{savedMoney}</div>
                <div className="calc-result-unit">억원/년</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AXROICalc;