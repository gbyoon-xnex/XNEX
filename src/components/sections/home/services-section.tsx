'use client';

import { TrendingUp, Cpu, LayoutGrid, Building2, Zap } from 'lucide-react';

const services = [
  {
    title: 'X-그로스',
    subTitle: 'IT+데이터+콘텐츠 기반 마케팅 에이전시',
    desc: '광고비 ₩200억 직접 집행해본 사업가 관점의 ROI 기반 캠페인 설계. 실행까지 직접 합니다.',
    tags: ['#브랜드전략', '#마케팅계획', '#오너십실행'],
    icon: <TrendingUp className="w-7 h-7 text-blue-500" />,
  },
  {
    title: 'X-빌드',
    subTitle: 'AX 컨설팅&SW개발 에이전시',
    desc: 'AI 도입 무료 진단 → 정밀 진단 → AI 툴 개발 → 임직원 교육. 산업 이해 먼저, 기술 다음.',
    tags: ['#AX진단', '#AI툴개발', '#임직원교육'],
    icon: <Cpu className="w-7 h-7 text-amber-500" />,
  },
  {
    title: 'X-허브',
    subTitle: '자체 AI SaaS 플랫폼',
    desc: '직접 굴려본 도구만 서비스로 런칭. PAGE-X · RUNWAY-X · CAST-X 등 6종+ 출시 예정.',
    tags: ['#SaaS', '#랜딩자동화', '#AI모델컷'],
    icon: <LayoutGrid className="w-7 h-7 text-emerald-500" />,
  },
  {
    title: 'X-넥스트 · 퀀텀점프',
    subTitle: '공유오피스 · 창업아카데미',
    desc: '시청역 정동 350평 공유오피스 (7월 런칭) + SaaS·K뷰티 실전 창업 아카데미. 수료 후 XNEX 생태계 파트너로 편입.',
    tags: ['#공유오피스', '#창업아카데미', '#K뷰티'],
    icons: [
      <Building2 key="b" className="w-7 h-7 text-purple-500" />,
      <Zap key="z" className="w-7 h-7 text-yellow-500" />,
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full min-h-screen flex flex-col justify-center bg-white dark:bg-black" style={{ fontFamily: 'var(--font-sora)' }}>
      <div className="max-w-[1600px] mx-auto w-full flex flex-col h-screen pt-28 pb-16">
        <div className="mb-5">
          <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">
            왜 XNEX 이어야만 하는가?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-dashed border-white/40 overflow-hidden relative flex-1">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative p-7 transition-all duration-300 border-r border-b border-dashed border-white/40 bg-white dark:bg-black flex flex-col justify-between"
            >
              <span className="absolute -left-px -top-px block size-4 border-l-2 border-t-2" style={{ borderColor: 'var(--primary)' }} />
              <span className="absolute -right-px -top-px block size-4 border-r-2 border-t-2" style={{ borderColor: 'var(--primary)' }} />
              <span className="absolute -bottom-px -left-px block size-4 border-b-2 border-l-2" style={{ borderColor: 'var(--primary)' }} />
              <span className="absolute -bottom-px -right-px block size-4 border-b-2 border-r-2" style={{ borderColor: 'var(--primary)' }} />
              <div className="flex flex-col space-y-5">
                <div className="flex gap-2">
                  {s.icons ? (
                    s.icons.map((icon, idx) => (
                      <div key={idx} className="w-14 h-14 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/10">
                        {icon}
                      </div>
                    ))
                  ) : (
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/10">
                      {s.icon}
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <h3 className="font-black text-gray-900 dark:text-gray-100 tracking-tight text-4xl">
                    {s.title}
                    <span className="ml-2 text-base text-gray-500 dark:text-gray-400 font-normal">
                      {s.subTitle}
                    </span>
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-snug">
                    {s.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-base text-gray-500 dark:text-gray-400 mt-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}