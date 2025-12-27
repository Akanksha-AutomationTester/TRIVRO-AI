import { Calendar, Mail } from 'lucide-react';

export default function DemoCallSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-[#8B5CF6]/10 to-[#00FFA3]/10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Calendar className="w-16 h-16 mx-auto mb-6 text-[#00D4FF]" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
          See Trivro AI in Action
        </h2>
        <p className="text-xl text-white/80 mb-8">
          Book a personalized demo call and discover how Trivro AI can transform your marketing
        </p>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Mail className="w-6 h-6 text-[#00D4FF]" />
            <span className="text-white text-lg">Request a demo at:</span>
          </div>
          <a 
            href="mailto:support@trivro.in?subject=Demo Call Request" 
            className="text-2xl font-bold text-[#00D4FF] hover:text-[#00FFA3] transition"
          >
            support@trivro.in
          </a>
          <p className="text-white/60 mt-4">We'll respond within 24 hours</p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:support@trivro.in?subject=Demo Call Request" 
            className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg hover:shadow-2xl hover:shadow-[#00D4FF]/50 transition"
          >
            Request Demo
          </a>
          <a 
            href="tel:+919274741994" 
            className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition"
          >
            Call: +91 9274741994
          </a>
        </div>
      </div>
    </section>
  );
}
