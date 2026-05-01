'use client';

import { useEffect, useState, useRef } from 'react';

export default function AeoPodiumSection() {
  const [visible, setVisible] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(ens => {
      if (ens[0].isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="s6">
      <div className="s6-wrap" ref={wrapRef}>
        <h2 className="s6-title">AI 답변에는 <em>3개의 자리</em>만 있습니다.</h2>
        <div className="s6-source">* 출처: Trustmary, Metricus, Search Engine Land 2026</div>
        <div className="podium-wrap">
          {[1, 2, 3].map((rank, i) => (
            <div
              key={rank}
              className={`podium-slot ${!visible ? 'invisible' : ''}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.15}s, opacity 0.4s ${i * 0.15}s`
              }}
            >
              <div className="podium-block">
                <div className="podium-rank">{rank}</div>
              </div>
              <div className="podium-label">{rank}순위 노출</div>
            </div>
          ))}
          <div className="podium-slot invisible" style={{ marginLeft: '24px' }}>
            <div className="podium-block" style={{ flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '18px' }}>👻</div>
            </div>
            <div className="podium-label">4위↓ invisible</div>
          </div>
        </div>
        <div className="s6-yellow-box">
          AI는 <strong>처음 학습한 회사를 더 신뢰</strong>합니다. 지금 Top 3에 진입한 회사는 6개월 뒤에도 Top 3.<br />
          <strong>후발주자는 5배의 콘텐츠와 시간이 필요합니다.</strong>
        </div>
      </div>
    </section>
  );
}