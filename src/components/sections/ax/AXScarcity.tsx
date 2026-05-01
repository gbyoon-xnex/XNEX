'use client';

import React, { useEffect, useRef } from 'react';

const FlipCard = ({ idIdx }: { idIdx: number }) => (
  <div className="fcard" id={`fd${idIdx}`}>
    <div className="ffr" id={`ff${idIdx}`}>-</div>
    <div className="fbk" id={`fb${idIdx}`}>-</div>
  </div>
);

const AXScarcity = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scTrRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<string[]>(new Array(8).fill(''));

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

    // FLIP COUNTDOWN
    const dg = (n: number) => String(n).padStart(2, '0').split('');

    const flip = (i: number, ch: string) => {
      if (prevRef.current[i] === ch) return;
      prevRef.current[i] = ch;

      const f = document.getElementById('ff' + i);
      const b = document.getElementById('fb' + i);
      const c = document.getElementById('fd' + i);

      if (!f || !b || !c) return;

      b.textContent = ch;
      c.classList.remove('fa');
      void c.offsetWidth; // trigger reflow
      c.classList.add('fa');

      setTimeout(() => {
        f.textContent = ch;
        c.classList.remove('fa');
      }, 220);
    };

    const update = () => {
      const now = new Date();
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const diff = Math.max(0, end.getTime() - now.getTime());

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      const [d0, d1] = dg(d);
      const [h0, h1] = dg(h);
      const [m0, m1] = dg(m);
      const [s0, s1] = dg(s);

      flip(0, d0); flip(1, d1);
      flip(2, h0); flip(3, h1);
      flip(4, m0); flip(5, m1);
      flip(6, s0); flip(7, s1);
    };

    update();
    const interval = setInterval(update, 1000);

    const trTimer = setTimeout(() => {
      if (scTrRef.current) {
        scTrRef.current.style.transform = 'translateY(-56px)';
      }
    }, 1000);

    return () => {
      revealObserver.disconnect();
      clearInterval(interval);
      clearTimeout(trTimer);
    };
  }, []);

  const sf = () => {
    document.getElementById('s10')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="s9" ref={sectionRef}>
      <div className="sc-inner rv">
        <div className="sc-tag">월 최대 2개 기업</div>
        <h2 className="sc-h">'할 수 있는' 기업만<br />함께합니다.</h2>
        <p className="sc-sub">에프터&비포가 크게 차이날 수 있는 브랜드&컴퍼니하고만 일을 합니다.<br /><strong>이번 달 잔여 1자리.</strong></p>
        
        <div className="sc-slot-wrap">
          <div className="sc-slot-l">이번 달 잔여</div>
          <div className="sc-slot">
            <div className="sc-slot-tr" id="scTr" ref={scTrRef}>
              <div className="sc-slot-n">2</div>
              <div className="sc-slot-n">1</div>
            </div>
          </div>
          <div className="sc-slot-u">/ 2 자리</div>
        </div>

        <div className="sc-flip-tag">{`// 이달 마감까지 남은 시간`}</div>
        <div className="sc-flip-row">
          <div className="sc-flip-grp">
            <div className="sc-flip-digits">
              <FlipCard idIdx={0} />
              <FlipCard idIdx={1} />
            </div>
            <div className="sc-flip-lbl">DAY</div>
          </div>
          <div className="fsep">:</div>
          <div className="sc-flip-grp">
            <div className="sc-flip-digits">
              <FlipCard idIdx={2} />
              <FlipCard idIdx={3} />
            </div>
            <div className="sc-flip-lbl">HOUR</div>
          </div>
          <div className="fsep">:</div>
          <div className="sc-flip-grp">
            <div className="sc-flip-digits">
              <FlipCard idIdx={4} />
              <FlipCard idIdx={5} />
            </div>
            <div className="sc-flip-lbl">MIN</div>
          </div>
          <div className="fsep">:</div>
          <div className="sc-flip-grp">
            <div className="sc-flip-digits">
              <FlipCard idIdx={6} />
              <FlipCard idIdx={7} />
            </div>
            <div className="sc-flip-lbl">SEC</div>
          </div>
        </div>
        
        <button className="sc-cta" onClick={sf}>잔여 자리 확인 & 무료 상담 신청 →</button>
      </div>
    </section>
  );
};

export default AXScarcity;