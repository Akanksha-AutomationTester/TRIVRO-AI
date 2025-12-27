import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0A0E27]/95 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/80 text-sm">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
          <a href="#privacy" className="text-[#00D4FF] hover:underline">Learn more</a>
        </p>
        <div className="flex items-center space-x-3">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-semibold rounded-lg hover:shadow-lg transition"
          >
            Accept
          </button>
          <button
            onClick={() => setShow(false)}
            className="p-2 text-white/60 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
