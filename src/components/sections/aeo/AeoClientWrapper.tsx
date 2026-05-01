'use client';

import dynamic from 'next/dynamic';

const AeoCursor = dynamic(() => import('./AeoCursor'), {
  ssr: false,
});

export default function AeoClientWrapper() {
  return <AeoCursor />;
}