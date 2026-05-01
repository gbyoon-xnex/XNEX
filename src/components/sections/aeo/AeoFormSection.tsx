'use client';

import { useState, useEffect, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 7) return numbers.slice(0, 3) + '-' + numbers.slice(3);
  return numbers.slice(0, 3) + '-' + numbers.slice(3, 7) + '-' + numbers.slice(7, 11);
};

export default function AeoFormSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    industry: ''
  });

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    
    let W: number, H: number;
    const resize = () => {
      if (!c) return;
      W = c.width = c.offsetWidth;
      H = c.height = c.offsetHeight;
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    let t = 0;
    let animationId: number;
    
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const gs = 60;
      for (let x = 0; x < W; x += gs) {
        for (let y = 0; y < H; y += gs) {
          const d = Math.sqrt((x - W / 2) ** 2 + (y - H / 2) ** 2);
          const wave = Math.sin(d * 0.02 - t * 0.04);
          const a = Math.max(0, 0.03 + wave * 0.02);
          ctx.fillStyle = `rgba(224, 32, 32, ${a})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
      t++;
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted) return;
    if (!agreed) {
      setErrorMsg('개인정보 수집·이용에 동의해주세요');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);
    
    try {
      const supabase = createClient();
      const { error } = await supabase.from('leads').insert([{
        source: 'aeo',
        company: formData.company,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        industry: formData.industry
      }]);
      if (error) throw error;
      
      setIsSubmitted(true);
      setFormData({
        company: '',
        name: '',
        phone: '',
        email: '',
        industry: ''
      });
      setAgreed(false);
      setShowModal(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section id="s9">
        <canvas id="formCanvas" ref={canvasRef}></canvas>
        <div className="s9-wrap">
          <div className="form-badge"><span className="form-badge-dot"></span>🔴 잔여 4자리 마감 임박</div>
          <h2 className="form-h">1분 안에 무료 상담 신청</h2>
          <p className="form-sub">신청 즉시 소개서·6개 업종 레퍼런스를 이메일로 발송합니다.</p>
          <div className="form-card">
            <form id="cForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-lbl">회사명 <span>*</span></label>
                  <input
                    className="form-inp"
                    type="text"
                    name="company"
                    placeholder="(주) 회사명"
                    required
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label className="form-lbl">담당자명 <span>*</span></label>
                  <input
                    className="form-inp"
                    type="text"
                    name="name"
                    placeholder="홍길동"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-lbl">전화번호 <span>*</span></label>
                  <input
                    className="form-inp"
                    type="tel"
                    name="phone"
                    placeholder="010-0000-0000"
                    required
                    maxLength={13}
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                  />
                </div>
                <div className="form-field">
                  <label className="form-lbl">이메일 <span>*</span></label>
                  <input
                    className="form-inp"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-field" style={{ marginBottom: '14px' }}>
                <label className="form-lbl">업종 <span>*</span></label>
                <select
                  className="form-sel"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={e => setFormData({ ...formData, industry: e.target.value })}
                >
                  <option value="" disabled>업종 선택</option>
                  <option>병원/의원</option>
                  <option>법무사/변호사</option>
                  <option>학원/교육</option>
                  <option>쇼핑몰/이커머스</option>
                  <option>인테리어/시공</option>
                  <option>여행/숙박</option>
                  <option>부동산/등기</option>
                  <option>기타</option>
                </select>
              </div>
              <div className="form-check">
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
              <button type="submit" className="form-submit" disabled={isSubmitting || isSubmitted}>
                {isSubmitting ? '전송 중...' : isSubmitted ? '신청 완료' : '무료 상담 신청 →'}
              </button>
              <p className="form-safe">🔒 무리한 영업 전화 없음 · 신청 즉시 자료 자동 발송</p>
            </form>
          </div>
        </div>
      </section>

      <div className={`modal-ov ${showModal ? 'on' : ''}`} id="modal">
        <div className="modal-box">
          <div className="modal-ico">✓</div>
          <div className="modal-t">상담 신청 완료!</div>
          <div className="modal-b">입력하신 이메일 주소로 서비스 소개서와 6개 업종 레퍼런스 자료를 24시간 이내에 보내드리겠습니다.</div>
          <div className="modal-info">📞 전담 컨설턴트가 48시간 내 직접 연락드립니다</div>
          <button className="modal-cls" onClick={closeModal}>확인</button>
        </div>
      </div>
    </>
  );
}