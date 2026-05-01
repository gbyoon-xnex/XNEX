import './aeo.css';
import AeoHeroSection from '@/components/sections/aeo/AeoHeroSection';
import AeoStatsSection from '@/components/sections/aeo/AeoStatsSection';
import AeoSimulationSection from '@/components/sections/aeo/AeoSimulationSection';
import AeoModifierSection from '@/components/sections/aeo/AeoModifierSection';
import AeoPipelineSection from '@/components/sections/aeo/AeoPipelineSection';
import AeoPodiumSection from '@/components/sections/aeo/AeoPodiumSection';
import AeoReferenceSection from '@/components/sections/aeo/AeoReferenceSection';
import AeoPricingSection from '@/components/sections/aeo/AeoPricingSection';
import AeoFaqSection from '@/components/sections/aeo/AeoFaqSection';
import AeoFormSection from '@/components/sections/aeo/AeoFormSection';
import AeoStickyBar from '@/components/sections/aeo/AeoStickyBar';
import AeoClientWrapper from '@/components/sections/aeo/AeoClientWrapper';
import AeoHookBanner from '@/components/sections/aeo/AeoHookBanner';

export default function AeoPage() {
  return (
    <div className="aeo-landing-container aeo-page">
      <AeoHookBanner />
      <AeoHeroSection />
      <AeoStatsSection />
      <AeoSimulationSection />
      <AeoModifierSection />
      <AeoPipelineSection />
      <AeoPodiumSection />
      <AeoReferenceSection />
      <AeoPricingSection />
      <AeoFaqSection />
      <AeoFormSection />
      <AeoStickyBar />
      <AeoClientWrapper />
    </div>
  );
}