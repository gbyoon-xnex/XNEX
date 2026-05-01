'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: 'D1',
    title: 'Discovery',
    label: 'D1 · Discovery',
    h: '무료 진단 + 정밀 진단으로 As-Is·니즈 파악.',
    content: (
      <div className="flex gap-4">
        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-blue-400 font-bold mb-1">무료 AX 진단</p>
          <p className="text-base text-gray-400">
            설문 기반 AI 자동 분석 → 5p 진단 리포트 → 30분 영상회의
          </p>
        </div>
        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-sm text-blue-400 font-bold mb-1">유료 정밀 진단</p>
          <p className="text-base text-gray-400">
            대면 90분 미팅 → 30p 리포트 + 우선순위 로드맵 + 단계별 비용
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'D2',
    title: 'Design',
    label: 'D2 · Design',
    h: 'PRD · 견적 · 우선순위 로드맵 · KPI 설계.',
    desc: '진단 결과를 바탕으로 실행 가능한 단계별 플랜과 명확한 KPI를 함께 설계합니다. 기술이 아니라 비즈니스 목표 중심으로 설계합니다.',
  },
  {
    id: 'D3',
    title: 'Deliver',
    label: 'D3 · Deliver',
    h: '실행 · 베타 · 검증 · 임직원 교육.',
    desc: '설계한 대로 AI 툴을 개발하고, 베타 운영을 통해 현장에서 검증합니다. 이후 임직원 교육과 운영 매뉴얼까지 제공합니다.',
  },
  {
    id: 'D4',
    title: 'Drive',
    label: 'D4 · Drive',
    h: '운영 · 리포트 · 최적화.',
    desc: '납품 후 종료가 아닙니다. 월간 KPI 리포트와 함께 지속적으로 운영하고 고도화합니다. 업무에 녹아들어 실제로 쓰이는 시스템을 만듭니다.',
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative max-w-[1600px] mx-auto my-32 w-full" style={{ fontFamily: 'var(--font-sora)' }}>
      <div className="mb-10 px-0">
        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          4D 프로세스.
        </h2>
        <p className="text-gray-500 text-base mt-2">
          Discovery → Design → Deliver → Drive
        </p>
      </div>

      <div className="relative border border-dashed border-white/30 overflow-hidden">
        <span className="absolute -left-px -top-px block size-4 border-l-2 border-t-2" style={{ borderColor: 'var(--primary)' }} />
        <span className="absolute -right-px -top-px block size-4 border-r-2 border-t-2" style={{ borderColor: 'var(--primary)' }} />
        <span className="absolute -bottom-px -left-px block size-4 border-b-2 border-l-2" style={{ borderColor: 'var(--primary)' }} />
        <span className="absolute -bottom-px -right-px block size-4 border-b-2 border-r-2" style={{ borderColor: 'var(--primary)' }} />

        <div className="h-1 bg-white/5 relative overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-700"
            style={{ width: `${(activeStep + 1) * 25}%` }}
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-64 flex-shrink-0 border-r border-dashed border-white/20">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(i)}
                className={cn(
                  'w-full text-left px-8 py-6 border-b border-dashed border-white/20 transition-all duration-200 hover:bg-white/5',
                  activeStep === i ? 'active-step' : 'text-gray-500'
                )}
              >
                <p
                  className={cn(
                    'text-sm font-bold tracking-widest mb-1',
                    activeStep === i ? 'text-blue-400' : 'text-gray-600'
                  )}
                >
                  {step.id}
                </p>
                <p className="font-black text-lg">{step.title}</p>
              </button>
            ))}
          </div>

          <div className="flex-1 p-10 min-h-[260px] flex flex-col justify-center">
            <div className="process-content">
              <p className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-3">
                {steps[activeStep].label}
              </p>
              <h3 className="text-4xl font-black text-white mb-4">
                {steps[activeStep].h}
              </h3>
              {steps[activeStep].content ? (
                steps[activeStep].content
              ) : (
                <p className="text-base text-gray-400 leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}