export default function ComparisonTable() {
  const rows = [
    { feature: 'Cost', trivro: 'Flat plans — save 50%–70%', agency: 'High fees + variable costs' },
    { feature: 'Speed', trivro: 'Minutes/hours', agency: 'Days/weeks' },
    { feature: 'Team Required', trivro: 'No team needed', agency: 'Multiple specialists' },
    { feature: 'Scalability', trivro: 'Unlimited projects', agency: 'Limited by capacity' },
    { feature: 'Flexibility', trivro: 'Full control, anytime', agency: 'Dependent on agency' },
    { feature: 'Transparency', trivro: 'Clear workflow & costs', agency: 'Often "black box"' }
  ];

  return (
    <section className="py-20 bg-[#0A0E27]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
            Trivro AI vs Traditional Agencies
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                  <th className="px-6 py-4 text-left text-[#00D4FF] font-bold">Trivro AI</th>
                  <th className="px-6 py-4 text-left text-white/60 font-bold">Traditional Agencies</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="px-6 py-4 text-white font-semibold">{row.feature}</td>
                    <td className="px-6 py-4 text-white/80">{row.trivro}</td>
                    <td className="px-6 py-4 text-white/60">{row.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
