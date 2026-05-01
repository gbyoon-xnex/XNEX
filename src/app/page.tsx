import HeroShader from '@/components/sections/home/hero-shader';
import OrbitHero from '@/components/sections/home/orbit-hero';
import WhySection from '@/components/sections/home/why-section';
import OriginSection from '@/components/sections/home/origin-section';
import PartnerMarquee from '@/components/sections/home/partner-marquee';
import ServicesSection from '@/components/sections/home/services-section';
import ProjectShowcase from '@/components/sections/home/project-showcase';
import DiffSection from '@/components/sections/home/diff-section';
import ProcessSection from '@/components/sections/home/process-section';
import TeamSection from '@/components/sections/home/team-section';
import CTASection from '@/components/sections/home/cta-section';
import './page.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HeroShader />
      <OrbitHero />
      <WhySection />
      <OriginSection />
      <PartnerMarquee />
      <ServicesSection />
      <ProjectShowcase />
      <DiffSection />
      <ProcessSection />
      <TeamSection />
      <CTASection />
    </main>
  );
}
