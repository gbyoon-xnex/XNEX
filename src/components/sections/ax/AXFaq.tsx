'use client';

import React, { useEffect, useRef, useState } from 'react';

const AXFaq = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqData = [
    { q: '무료 미팅에서 정확히 뭘 하나요?', a: '현황 파악과 니즈 인터뷰를 진행합니다. 영업이 아닌 진단 미팅입니다. 담당 PM이 직접 업무 프로세스를 분석하고 AI 적용 포인트를 찾아드립니다.' },
    { q: '교육 인원은 몇 명까지 가능한가요?', a: '10명 미만 소규모부터 50명 규모까지 맞춤 운영합니다. 인원에 따라 집체 교육, 부서별 워크숍, 1:1 코칭을 제안드립니다.' },
    { q: '교육 후 실제로 남는 산출물은?', a: '프롬프트 라이브러리, 직무별 SOP, 커스텀 AI봇, AI 도입 로드맵 보고서가 납품됩니다. 교육이 끝나도 계속 쓸 수 있는 실제 도구들입니다.' },
    { q: '자동화 도구 개발도 가능한가요?', a: '교육 과정에서 도출된 니즈 기반으로 맞춤 자동화 도구 설계·개발까지 원스톱으로 진행합니다. 교육 → 개발 → SaaS 확장 사례도 있습니다.' },
    { q: '다른 AI 교육과 뭐가 다른가요?', a: '강사 1인이 아닌 5개 전문 법인의 현업 전문가가 동시 투입됩니다. 수료증이 아닌 실제 업무 방식의 전환이 목표입니다.' },
    { q: '월 2개 기업 한정인 이유는?', a: '5개 법인의 현업 전문가가 직접 투입되는 구조상, 동시에 많은 기업을 운영하면 품질을 보장할 수 없습니다. 에프터&비포가 크게 차이나는 기업하고만 일합니다.' },
  ];

  return (
    <section id="s11" ref={sectionRef}>
      <div className="faq-header rv">
        <h2>자주 묻는 <em>질문</em></h2>
        <p>{`// 클릭하면 답변을 확인할 수 있습니다`}</p>
      </div>
      <div className="faq-list">
        {faqData.map((faq, idx) => (
          <div key={idx} className={`fq rv ${openIdx === idx ? 'open' : ''}`}>
            <div className="fq-inner">
              <span className="fq-num">{String(idx + 1).padStart(2, '0')}</span>
              <div className="fq-q" onClick={() => toggleFaq(idx)}>
                {faq.q}
                <div className="fq-arr">+</div>
              </div>
              <div className="fq-a">
                <div className="fq-a-inner">{faq.a}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AXFaq;