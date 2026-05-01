'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Footer() {
  const pathname = usePathname();

  // 1. Path-based Logic
  const isAeo = pathname.startsWith('/aeo');
  const isAx = pathname.startsWith('/ax');

  const getLogo = () => {
    if (isAeo) return '/logos/logo-aeo.svg';
    if (isAx) return '/logos/logo-ax.svg';
    return '/XNEX.svg';
  };

  const getSlogan = () => {
    if (isAeo) return 'AI 검색 최적화 전문 에이전시';
    if (isAx) return 'AI로 혁신한 기업만이 초격차를 만듭니다.';
    return '비즈니스 스케일업 파트너';
  };

  const getCopyright = () => {
    if (isAeo) return '© 2026 (주)엑스넥스 AEO 사업부. All rights reserved.';
    if (isAx) return '© 2026 (주)엑스넥스 AX 사업부. All rights reserved.';
    return '© 2026 (주)엑스넥스. All rights reserved.';
  };

  // 2. Links configuration
  const links = [
    { name: 'AX 에이전시', href: '/ax', active: isAx, activeColor: 'text-orange-500' },
    { name: 'AEO 홈페이지', href: '/aeo', active: isAeo, activeColor: 'text-red-500' },
    { name: 'XNEX 홈', href: '/', hidden: !isAeo && !isAx },
    { name: '개인정보처리방침', href: '#' },
  ];

  return (
    <footer className="w-full bg-[#000] border-t border-[rgba(255,255,255,0.06)] py-10 px-10">
      <div className="max-w-[1600px] mx-auto">
        {/* Upper Row: Logo+Slogan / Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-block">
              <Image 
                src={getLogo()} 
                alt="XNEX" 
                width={100} 
                height={14} 
                className="brightness-100"
                priority
              />
            </Link>
            <p className="text-[13px] text-white/50 font-medium tracking-tight">
              {getSlogan()}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.filter(l => !l.hidden).map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-[13px] transition-colors hover:text-white",
                  link.active ? (link.activeColor || "text-white") : "text-white/50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Lower Row: Copyright */}
        <div className="flex justify-center border-t border-white/[0.03] pt-8">
          <p className="font-mono text-[11px] text-white/30 text-center uppercase tracking-widest">
            {getCopyright()}
          </p>
        </div>
      </div>
    </footer>
  );
}