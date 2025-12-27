

import React from 'react';
import AppLayout from '@/components/AppLayout';
// AEO and Keyword components moved into AppLayout to avoid showing at top
import { AppProvider } from '@/contexts/AppContext';

const Index: React.FC = () => {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default Index;

