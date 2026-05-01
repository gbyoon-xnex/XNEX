'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 7) return numbers.slice(0, 3) + '-' + numbers.slice(3);
  return numbers.slice(0, 3) + '-' + numbers.slice(3, 7) + '-' + numbers.slice(7, 11);
};

const AXForm = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.07 }
    );

    const rvElements = section.querySelectorAll('.rv');
    rvElements.forEach(el => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitted) return;
    if (!agreed) {
      setErrorMsg('개인정보 수집·이용에 동의해주세요');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      source: 'ax',
      company: formData.get('company'),
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      industry: formData.get('industry')
    };

    try {
      const supabase = createClient();
      const { error } = await supabase.from('leads').insert([data]);
      if (error) throw error;
      
      setIsSubmitted(true);
      formRef.current?.reset();
      setPhone('');
      setAgreed(false);
      setModalOpen(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="s10" ref={sectionRef}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 40px' }}>
        <h2 className="rv" style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(36px,4.5vw,56px)', lineHeight: '.95', letterSpacing: '-.01em', marginBottom: '32px', textAlign: 'center' }}>
          무료 AX 진단,<br /><em style={{ fontStyle: 'normal', color: 'var(--org)' }}>지금 신청하세요.</em>
        </h2>
        <div className="form-card rv">
          <form id="axForm" ref={formRef} onSubmit={handleSubmit}>
            <div className="frow">
              <div className="ff">
                <label className="fl">회사명 <span>*</span></label>
                <input className="fi" type="text" name="company" placeholder="(주)회사명" required />
              </div>
              <div className="ff">
                <label className="fl">성함 <span>*</span></label>
                <input className="fi" type="text" name="name" placeholder="홍길동" required />
              </div>
            </div>
            <div className="frow">
              <div className="ff">
                <label className="fl">연락처 <span>*</span></label>
                <input 
                  className="fi" 
                  type="tel" 
                  name="phone" 
                  placeholder="010-0000-0000" 
                  required 
                  maxLength={13}
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                />
              </div>
              <div className="ff">
                <label className="fl">이메일 <span>*</span></label>
                <input className="fi" type="email" name="email" placeholder="name@company.com" required />
              </div>
            </div>
            <div className="ff" style={{ marginBottom: '12px' }}>
              <label className="fl">업종 <span>*</span></label>
              <select 
                className="fi" 
                name="industry" 
                required 
                defaultValue=""
                style={{ 
                  appearance: 'none', 
                  cursor: 'pointer', 
                  backgroundImage: `url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%226%22><path fill=%22rgba(255,255,255,0.3)%22 d=%22M0 0l5 5 5-5%22/></svg>')`, 
                  backgroundRepeat: 'no-repeat', 
                  backgroundPosition: 'right 12px center' 
                }}
              >
                <option value="" disabled>업종 선택</option>
                <option>병원/의원</option>
                <option>법무사/변호사</option>
                <option>학원/교육</option>
                <option>쇼핑몰/이커머스</option>
                <option>인테리어/시공</option>
                <option>여행/숙박</option>
                <option>부동산/등기</option>
                <option>제조/유통</option>
                <option>IT/스타트업</option>
                <option>기타</option>
              </select>
            </div>
            <div className="fchk">
              <input 
                type="checkbox" 
                id="pa" 
                checked={agreed} 
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  if (e.target.checked) setErrorMsg('');
                }} 
              />
              <label htmlFor="pa">(필수) 개인정보 수집·이용에 동의합니다</label>
            </div>
            {errorMsg && (
              <div style={{ color: '#ff4444', fontSize: '12px', marginBottom: '10px', textAlign: 'center' }}>
                {errorMsg}
              </div>
            )}
            <button type="submit" className="fsub" disabled={isSubmitting || isSubmitted}>
              {isSubmitting ? '전송 중...' : isSubmitted ? '신청 완료' : '무료 진단 신청하기'}
            </button>
            <div className="fmc">{`// 영업 전화가 아닙니다 · 전문 PM의 현황 파악 미팅`}</div>
          </form>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '40px auto 0', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px', border: '1px solid var(--line)', borderRadius: '8px', overflow: 'hidden' }}>
          <div className="ps rv" style={{ background: 'var(--bg2)', padding: '24px 22px', borderRight: '1px solid var(--line)', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
            <div className="ps-step" style={{ fontSize: '36px' }}>01</div>
            <div>
              <div className="ps-h">유선 상담 (무료)</div>
              <div className="ps-d">담당 PM이 현황을 파악하고 방향성을 논의합니다.</div>
            </div>
          </div>
          <div className="ps rv" style={{ background: 'var(--bg2)', padding: '24px 22px', borderRight: '1px solid var(--line)', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
            <div className="ps-step" style={{ fontSize: '36px' }}>02</div>
            <div>
              <div className="ps-h">대면 미팅 & 무료 진단</div>
              <div className="ps-d">4개 영역 정밀 진단. 데이터·현업·역량·인프라.</div>
            </div>
          </div>
          <div className="ps rv" style={{ background: 'var(--bg2)', padding: '24px 22px', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
            <div className="ps-step" style={{ fontSize: '36px' }}>03</div>
            <div>
              <div className="ps-h">맞춤 솔루션 제안</div>
              <div className="ps-d">ROI 기반 최적 솔루션을 설계합니다.</div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-ov on">
          <div className="modal-box">
            <div className="modal-ico">✓</div>
            <div className="modal-t">신청 완료!</div>
            <div className="modal-b">담당 PM이 48시간 내 유선으로 연락드립니다.</div>
            <button className="modal-btn" onClick={closeModal}>확인</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AXForm;