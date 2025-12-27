import FounderSection from '@/components/FounderSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PageLayout from '@/components/PageLayout';

export default function AboutPage() {
    return (
        <PageLayout>
            <div className="pt-20">
                <FounderSection />
                <WhyChooseSection />
                <TestimonialsSection />
            </div>
        </PageLayout>
    );
}
