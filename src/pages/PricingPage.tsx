import ComparisonTable from '@/components/ComparisonTable';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import PageLayout from '@/components/PageLayout';

export default function PricingPage() {
    return (
        <PageLayout>
            <div className="pt-20">
                <PricingSection />
                <ComparisonTable />
                <FAQSection />
            </div>
        </PageLayout>
    );
}
