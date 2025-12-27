export default function CustomAISection() {
  return (
    <section className="py-20 bg-[#0A0E27] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 to-[#00FFA3]/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
              Get Your Own Custom AI App
            </h2>
            <p className="text-xl text-white/80 mb-6">
              Built for Your Business
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              Need a custom AI CRM? A real-estate lead engine? An industry-specific automation tool? A niche-focused AI app? We create custom AI software tailored to your business needs.
            </p>
            <ul className="space-y-4 mb-8">
              {['AI workflow builder', 'Custom dashboards', 'Business automations', 'Niche AI apps (CRM, funnels, content engines)'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] rounded-full"></div>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:support@trivro.in" className="inline-block px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg hover:shadow-2xl hover:shadow-[#00D4FF]/50 transition">
              Request Custom AI App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
