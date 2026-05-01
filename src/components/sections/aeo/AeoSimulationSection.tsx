'use client';

import { useEffect, useState } from 'react';

export default function AeoSimulationSection() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const ids = ['ts1', 'ts2', 'ts3'];
    let i = 0;
    let timer: NodeJS.Timeout;

    const next = () => {
      if (i < ids.length) {
        setStep(i + 1);
        i++;
        timer = setTimeout(next, i === 1 ? 1800 : i === 2 ? 2800 : 3800);
      } else {
        timer = setTimeout(() => {
          i = 0;
          setStep(0);
          setTimeout(next, 500);
        }, 5000);
      }
    };

    timer = setTimeout(next, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="s3">
      <div className="sim-full">
        <div className="sim-left">
          <div className="sim-left-title">
            AI는 우리를<br />
            이렇게 <em>읽고 답합니다.</em>
          </div>
          <div className="sim-left-sub">
            실시간으로 수만 개의 사이트를 스캔하고,<br />
            신뢰도를 평가해 Top 3만 답변에 넣습니다.<br />
            <strong>지금 당신의 사이트는 읽히고 있습니까?</strong>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(30,144,255,0.12)', border: '1px solid rgba(30,144,255,0.3)', borderRadius: '4px', padding: '5px 12px', fontFamily: 'var(--fm)', fontSize: '11px', color: '#93c5fd' }}>⚡ ChatGPT</span>
            <span style={{ background: 'rgba(0,232,122,0.08)', border: '1px solid rgba(0,232,122,0.25)', borderRadius: '4px', padding: '5px 12px', fontFamily: 'var(--fm)', fontSize: '11px', color: 'var(--grn)' }}>◆ Gemini</span>
            <span style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '4px', padding: '5px 12px', fontFamily: 'var(--fm)', fontSize: '11px', color: '#d8b4fe' }}>◎ Perplexity</span>
            <span style={{ background: 'rgba(255,184,0,0.08)', border: '1px solid rgba(255,184,0,0.25)', borderRadius: '4px', padding: '5px 12px', fontFamily: 'var(--fm)', fontSize: '11px', color: 'var(--yel)' }}>● Claude</span>
          </div>
        </div>
        <div className="sim-right">
          <div className="terminal">
            <div className="terminal-bar">
              <div className="t-dot r"></div><div className="t-dot y"></div><div className="t-dot g"></div>
              <div className="t-title">Gemini Live Simulation</div>
              <div className="t-live">LIVE</div>
            </div>
            <div className="terminal-body">
              <div className={`t-step ${step >= 1 ? 'on' : ''}`} id="ts1">
                <div className="t-user-msg">강남 리프팅 추천해줘</div>
              </div>
              <div className={`t-step ${step >= 2 ? 'on' : ''}`} id="ts2">
                <div className="t-log">
                  <div className="tl spin">↻ 검색 중...</div>
                  <div className="tl fail">✗ 한국 홈페이지 95% 인용 불가</div>
                  <div className="tl ok">✓ XNEX 작업 사이트 인용 가능</div>
                  <div className="tl ok">✓ Top 3 후보 진입</div>
                </div>
              </div>
              <div className={`t-step ${step >= 3 ? 'on' : ''}`} id="ts3">
                <div className="t-result">
                  <div className="t-res-head">💡 강남 리프팅 TOP 3</div>
                  <div className="t-res-row hi"><span className="t-badge">★ XNEX</span> 1. 올리프팅 클리닉 — 울세라 전문, 강남 역삼</div>
                  <div className="t-res-row dim">2. 경쟁 병원 B</div>
                  <div className="t-res-row dim">3. 경쟁 병원 C</div>
                  <div className="t-warn">↗ Top 3 못 들면 답변에 안 나타남</div>
                </div>
              </div>
            </div>
            <div className="terminal-footer">
              <span className="t-eng">ChatGPT</span>
              <span className="t-eng">Gemini</span>
              <span className="t-eng">Perplexity</span>
              <span className="t-eng">Claude</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}