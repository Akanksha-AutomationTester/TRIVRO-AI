export default function PerfectForSection() {
  const audiences = [
    'Early-stage marketing founders',
    'Small business owners',
    'Freelancers & solo marketers',
    'Real estate & service businesses',
    'Coaches, consultants & course creators',
    'Agency starters with 1–2 team members',
    'SaaS businesses',
    'E-commerce entrepreneurs',
    'Individuals who want to start a marketing agency but have low budget'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
            Trivro AI Is Perfect For
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((audience, i) => (
            <div key={i} className="flex items-center space-x-3 bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-[#00D4FF]/50 transition">
              <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] rounded-full"></div>
              <span className="text-white/80">{audience}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
