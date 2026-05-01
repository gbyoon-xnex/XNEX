'use client';

import { BrainCircuit, TrendingUp, LayoutTemplate, ArrowRight, ArrowDownToLine, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black py-24 font-sora">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
      <div className="relative z-20 px-6 max-w-[1200px] w-full">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">
            LET'S BUILD YOUR X
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter drop-shadow-2xl">
            지금 당장 시작 할 수 있는
            <br />
            3가지.
          </h2>
          <p className="text-lg text-white/60">
            "<b>XNEX</b>를 알고 있다는 것만으로 무료입니다."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-left">
          <a
            href="/ax"
            className="group relative p-6 rounded-2xl border border-blue-400/50 bg-gradient-to-br from-blue-500/15 to-transparent overflow-hidden hover:border-blue-400 transition-all backdrop-blur-sm shadow-[0_0_40px_-10px_rgba(96,165,250,0.45)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                <BrainCircuit className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm font-bold tracking-widest text-blue-400 uppercase">AX</p>
            </div>
            <h3 className="text-xl font-bold text-white mb-5">무료 AX 진단</h3>
            <span className="inline-flex items-center gap-1.5 text-base font-semibold text-blue-300 group-hover:gap-3 transition-all">
              진단 신청
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          <a
            href="#"
            className="group relative p-6 rounded-2xl border border-white/15 bg-white/[0.03] overflow-hidden hover:border-white/30 hover:bg-white/[0.06] transition-all backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-white/70" />
              </div>
              <p className="text-sm font-bold tracking-widest text-white/50 uppercase">Marketing</p>
            </div>
            <h3 className="text-xl font-bold text-white mb-5">무료 마케팅 진단</h3>
            <span className="inline-flex items-center gap-1.5 text-base font-semibold text-white/70 group-hover:text-white group-hover:gap-3 transition-all">
              진단 신청
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          <a
            href="/aeo"
            className="group relative p-6 rounded-2xl border border-white/15 bg-white/[0.03] overflow-hidden hover:border-white/30 hover:bg-white/[0.06] transition-all backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center flex-shrink-0">
                <LayoutTemplate className="w-5 h-5 text-white/70" />
              </div>
              <p className="text-sm font-bold tracking-widest text-white/50 uppercase">AEO</p>
            </div>
            <h3 className="text-xl font-bold text-white mb-5">무료 AEO 홈페이지 진단</h3>
            <span className="inline-flex items-center gap-1.5 text-base font-semibold text-white/70 group-hover:text-white group-hover:gap-3 transition-all">
              진단 신청
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="flex items-center gap-4 max-w-md mx-auto mb-8">
          <div className="flex-1 h-px bg-white/15" />
          <p className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
            Or Learn More
          </p>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 text-base font-semibold hover:bg-white/10 hover:border-white/40 transition-colors"
          >
            <ArrowDownToLine className="w-4 h-4" />
            회사소개서 다운로드
          </a>
          <a
            href="mailto:contact@xnex.kr"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white/60 text-base font-medium hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            contact@xnex.kr
          </a>
        </div>
      </div>
    </section>
  );
}