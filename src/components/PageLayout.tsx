import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';
import CookieConsent from './CookieConsent';
import { ReactNode } from 'react';

interface PageLayoutProps {
    children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="min-h-screen bg-[#0A0E27]">
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
            <WhatsAppWidget />
            <CookieConsent />
        </div>
    );
}
