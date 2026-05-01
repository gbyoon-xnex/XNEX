'use client';

import { useState } from 'react';

const faqs = [
  { q: "Q1. '인용'과 '추천'의 차이는?", a: "인용은 AI가 우리 정보를 참고 출처로만 활용—회사명·URL 미노출, 그러나 AI 신뢰 데이터로 누적됩니다. 추천은 AI가 직접 '이 회사가 가장 좋습니다'라고 답—회사명·URL 직접 노출됩니다. 추천은 인용이 누적된 결과입니다. 인용을 못 받으면 추천도 시작 못 합니다." },
  { q: "Q2. AI는 정말 1등만 추천하나요?", a: "아닙니다. AI는 한 번에 3~5개 회사를 답변에 포함시킵니다. Trustmary, Metricus 등 분석에 따르면 ChatGPT는 평균 3~5개, Perplexity는 2~4개 브랜드를 포함합니다. 다만 그 안에 들지 못하면 고객 눈에는 우리 브랜드가 '존재하지 않는 것'과 같습니다." },
  { q: "Q3. 한국 홈페이지가 정말 95%나 AI에게 인용 못 되나요?", a: "정확한 95% 통계는 자체 추정이지만, 4가지 구조적 이유가 있습니다. ① JavaScript 동적 렌더링 (AI 크롤러는 JS 처리 못함) ② 텍스트 정보를 이미지로만 표현 ③ Schema 마크업 부재 ④ FAQ/Q&A 구조화 부재. 이 4가지를 해결하지 않으면 AI는 사이트를 정확히 읽을 수 없습니다." },
  { q: "Q4. AEO가 정확히 무엇인가요?", a: "'AI 답변에 들어가게 만드는 작업'입니다. 핵심은 '수식어 매핑'입니다. 예: '강남에서 잘하는 울세라 리프팅 병원 추천해줘' → 강남(지역) + 잘하는(품질) + 울세라 리프팅(시술) + 추천(의도) 4개 수식어. 엑스넥스는 이 수식어 조합에 맞는 FAQ 50개를 사이트에 미리 깔아둡니다. AI가 해당 질문에 답할 때 우리 FAQ를 인용하면서 우리 회사를 답변에 포함시킵니다." },
  { q: "Q5. ChatGPT 외 다른 AI에도 추천되나요?", a: "ChatGPT·Gemini·Perplexity·Claude 4개 생성형 AI는 모두 다른 알고리즘을 사용합니다. 엑스넥스는 각 생성형 AI의 알고리즘에 맞춘 구조로 동시 최적화합니다." },
  { q: "Q6. 제작은 얼마나 걸리나요?", a: "신규 제작 + AEO는 평균 2~3주 소요됩니다. 디자인 협의 1~2주, 개발 1주 기준입니다. 기존 홈페이지 AEO 최적화는 1~2주 소요됩니다." },
  { q: "Q7. 가격이 정말 매월 오르나요?", a: "네. 5월 300만원 → 6월 350만원 → 7월 400만원 순으로 매월 50만원씩 인상되며, 정가 700만원 도달 시 한정 가격 종료합니다. 한정 가격 적용은 '5월 31일 23:59까지 신청 완료 + 계약금 입금 기준'입니다." },
  { q: "Q8. 이후 유지보수 비용이 있나요?", a: "PLAN 02의 경우 3개월 무료 유지보수가 포함됩니다. 4개월차부터는 월 10만원이며, 페이지 추가 시 1페이지당 50만원이 추가됩니다. PLAN 01 유지보수는 별도 협의입니다." }
];

export default function AeoFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section id="sfaq" style={{ minHeight: 'auto' }}>
      <div className="faq-wrap">
        <div className="faq-title">자주 묻는 질문</div>
        {faqs.map((f, i) => (
          <div key={i} className={`fq ${openIdx === i ? 'open' : ''}`}>
            <div className="fq-q" onClick={() => toggle(i)}>{f.q}</div>
            <div className="fq-a">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}