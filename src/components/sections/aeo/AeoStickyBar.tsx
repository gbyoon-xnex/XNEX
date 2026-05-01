'use client';

import { useEffect, useState } from 'react';

export default function AeoStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('s9');
      if (!formSection) return;
      
      const fRect = formSection.getBoundingClientRect();
      const formVisible = fRect.top < window.innerHeight && fRect.bottom > 0;
      
      setVisible(window.scrollY > 500 && !formVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('s9');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`sbar ${visible ? 'on' : ''}`} id="sbar">
      <div className="sbar-l">
        <span className="sbar-dot"></span>잔여 <strong>4자리</strong> · 6월부터 인상
      </div>
      <button className="sbar-btn" onClick={scrollToForm}>지금 신청 →</button>
    </div>
  );
}