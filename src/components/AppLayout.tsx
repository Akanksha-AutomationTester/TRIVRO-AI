import Navigation from './Navigation';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import YouTubeSection from './YouTubeSection';
import WhyChooseSection from './WhyChooseSection';
import PricingSection from './PricingSection';
import TestimonialsSection from './TestimonialsSection';
import FounderSection from './FounderSection';
import FAQSection from './FAQSection';
import DemoCallSection from './DemoCallSection';
import AEOOptimization from './AEOOptimization';
import ToolsOverview from './ToolsOverview';
import Footer from './Footer';
import BlogSection from './BlogSection';
import WhatsAppWidget from './WhatsAppWidget';
import CookieConsent from './CookieConsent';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#0A0E27]">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <YouTubeSection />
      <WhyChooseSection />
      <PricingSection />
      <FounderSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <DemoCallSection />
      {/* Hidden SEO optimization component */}
      <AEOOptimization />
      <ToolsOverview />
      <Footer />
      <WhatsAppWidget />
      <CookieConsent />
    </div>
  );
}
