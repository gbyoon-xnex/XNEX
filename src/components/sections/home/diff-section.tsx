'use client';

const items = [
  {
    num: '01',
    title: 'AI Native',
    tag: '도구가 아닌 정체성',
    desc: "회사의 모든 워크플로가 처음부터 AI 위에서 설계됨. 'AI를 도입한 회사'가 아니라 <span class='text-white'>'AI 위에서 태어난 회사'.</span>",
    glow: 'rgba(59,130,246,0.08)',
    accent: 'blue',
  },
  {
    num: '02',
    title: 'Proof by Self-use',
    tag: '직접 개발하고 사용하며 검증이 끝난 AI SaaS',
    desc: 'EVA-X · OPIS-X · CRM-X · DOCU-X · REPORT-X · AEO-X — <span class="text-white">우리가 매일 쓰는 도구가 곧 외부 영업의 레퍼런스.</span>',
    glow: 'rgba(16,185,129,0.08)',
    accent: 'emerald',
  },
  {
    num: '03',
    title: 'Convergence',
    tag: '다양한 산업의 특이점을 융·복합',
    desc: '마케터가 엔지니어를, 엔지니어가 리테일을 이해. <span class="text-white">산업의 경계를 무너뜨린 크리에이티브한 기획력.</span>',
    glow: 'rgba(168,85,247,0.08)',
    accent: 'purple',
  },
  {
    num: '04',
    title: 'Execution Ability',
    tag: '능동적인 실행력',
    desc: '클라이언트의 목적·목표 달성을 위해 <span class="text-white">전문가 포지션에서 먼저 제안하고 세밀하게 속도 있게 실행.</span>',
    glow: 'rgba(234,179,8,0.08)',
    accent: 'yellow',
  },
];

export default function DiffSection() {
  return (
    <section className="relative w-full bg-black border-y border-dashed border-white/20 py-24 font-sora">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 leading-tight">
          XNEX는 무엇이 다른가?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-dashed border-white/30">
          {items.map((item, i) => (
            <div
              key={item.num}
              className="diff-card group relative p-10 border-r border-b last:border-b-0 border-dashed border-white/20 cursor-pointer overflow-hidden odd:border-r"
            >
              <span className="absolute -left-px -top-px block size-4 border-l-2 border-t-2 transition-colors duration-300 border-white/30 group-hover:border-white/60" />
              <span className="absolute -right-px -top-px block size-4 border-r-2 border-t-2 transition-colors duration-300 border-white/30 group-hover:border-white/60" />
              <span className="absolute -bottom-px -left-px block size-4 border-b-2 border-l-2 transition-colors duration-300 border-white/30 group-hover:border-white/60" />
              <span className="absolute -bottom-px -right-px block size-4 border-b-2 border-r-2 transition-colors duration-300 border-white/30 group-hover:border-white/60" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at center, ${item.glow} 0%, transparent 70%)`,
                }}
              />
              <p className={`text-7xl font-black text-white/10 mb-4 group-hover:text-${item.accent}-500/20 transition-colors duration-300`}>
                {item.num}
              </p>
              <h3 className="text-4xl font-black text-white mb-2">{item.title}</h3>
              <p className={`text-sm text-${item.accent}-400 font-bold tracking-widest uppercase mb-4`}>
                {item.tag}
              </p>
              <p
                className="text-base text-gray-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}