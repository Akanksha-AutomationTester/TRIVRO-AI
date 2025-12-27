// SEO Utility Functions for Trivro AI

export const updateMetaTags = (config: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}) => {
  if (config.title) {
    document.title = config.title;
    updateMeta('og:title', config.title);
    updateMeta('twitter:title', config.title);
  }

  if (config.description) {
    updateMeta('description', config.description);
    updateMeta('og:description', config.description);
    updateMeta('twitter:description', config.description);
  }

  if (config.keywords) {
    updateMeta('keywords', config.keywords);
  }

  if (config.image) {
    updateMeta('og:image', config.image);
    updateMeta('twitter:image', config.image);
  }

  if (config.url) {
    updateMeta('og:url', config.url);
  }
};

const updateMeta = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    const isProperty = name.includes(':');
    if (isProperty) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

export const addStructuredData = (schema: Record<string, any>) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

// Scroll to section with GA tracking
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Track with Google Analytics
    if (window.gtag) {
      window.gtag('event', 'scroll_to_section', {
        section: sectionId
      });
    }
  }
};
