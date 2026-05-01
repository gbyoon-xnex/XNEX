'use client';

export default function WhySection() {
  return (
    <section id="why" className="relative w-full bg-black font-sora">
      {/* Part 1: WHY WE EXIST */}
      <div className="border-t border-dashed border-white/20 py-24 max-w-[1600px] mx-auto">
        <p className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">
          WHY WE EXIST
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          AI 시대, 그런데
          <br />
          에이전시는 아직도 그대로.
        </h2>
        <p className="text-gray-500 text-lg mb-14 max-w-lg">
          시대에 맞춰 성장하지 못하고, 아직도 늘 하던 대로 관성적으로만 업무를
          수행합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-dashed border-white/30">
          {[
            {
              title: '마케팅 에이전시',
              items: [
                '실행을 하는 회사는 많음.',
                '진짜 전략을 수립하고 크리에이티브한 기획을 하는 회사는 없음.',
              ],
            },
            {
              title: 'SW 개발 에이전시',
              items: [
                '비싸고, PMF 검증은 의뢰인 몫.',
                '납품 후 책임 종료.',
              ],
            },
            {
              title: 'AX 에이전시',
              items: [
                'IT 개발자로만 이뤄져 있음.',
                '클라이언트의 사업을 제대로 이해하지 못함.',
                '실무 경험이 없음.',
              ],
            },
          ].map((box, i) => (
            <div
              key={i}
              className="relative p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-dashed border-white/20"
            >
              <span className="absolute -left-px -top-px block size-4 border-l-2 border-t-2 border-red-500" />
              <span className="absolute -right-px -top-px block size-4 border-r-2 border-t-2 border-red-500" />
              <span className="absolute -bottom-px -left-px block size-4 border-b-2 border-l-2 border-red-500" />
              <span className="absolute -bottom-px -right-px block size-4 border-b-2 border-r-2 border-red-500" />
              <p className="text-lg font-bold text-red-500 tracking-tight mb-4">
                {box.title}
              </p>
              <ul className="text-white/80 text-base leading-relaxed space-y-2">
                {box.items.map((item, j) => (
                  <li key={j} className="relative pl-4">
                    <span className="absolute left-0 text-red-500">•</span>
                    <span
                      className={
                        item.includes('없음') ||
                        item.includes('못함') ||
                        item.includes('의뢰인 몫')
                          ? 'text-white font-semibold'
                          : ''
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-10 px-6 py-10 sm:py-12 border border-blue-400/50 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18)_0%,rgba(59,130,246,0.04)_60%,transparent_100%)] shadow-[0_0_60px_-10px_rgba(59,130,246,0.45),inset_0_0_30px_-15px_rgba(59,130,246,0.3)]"
        >
          <span className="absolute -left-px -top-px block size-5 border-l-[3px] border-t-[3px] border-blue-300" />
          <span className="absolute -right-px -top-px block size-5 border-r-[3px] border-t-[3px] border-blue-300" />
          <span className="absolute -bottom-px -left-px block size-5 border-b-[3px] border-l-[3px] border-blue-300" />
          <span className="absolute -bottom-px -right-px block size-5 border-b-[3px] border-r-[3px] border-blue-300" />

          <p className="text-center text-[11px] sm:text-xs font-bold tracking-[0.3em] text-blue-300/80 uppercase mb-3">
            ✦ The Only Solution ✦
          </p>

          <p className="text-center text-base sm:text-lg font-semibold text-white/85 tracking-tight">
            이 문제를 해결할 수 있는 유일한 곳
          </p>

          <p
            className="text-center mt-4 text-4xl sm:text-5xl font-black tracking-tighter select-none bg-[linear-gradient(180deg,#ffffff_0%,#93c5fd_60%,#60a5fa_100%)] bg-clip-text text-transparent filter drop-shadow-[0_0_18px_rgba(96,165,250,0.55)]"
            style={{
              fontFamily: 'var(--font-sora)',
              letterSpacing: '-0.04em',
            }}
          >
            XNEX
          </p>
        </div>
      </div>

      {/* XNEX Marquee */}
      <div className="w-full border-t border-b border-white/10 py-10 overflow-hidden relative xnex-marquee-mask bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.06)_50%,transparent_100%)]">
        <div className="xnex-marquee-track">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-5xl sm:text-7xl font-black tracking-tighter select-none text-white/95" style={{ fontFamily: 'var(--font-sora)', letterSpacing: '-0.04em' }}>XNEX</span>
              <span className="text-white/50 text-xl sm:text-3xl font-bold tracking-[0.25em] uppercase">그래서</span>
              <span className="text-5xl sm:text-7xl font-black tracking-tighter select-none text-white/95" style={{ fontFamily: 'var(--font-sora)', letterSpacing: '-0.04em' }}>XNEX</span>
              <span className="text-white/50 text-xl sm:text-3xl font-bold tracking-[0.25em] uppercase">는</span>
              <span className="text-5xl sm:text-7xl font-black tracking-tighter select-none text-white/95" style={{ fontFamily: 'var(--font-sora)', letterSpacing: '-0.04em' }}>XNEX</span>
              <span className="text-3xl sm:text-5xl font-black select-none text-blue-400/55" style={{ fontFamily: 'var(--font-sora)' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: IDENTITY */}
      <div className="max-w-[1600px] mx-auto py-24">
        <div className="border border-dashed border-white/40 relative">
          <span className="absolute -left-px -top-px block size-4 border-l-2 border-t-2 border-primary" />
          <span className="absolute -right-px -top-px block size-4 border-r-2 border-t-2 border-primary" />
          <span className="absolute -bottom-px -left-px block size-4 border-b-2 border-l-2 border-primary" />
          <span className="absolute -bottom-px -right-px block size-4 border-b-2 border-r-2 border-primary" />
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 border-b md:border-b-0 md:border-r border-dashed border-white/20 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6 leading-snug">
                AI 네이티브 전문가들이
                <br />
                검증된 결과물로
                <br />
                클라이언트의 <span className="text-blue-400">X(성장)</span>를
                <br />
                만들어내는 회사.
              </h2>
              <div className="flex flex-nowrap gap-2 mt-4 w-full overflow-x-auto no-scrollbar">
                {['Marketing', 'Brand', 'Technology', 'Human'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-base font-bold border border-blue-400/40 text-white rounded-full bg-gradient-to-br from-blue-500/10 to-transparent hover:border-blue-400/70 hover:bg-blue-500/15 transition-all whitespace-nowrap shadow-[0_0_20px_-8px_rgba(96,165,250,0.4)]"
                  >
                    {tag}{' '}
                    <span className="text-blue-400 font-black text-base font-sora">
                      X
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2">
              {[
                { title: 'Unknown', desc: '기존 공식으로는 풀 수 없는 변수' },
                { title: 'Exponential', desc: '선형이 아닌 지수 성장' },
                { title: 'Cross', desc: '경계를 넘는 조직·사업·사람' },
                { title: 'Transformation', desc: 'AI Transformation의 핵심' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="p-8 border-b border-r last:border-r-0 odd:border-r border-dashed border-white/20 flex flex-col justify-center group hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-baseline gap-3 mb-3 whitespace-nowrap">
                    <span className="text-3xl font-black text-blue-400 group-hover:scale-110 transition-transform inline-block leading-none font-sora">
                      X
                    </span>
                    <span className="text-3xl font-bold text-white leading-none tracking-tight">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}