import BlogSection from '@/components/BlogSection';
import PageLayout from '@/components/PageLayout';

export default function BlogPage() {
    return (
        <PageLayout>
            <div className="pt-20">
                <BlogSection />
            </div>
        </PageLayout>
    );
}
