'use client';

const members = [
  {
    name: 'RED',
    role: '경영 총괄 · 부대표',
    tag: 'X-그로스 · 퀀텀점프 총괄',
    desc: '연쇄 창업가 · 현) VC 부대표 · 광고비 ₩200억+ 직접 집행. 사업가 관점의 ROI 기반 캠페인 설계.',
    badges: ['#연쇄창업', '#VC'],
    color: 'from-[#ef4444] to-[#991b1b]',
    accent: 'red',
  },
  {
    name: 'GREEN',
    role: 'CTO · 이사',
    tag: 'X-빌드 · X-허브 총괄',
    desc: '前 코스닥 상장사 대표 · SaaS 아키텍처 책임. IT 기술을 캠페인에 직접 접목.',
    badges: ['#CTO', '#SaaS'],
    color: 'from-[#22c55e] to-[#15803d]',
    accent: 'green',
  },
  {
    name: 'YELLOW',
    role: 'AEO 팀장',
    tag: '사이트-X PM',
    desc: 'AEO 홈페이지 제작·운영 책임. AI 최적화 구조 설계 전문.',
    badges: ['#AEO', '#PM'],
    color: 'from-[#eab308] to-[#a16207]',
    accent: 'yellow',
  },
  {
    name: 'BLUE',
    role: 'AX 팀장',
    tag: 'X-빌드 PM · SaaS 개발',
    desc: 'AX 컨설팅 실행 책임. 산업·업무 진단부터 AI 툴 개발·운영까지 풀사이클 담당.',
    badges: ['#AX', '#개발'],
    color: 'from-[#3b82f6] to-[#1d4ed8]',
    accent: 'blue',
  },
  {
    name: 'PINK',
    role: 'PD / Front',
    tag: '디자인 · 프론트엔드',
    desc: '디자인부터 프론트까지. 비주얼라이징, 브랜딩에 능한 디자이너. 사이트-X 비주얼 총괄.',
    badges: ['#디자인', '#브랜딩'],
    color: 'from-[#f472b6] to-[#be185d]',
    accent: 'pink',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative max-w-[1600px] mx-auto my-32 w-full" style={{ fontFamily: 'var(--font-sora)' }}>
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          왜 엑스넥스가 잘할 수밖에 없는가.
        </h2>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          전원 풀스택 운영자 출신. 기획·디자인·개발·영업이 한 자리에서 결정됩니다.
        </p>
      </div>

      <div className="relative border border-dashed border-white/40 bg-black overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-0">
        <span className="absolute -left-px -top-px block size-4 border-l-2 border-t-2 z-20" style={{ borderColor: 'var(--primary)' }} />
        <span className="absolute -right-px -top-px block size-4 border-r-2 border-t-2 z-20" style={{ borderColor: 'var(--primary)' }} />
        <span className="absolute -bottom-px -left-px block size-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'var(--primary)' }} />
        <span className="absolute -bottom-px -right-px block size-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'var(--primary)' }} />

        {members.map((m) => (
          <div
            key={m.name}
            className="p-8 border-b md:border-r border-dashed border-white/20 hover:bg-white/[0.03] transition-colors group"
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-black text-white bg-gradient-to-br ${m.color}`}
              >
                {m.name[0]}
              </div>
              <div>
                <p className="text-white font-black text-lg leading-tight">
                  {m.name}
                </p>
                <p className="text-gray-400 text-base mt-0.5">{m.role}</p>
              </div>
            </div>
            <p className={`text-sm font-bold tracking-widest uppercase mb-2 text-${m.accent}-400`}>
              {m.tag}
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              {m.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {m.badges.map((b) => (
                <span
                  key={b}
                  className="text-base px-3.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* YOU - Open Seat */}
        <div className="p-8 border-dashed border-white/20 group flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-black text-white/70 border-2 border-dashed border-white/30 group-hover:border-white/80 group-hover:text-white transition-all font-sora">
                X
              </div>
              <div>
                <p className="text-white font-black text-lg leading-tight">YOU</p>
                <p className="text-gray-400 text-base mt-0.5">당신의 X</p>
              </div>
            </div>
            <p className="text-sm font-bold tracking-widest text-white/60 uppercase mb-2">
              당신도 함께할 수 있습니다
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              풀어보고 싶은{' '}
              <span className="text-white font-bold font-sora">X</span>가 있다면,
              엑스넥스의 다음 X를 함께 만들어 갑시다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}