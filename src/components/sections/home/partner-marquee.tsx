'use client';

import Image from 'next/image';

const logos = [
  '/logos/logo01.svg',
  '/logos/logo02.svg',
  '/logos/logo03.svg',
  '/logos/logo04.svg',
  '/logos/logo05.svg',
  '/logos/logo06.svg',
  '/logos/logo07.svg',
  '/logos/logo08.svg',
  '/logos/logo09.svg',
];

export default function PartnerMarquee() {
  return (
    <section className="relative w-full bg-black border-b border-dashed border-white/20 py-20 font-sora">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 leading-tight">
          신뢰한 파트너들.
        </h2>

        <div className="relative border border-dashed border-white/30 bg-black py-14 overflow-hidden">
          <div className="partner-marquee-track">
            {[...logos, ...logos].map((src, i) => (
              <Image
                key={`${src}-${i}`}
                src={src}
                alt={`Partner Logo ${i}`}
                width={120}
                height={36}
                style={{ width: 'auto', height: '36px' }}
                className="flex-shrink-0 brightness-0 invert opacity-55 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}