import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919274741994"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition"></div>
        <div className="relative bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 rounded-full shadow-2xl hover:scale-110 transition transform">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute -top-12 right-0 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition border border-white/20">
        Chat on WhatsApp
      </div>
    </a>
  );
}
