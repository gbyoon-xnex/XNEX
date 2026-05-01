'use client';

import React, { useEffect, useRef } from 'react';

const AXTransformBand = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          
          const counters = entry.target.querySelectorAll('[data-count]');
          counters.forEach(el => {
            const element = el as HTMLElement;
            const target = parseInt(element.dataset.count || '0');
            const suffix = element.dataset.suffix || '';
            if (isNaN(target)) return;

            let n = 0;
            const duration = 1200;
            const frameRate = 16;
            const totalFrames = duration / frameRate;
            const increment = Math.ceil(target / totalFrames);

            const timer = setInterval(() => {
              n += increment;
              if (n >= target) {
                n = target;
                clearInterval(timer);
              }
              element.textContent = n + suffix;
            }, frameRate);
          });
          
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

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
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <section id="s2" ref={sectionRef}>
      <div className="transform-band rv">
        <div className="tb">
          <div className="tb-num">
            <em data-count="68" data-suffix="%">0%</em>
          </div>
          <div className="tb-lbl">
            AI 도입 필요하지만<br />시작 못 하는 기업
          </div>
        </div>
        <div className="tb">
          <div className="tb-num">
            <em data-count="37" data-suffix="%">0%</em>
          </div>
          <div className="tb-lbl">
            교육 후 실무 적용<br />실패한 직원 비율
          </div>
        </div>
        <div className="tb">
          <div className="tb-num">
            2.1<em>배</em>
          </div>
          <div className="tb-lbl">
            AI 활용 기업<br />생산성 격차
          </div>
        </div>
        <div className="tb">
          <div className="tb-num">
            <em data-count="82" data-suffix="%">0%</em>
          </div>
          <div className="tb-lbl">
            업무 반영<br />어렵다는 실무자
          </div>
        </div>
      </div>
    </section>
  );
};

export default AXTransformBand;