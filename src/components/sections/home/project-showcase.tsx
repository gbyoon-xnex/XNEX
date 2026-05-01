'use client';

import { useEffect, useRef } from 'react';

const showcaseItems = [
  {
    id: 'CORE 1',
    title: 'X-그로스',
    sub: 'IT+데이터+콘텐츠 기반 마케팅 에이전시',
    desc: '현황분석 → 한정 예산 내 최대 효과 설계 → 캠페인 기획 → 디테일한 실행. 주니어 마케터가 아닌 광고비 연 최대 200억을 집행해본 연쇄창업가가 직접 전략을 수립하고 기획합니다.',
    color: 'blue',
    bg: 'linear-gradient(135deg, #0a0a1a 0%, #0d1a3a 100%)',
    glow: '#3b82f6',
  },
  {
    id: 'CORE 2',
    title: 'X-빌드',
    sub: 'AX 컨설팅 · SW 개발 에이전시',
    desc: '무료 AX 진단부터 정밀 진단, 맞춤형 AI 툴 개발과 임직원 교육까지. 산업 이해가 먼저고 기술은 다음입니다.',
    color: 'amber',
    bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a1000 100%)',
    glow: '#f59e0b',
    steps: [
      { num: '01', title: '무료 AX 진단', desc: '설문 → 5p 리포트' },
      { num: '02', title: '유료 정밀 진단', desc: '90분 → 30p 리포트' },
      { num: '03', title: 'AI 툴 개발', desc: '맞춤형 개발' },
      { num: '04', title: '임직원 교육', desc: '운영 매뉴얼' },
    ],
  },
  {
    id: 'CORE 3 · 자체 운영 SaaS',
    title: 'X-허브',
    sub: '만들고, 써보고, 검증한 AI SaaS — 그것만 모았습니다.',
    desc: '직접 운영하며 효과를 검증한 AI 솔루션들을 서비스로 제공합니다.',
    color: 'emerald',
    bg: 'linear-gradient(135deg, #001a10 0%, #000d0a 100%)',
    glow: '#10b981',
    saas: [
      { name: 'PAGE-X', label: '랜딩페이지 자동화' },
      { name: 'RUNWAY-X', label: 'AI 모델컷·런웨이' },
      { name: 'CAST-X', label: '인스타그램 자동화' },
    ],
  },
  {
    id: 'CORE 4 · 공유 오피스',
    title: 'X-넥스트',
    sub: '스타트업&예비창업가의 공유 오피스',
    desc: '시청역 정동 삼정 아트테라스 B2 350평. 2026년 7월 런칭 예정. XNEX 생태계와 함께 성장하는 공간입니다.',
    color: 'purple',
    bg: 'linear-gradient(135deg, #0d0010 0%, #1a0030 100%)',
    glow: '#a855f7',
  },
  {
    id: 'CORE 5 · 창업 아카데미',
    title: '퀀텀점프',
    sub: '실전형 AI 창업 아카데미',
    desc: 'SaaS 개발과 K뷰티 브랜드 빌딩을 4주 만에 마스터. 수료 후 XNEX 생태계 파트너로 협업합니다.',
    color: 'yellow',
    bg: 'linear-gradient(135deg, #0a0800 0%, #1a1400 100%)',
    glow: '#eab308',
  },
];

export default function ProjectShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.classList.add('scale-[0.99]');
      el.style.cursor = 'grabbing';
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.style.scrollBehavior = 'auto';
      el.style.scrollSnapType = 'none';
    };

    const release = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove('scale-[0.99]');
      el.style.cursor = 'grab';
      el.style.scrollBehavior = 'smooth';
      el.style.scrollSnapType = 'x mandatory';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseleave', release);
    window.addEventListener('mouseup', release);
    el.addEventListener('mousemove', onMouseMove);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseleave', release);
      window.removeEventListener('mouseup', release);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="py-24 w-full bg-black border-t border-dashed border-white/20 overflow-hidden font-sora">
      <div className="max-w-[1600px] mx-auto mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight text-center">
          XNEX 사업영역
        </h2>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-12 px-[max(3rem,calc((100vw-80rem)/2))] overflow-x-auto overflow-y-visible cursor-grab select-none no-scrollbar snap-x snap-mandatory scroll-smooth py-12"
      >
        {showcaseItems.map((item) => (
          <div
            key={item.title}
            className="relative flex-shrink-0 w-[85vw] md:w-[70rem] h-[45vh] md:h-[50vh] snap-center overflow-visible group"
          >
            <div
              className="absolute inset-0 rounded-[1.5rem] overflow-hidden border border-white/10"
              style={{ background: item.bg }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, ${item.glow} 0%, transparent 60%)`,
                }}
              />
            </div>
            <div className="relative h-full flex flex-col justify-center gap-8 p-12 z-10">
              <div>
                <p className={`text-sm font-bold tracking-widest uppercase mb-3 text-${item.color}-400`}>
                  {item.id}
                </p>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tighter leading-tight">
                  {item.title}
                </h2>
                <p className="text-xl text-white/60 font-medium">{item.sub}</p>
              </div>

              {item.steps && (
                <div className="grid grid-cols-4 gap-3">
                  {item.steps.map((step) => (
                    <div
                      key={step.num}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm"
                    >
                      <p className={`text-sm font-bold text-${item.color}-400 mb-2`}>
                        {step.num}
                      </p>
                      <p className="text-base font-bold text-white">{step.title}</p>
                      <p className="text-base text-gray-500 mt-1">{step.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {item.saas && (
                <div className="grid grid-cols-3 gap-3">
                  {item.saas.map((s) => (
                    <div
                      key={s.name}
                      className="bg-white/5 border border-emerald-500/20 rounded-xl p-4 backdrop-blur-sm hover:border-emerald-400/50 transition-colors"
                    >
                      <p className="text-base font-black text-emerald-400 mb-1">
                        {s.name}
                      </p>
                      <p className="text-base text-gray-400">{s.label}</p>
                    </div>
                  ))}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm flex items-center justify-center col-span-1">
                    <p className="text-sm text-gray-600">+ 추가 라인업 출시 예정</p>
                  </div>
                </div>
              )}

              {!item.steps && !item.saas && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="flex-shrink-0 w-[15vw]" />
      </div>
    </section>
  );
}