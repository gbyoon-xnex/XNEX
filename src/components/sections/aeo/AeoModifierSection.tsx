'use client';

import { useState } from 'react';

const chips = [
  { label: '[지역] 강남', q: '강남에서 잘하는 울세라 리프팅 병원 추천해줘', faqs: [0, 1, 2, 3], color: 'c1' },
  { label: '[품질] 잘하는', q: '강남에서 잘하는 울세라 리프팅 병원 추천해줘', faqs: [1, 3, 4, 5], color: 'c2' },
  { label: '[시술] 울세라 리프팅', q: '강남에서 잘하는 울세라 리프팅 병원 추천해줘', faqs: [0, 2, 4, 6], color: 'c3' },
  { label: '[의도] 추천', q: '강남에서 잘하는 울세라 리프팅 병원 추천해줘', faqs: [1, 3, 5, 6], color: 'c4' }
];

const allFaqs = [
  "강남에서 울세라 잘하는 병원은?",
  "울세라 가격은 얼마부터인가요?",
  "강남 역삼동 리프팅 전문 병원은?",
  "울세라 받기 좋은 시기는?",
  "울세라 리프팅 후기 좋은 곳은?",
  "리프팅 시술 비교 — 울세라 vs 써마지?",
  "울세라 효과 얼마나 지속되나요?"
];

export default function AeoModifierSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="s4">
      <div className="s4-wrap">
        <h2 className="s4-title">AI는 '브랜드명'이 아닌 <em>'맥락'</em>에 답합니다.</h2>
        <div className="modifier-demo">
          <div className="mod-q-box">
            <div className="mod-q-text" id="modQuery">"{chips[activeIdx].q}"</div>
            <div className="mod-chips">
              {chips.map((c, i) => (
                <span
                  key={i}
                  className={`chip ${c.color} ${activeIdx === i ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                >
                  {c.label}
                </span>
              ))}
            </div>
            <div className="chip-hint"><span className="chip-hint-dot"></span>수식어를 클릭해보세요 →</div>
          </div>
          <div className="mod-arrow-anim">→</div>
          <div className="mod-faq-box">
            <div className="faq-items" id="faqItems">
              {allFaqs.map((faq, i) => (
                <div key={i} className={`faq-it ${chips[activeIdx].faqs.includes(i) ? 'on' : ''}`}>
                  {faq}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: '24px', width: '100%', background: 'var(--yel-a)', border: '1px solid rgba(255,184,0,0.3)', borderRadius: '8px', padding: '16px 24px', fontSize: '13px', color: 'var(--t1)', lineHeight: 1.8, textAlign: 'center' }}>
          → AI가 위 FAQ를 인용해서 답변을 만들 때 → <strong style={{ color: '#fff' }}>우리 브랜드 정보가 답변 안에 자연스럽게 들어가게 됩니다.</strong><br />
          이 '수식어 매핑 작업'이 <strong style={{ color: 'var(--yel)' }}>AEO의 본질</strong>입니다.
        </div>
        <div style={{ marginTop: '10px', width: '100%', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '16px 24px', fontSize: '13px', color: 'var(--t1)', lineHeight: 1.8, textAlign: 'center' }}>
          <strong style={{ color: '#fff', fontFamily: 'var(--fh)', fontSize: '14px' }}>엑스넥스가 하는 일</strong><br />
          수식어 조합을 분석하고, 그 조합마다 AI가 인용할 FAQ를 사이트에 미리 깔아둡니다.<br />
          이 FAQ들이 AI에게 <strong style={{ color: 'var(--grn)' }}>'우리 브랜드가 답이다'</strong>라고 알려주는 신호입니다.
        </div>
      </div>
    </section>
  );
}