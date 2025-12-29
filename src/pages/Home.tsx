import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import YouTubeSection from '@/components/YouTubeSection';
import CustomAISection from '@/components/CustomAISection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PerfectForSection from '@/components/PerfectForSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import DemoCallSection from '@/components/DemoCallSection';
import FounderSection from '@/components/FounderSection';
import PageLayout from '@/components/PageLayout';

export default function Home() {
    return (
        <PageLayout>
            <HeroSection />
            <StatsSection />
            <YouTubeSection />
            <CustomAISection />
            <WhyChooseSection />
            <PerfectForSection />
            <TestimonialsSection />
            <DemoCallSection />
            <FounderSection />
        </PageLayout>
    );
}
