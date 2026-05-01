'use client';

import React, { useEffect, useRef } from 'react';

const AXBeforeAfter = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rows = section.querySelectorAll('.ba-item');
    let played = false;
    let timers: NodeJS.Timeout[] = [];

    const play = () => {
      if (played) return;
      played = true;
      rows.forEach((r, i) => {
        timers.push(
          setTimeout(() => r.classList.add('seq-b'), i * 350)
        );
        timers.push(
          setTimeout(() => {
            r.classList.remove('seq-b');
            r.classList.add('seq-a');
          }, i * 350 + 500)
        );
      });
    };

    const reset = () => {
      timers.forEach(clearTimeout);
      timers = [];
      played = false;
      rows.forEach(r => r.classList.remove('seq-b', 'seq-a'));
    };

    // SEQUENCE OBSERVER
    const seqObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            play();
          } else {
            if (entry.boundingClientRect.top > 0) {
              reset();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    seqObserver.observe(section);

    // REVEAL OBSERVER
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
      seqObserver.disconnect();
      timers.forEach(clearTimeout);
      revealObserver.disconnect();
    };
  }, []);

  const data = [
    { b: '범용 커리큘럼 — 우리 업무와 무관', a: '업무 진단 후 맞춤 설계' },
    { b: '이론 80%, 실습은 따라하기', a: '실습 70% + 이론 30%' },
    { b: '강사 1인이 다 진행', a: '5개 전문 법인 현업 전문가 군단 투입' },
    { b: '수료증 발급하면 끝', a: '프롬프트 라이브러리 + SOP + 자동화 도구 납품' },
    { b: '교육 후 변화 없음', a: '교육 후 1개월 사후 지원' },
  ];

  return (
    <section id="s4" ref={sectionRef}>
      <div className="ba-header rv">
        <div>
          <h2>타사 AX<br /><em>vs XNEX AX</em></h2>
        </div>
        <p>{`// hover 또는 스크롤로 확인`}</p>
      </div>
      <div className="ba-track rv">
        {data.map((item, idx) => (
          <div key={idx} className="ba-item">
            <div className="ba-cell b">{item.b}</div>
            <div className="ba-cell arr">→</div>
            <div className="ba-cell a">
              {idx === 0 && <strong>업무 진단 후 맞춤 설계</strong>}
              {idx === 1 && <>실습 <strong>70%</strong> + 이론 30%</>}
              {idx === 2 && <><strong>5개 전문 법인</strong> 현업 전문가 군단 투입</>}
              {idx === 3 && <>프롬프트 라이브러리 + SOP + <strong>자동화 도구 납품</strong></>}
              {idx === 4 && <>교육 후 <strong>1개월 사후 지원</strong></>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AXBeforeAfter;