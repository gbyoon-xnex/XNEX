'use client';

import { useEffect, useRef } from 'react';

const refs = [
  { num: '01 · 부동산/등기', name: '메타스타', cat: 'metastarglobal.io', kpi: '1위', domain: '문의 급증 ↗', href: 'https://metastarglobal.io' },
  { num: '02 · 병원/의원', name: '올리프팅 클리닉', cat: 'alllitingclinic.co.kr', kpi: '1위 / +340%', domain: '클릭률 ↗', href: 'https://alllitingclinic.co.kr' },
  { num: '03 · 학원/교육', name: '길벗아카데미', cat: 'gilbutacademy.com', kpi: '1위 / +210%', domain: '문의 ↗', href: 'https://gilbutacademy.com' },
  { num: '04 · 쇼핑몰/이커머스', name: 'OKKANE', cat: 'okkane.co.kr', kpi: '상위 / +185%', domain: '매출 ↗', href: 'https://okkane.co.kr' },
  { num: '05 · 인테리어/시공', name: '큐플레이스', cat: 'qplace.kr', kpi: 'TOP / +267%', domain: '상담 ↗', href: 'https://qplace.kr' },
  { num: '06 · 여행/숙박', name: '베이힐 풀앤빌라', cat: 'bayhill.co.kr', kpi: '2위 / +156%', domain: '예약 ↗', href: 'https://bayhill.co.kr' },
  { num: '07 · 환경/에너지', name: 'K에코텍', cat: 'k-ecotech.co.kr', kpi: '작업중', domain: 'AI 진입 준비 ↗', href: '#', ongoing: true }
];

export default function AeoReferenceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.ref-card');
    if (!cards) return;

    const handleMouseMove = (e: MouseEvent, card: HTMLElement) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
      const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
      card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`;
    };

    const handleMouseLeave = (card: HTMLElement) => {
      card.style.background = '';
    };

    cards.forEach(card => {
      const el = card as HTMLElement;
      const onMove = (e: MouseEvent) => handleMouseMove(e, el);
      const onLeave = () => handleMouseLeave(el);
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('s9');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="s7">
      <div className="s7-wrap" ref={containerRef}>
        <h2 className="s7-title">이미 <em>7개 업종</em>에서 AI 답변에 들어갑니다.</h2>
        <div className="s7-sub">인용에서 시작해 추천 단계까지 도달한 실제 사례 · (클릭 → 새 탭에서 사이트 열림)</div>
        <div className="ref-grid">
          {refs.map((ref, i) => (
            <a key={i} href={ref.href} target="_blank" rel="noopener noreferrer" className="ref-card" style={ref.ongoing ? { borderColor: 'rgba(30,144,255,0.25)', position: 'relative' } : {}}>
              {ref.ongoing && (
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(30,144,255,0.15)', border: '1px solid rgba(30,144,255,0.3)', borderRadius: '3px', fontFamily: 'var(--fm)', fontSize: '8px', color: 'var(--blu)', padding: '2px 7px', letterSpacing: '0.1em' }}>
                  진행중
                </div>
              )}
              <div className="ref-num">{ref.num}</div>
              <div className="ref-name">{ref.name}</div>
              <div className="ref-cat">{ref.cat}</div>
              <div className="ref-kpi" style={ref.ongoing ? { color: 'var(--blu)' } : {}}>{ref.kpi}</div>
              <div className="ref-domain" style={ref.ongoing ? { color: 'var(--blu)' } : {}}>
                {ref.domain} <span style={{ fontSize: '9px', color: 'var(--t2)', marginLeft: '4px' }}>새 탭 열림</span>
              </div>
            </a>
          ))}
          <div className="ref-card capture" onClick={scrollToForm} style={{ gridColumn: 'span 1' }}>
            <div style={{ fontSize: '28px' }}>📄</div>
            <div className="capture-title">상세 레퍼런스 받기</div>
            <div style={{ fontSize: '12px', color: 'var(--t2)' }}>7개 업종 케이스스터디 PDF</div>
            <div className="capture-btn">이메일로 받기 →</div>
          </div>
        </div>
      </div>
    </section>
  );
}