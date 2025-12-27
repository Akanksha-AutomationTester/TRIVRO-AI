import ToolsShowcase from '@/components/ToolsShowcase';
import CustomAISection from '@/components/CustomAISection';
import PerfectForSection from '@/components/PerfectForSection';
import PageLayout from '@/components/PageLayout';

export default function ToolsPage() {
    return (
        <PageLayout>
            <div className="pt-20">
                <ToolsShowcase />
                <CustomAISection />
                <PerfectForSection />
            </div>
        </PageLayout>
    );
}
