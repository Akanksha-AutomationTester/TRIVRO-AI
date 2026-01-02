import BlogSection from '@/components/BlogSection';
import PageLayout from '@/components/PageLayout';

export default function BlogPage() {
    return (
        <PageLayout>

            <main className="min-h-screen bg-[#0A0E27]">
                <BlogSection />
            </main>
        </PageLayout>
    );
}
