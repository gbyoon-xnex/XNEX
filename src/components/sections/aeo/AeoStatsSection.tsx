'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

export default function AeoStatsSection() {
  const [counts, setCounts] = useState({ cnt1: 0, cnt2: 0, cnt3: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  const animate = useCallback((target1: number, target2: number, target3: number) => {
    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      
      setCounts({
        cnt1: Math.floor(progress * target1),
        cnt2: Math.floor(progress * target2),
        cnt3: Number((progress * target3).toFixed(1))
      });

      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !triggered) {
        setTriggered(true);
        animate(95, 5, 0.1);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [triggered, animate]);

  return (
    <section id="s2" ref={sectionRef}>
      <div className="s2-wrap">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(1.4rem,2.8vw,2.4rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '6px' }}>인용도 못 받으면 추천도 없습니다.</h2>
          <div style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(1.2rem,2vw,1.8rem)', fontWeight: 700, color: 'var(--red2)' }}>엑스넥스가 해드리는 일은 '인용'입니다.</div>
          <div style={{ fontSize: '13px', color: 'var(--t2)', marginTop: '8px' }}>인용이 누적되면 추천으로 자연스럽게 진화합니다.</div>
        </div>
        <div className="big-stat-grid">
          <div className="big-stat">
            <div className="big-stat-n red" id="cnt1">{triggered ? counts.cnt1 : 95}%</div>
            <div className="big-stat-l">한국 홈페이지 중 AI가 인용 못 하는 비율 (자체 추정)</div>
          </div>
          <div className="big-stat">
            <div className="big-stat-n yel" id="cnt2">{triggered ? `3~5` : '3~5'}개</div>
            <div className="big-stat-l">AI가 한 번에 답하는 브랜드 수</div>
          </div>
          <div className="big-stat">
            <div className="big-stat-n grn" id="cnt3">{triggered ? counts.cnt3 : 0.1}%</div>
            <div className="big-stat-l">실제로 AI에게 추천받는 회사의 비율</div>
          </div>
        </div>
        <div className="evo-visual">
          <div className="evo-v-card stage1">
            <div className="evo-v-pct">95%</div>
            <div className="evo-v-ico">❌</div>
            <div className="evo-v-name">무시 IGNORED</div>
            <div className="evo-v-desc">AI가 사이트 자체를 읽지 못함<br />이미지·JS·Schema 부재</div>
            <span className="evo-v-tag">한국 홈페이지 대다수</span>
          </div>
          <div className="evo-arrow-v">→</div>
          <div className="evo-v-card stage2">
            <div className="evo-v-pct">5%</div>
            <div className="evo-v-ico">△</div>
            <div className="evo-v-name">인용 CITATION</div>
            <div className="evo-v-desc">AI가 정보를 출처로 가져감<br />신뢰 데이터로 누적 시작</div>
            <span className="evo-v-tag">★ 엑스넥스 작업 영역</span>
          </div>
          <div className="evo-arrow-v">→</div>
          <div className="evo-v-card stage3">
            <div className="evo-v-pct">0.1%</div>
            <div className="evo-v-ico">✓</div>
            <div className="evo-v-name">추천 RECOMMENDATION</div>
            <div className="evo-v-desc">AI가 직접 회사명·URL 언급<br />클릭률 +340% 사례</div>
            <span className="evo-v-tag">인용이 누적된 결과</span>
          </div>
        </div>
        
        <div style={{ marginTop: '24px', background: '#000', border: '1px solid rgba(255,255,255,0.1)', borderLeft: '3px solid var(--red2)', borderRadius: '6px', padding: '18px 24px', fontSize: '13px', color: 'var(--t1)', lineHeight: 1.8 }}>
          엑스넥스가 책임지는 단계는 <strong style={{ color: 'var(--red2)' }}>02 '인용'</strong>입니다. 한국의 95% 기업이 못 들어가는 <strong style={{ color: '#fff' }}>'AI가 읽는 회사'</strong> 그룹에 진입시켜 드립니다. 인용 데이터가 쌓이면 03 '추천' 단계로 자연 진화합니다. <em style={{ fontStyle: 'normal', color: 'var(--t2)' }}>(추천은 결과지, 시작점이 아닙니다)</em>
        </div>

        <div style={{ marginTop: '28px', width: '100%', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '20px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', textAlign: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--red2)', textTransform: 'uppercase', marginBottom: '6px' }}>책임 범위</div>
            <div style={{ fontSize: '13px', color: 'var(--t1)', lineHeight: 1.7 }}>엑스넥스가 책임지는 단계는<br /><strong style={{ color: '#fff' }}>02 '인용'</strong>입니다.</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--yel)', textTransform: 'uppercase', marginBottom: '6px' }}>진입 목표</div>
            <div style={{ fontSize: '13px', color: 'var(--t1)', lineHeight: 1.7 }}>한국 95% 기업이 못 들어가는<br /><strong style={{ color: '#fff' }}>'AI가 읽는 회사'</strong> 그룹 진입</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--grn)', textTransform: 'uppercase', marginBottom: '6px' }}>자연 진화</div>
            <div style={{ fontSize: '13px', color: 'var(--t1)', lineHeight: 1.7 }}>인용 데이터 누적 →<br /><strong style={{ color: '#fff' }}>03 '추천' 단계</strong>로 자연 진화</div>
          </div>
        </div>
      </div>
    </section>
  );
}