

import React from 'react';
import AppLayout from '@/components/AppLayout';
// AEO and Keyword components moved into AppLayout to avoid showing at top
import { AppProvider } from '@/contexts/AppContext';

const Index: React.FC = () => {
  return (
    <AppProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Trivro AI",
            "applicationCategory": "MarketingApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "18000",
              "priceCurrency": "INR"
            }
          })
        }}
      />
      <AppLayout />
    </AppProvider>
  );
};

export default Index;

