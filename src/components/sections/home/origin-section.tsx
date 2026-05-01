'use client';

import Counter from '@/components/ui/counter';

export default function OriginSection() {
  return (
    <section className="relative w-full bg-black border-y border-dashed border-white/20 py-20 font-sora">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 leading-tight">
          13년된 글로벌 기업에서
          <br />
          스핀오프.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-dashed border-white/30">
          {[
            { target: 13, suffix: '년', label: '2012년 설립' },
            { target: 14, suffix: '+', label: '글로벌 거점 국가' },
            { target: 350, suffix: '+', label: '임직원' },
            { target: 30, suffix: '+', label: '기업 고객사' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="p-8 text-center border-r last:border-r-0 border-dashed border-white/20"
            >
              <p className="text-4xl font-black text-white mb-1">
                <Counter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="text-gray-400 text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}