'use client';

export default function AeoPricingSection() {
  const scrollToForm = () => {
    const el = document.getElementById('s9');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="s8">
      <div className="s8-wrap">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', fontWeight: 800, marginBottom: '8px' }}>
            5월에 신청해야 하는 <span style={{ color: 'var(--red2)' }}>명확한 이유</span>
          </h2>
        </div>
        <div className="reason-coupon-wrap">
          <div className="price-coupon">
            <div className="coupon-inner">
              <div className="coupon-label">정가 (PLAN 02 기준)</div>
              <div className="coupon-orig-wrap">
                <span className="coupon-orig">7,000,000원</span>
                <div className="coupon-slash"></div>
              </div>
              <div className="coupon-row2">
                <div className="coupon-arrow">→</div>
                <div className="coupon-new">
                  <div className="coupon-new-label">5월 한정가</div>
                  <div className="coupon-new-price">3,000,000원</div>
                </div>
              </div>
            </div>
          </div>
          <div className="s8-reason">
            <div className="s8-reason-t">왜 700만원짜리 작업을 5월에만 300만원에?</div>
            <div className="s8-reason-body">
              <strong style={{ color: 'var(--yel)' }}>1.</strong> AI가 아직 '업종별 답'을 굳히지 않은 지금이 골든타임. 학습이 누적되면 후발주자는 5배의 콘텐츠 필요.<br />
              <strong style={{ color: 'var(--yel)' }}>2.</strong> 7번째 업종 레퍼런스 확보 단계. 레퍼런스 누적 → 단가 인상. <strong>6월부터 매월 +50만원.</strong>
            </div>
            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,184,0,0.2)', fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: 'var(--yel)', letterSpacing: '0.05em', lineHeight: 1.9 }}>
              ⚠ <strong style={{ color: '#fff' }}>5월 300만원</strong> → 6월 350만원 → 7월 400만원 → 8월 450만원 → 정가 700만원
            </div>
          </div>
        </div>
        <div className="price-grid">
          <div className="price-card">
            <div className="p-plan">PLAN 01</div>
            <div className="p-badge b50">-50% OFF · 5월 한정</div>
            <div className="p-title">기존 홈페이지 AEO 최적화</div>
            <div className="p-orig">3,000,000원</div>
            <div className="p-curr">150만원</div>
            <ul className="p-feats">
              <li>AEO 가시성 정밀 진단</li>
              <li>스키마 마크업 재설계</li>
              <li>수식어별 FAQ 50개 작성</li>
              <li>4개 AI 채널 동시 최적화</li>
            </ul>
            <button className="p-cta ol" onClick={scrollToForm}>PLAN 01 상담 신청</button>
          </div>
          <div className="price-card rec">
            <div className="p-plan">PLAN 02</div>
            <div className="p-badge b57">-57% OFF · 5월 한정</div>
            <div className="p-title">신규 홈페이지 제작 + AEO</div>
            <div className="p-orig">7,000,000원</div>
            <div className="p-curr">300만원</div>
            <ul className="p-feats">
              <li>PLAN 01 전체 항목 포함</li>
              <li>신규 디자인·개발 (7페이지 이내)</li>
              <li>수식어별 FAQ 50개 작성</li>
              <li>유지보수 3개월 무료 <span style={{ color: 'var(--t2)', fontSize: '11px' }}>(4개월차부터 월 10만원)</span></li>
              <li>1페이지 추가당 50만원 추가</li>
            </ul>
            <button className="p-cta fi" onClick={scrollToForm}>지금 신청하기 →</button>
          </div>
        </div>
        <div className="price-esc">
          ⚠ <strong>Escrow Safety</strong> 작업 완료 후 잔금 결제 원칙
        </div>
      </div>
    </section>
  );
}