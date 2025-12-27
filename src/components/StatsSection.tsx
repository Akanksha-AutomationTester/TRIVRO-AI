export default function StatsSection() {
  const stats = [
    { value: '51+', label: 'AI Tools Included' },
    { value: '1000+', label: 'Funnels Created' },
    { value: '5000+', label: 'Ads Generated' },
    { value: '3000+', label: 'Blogs Written' },
    { value: '70%', label: 'Avg. Cost Saved' },
    { value: '3X', label: 'Faster Launch' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
            Trivro AI Impact in Numbers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 hover:border-[#00D4FF]/50 transition">
              <div className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
