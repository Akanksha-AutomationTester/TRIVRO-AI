export default function PricingSection() {
  const plans = [
    {
      name: 'Monthly Plan',
      emoji: '🏷️',
      tag: 'Flexible Start',
      price: '₹18,000',
      gst: '+ 18% GST',
      desc: 'Pay as you grow',
      subtext: 'Perfect for early-stage founders',
      features: ['All Core Apps (AI + CRM + Sites + Forms + Email)', 'Unlimited Projects (Funnels, Blogs, Landing Pages)', 'Email Support (Business hours)'],
      cta: 'Choose Monthly Plan',
      link: 'https://rzp.io/rzp/trivro.in',
      popular: false
    },
    {
      name: 'Quarterly Plan',
      emoji: '⭐',
      tag: 'MOST POPULAR',
      price: '₹39,999',
      gst: '+ 18% GST',
      desc: 'Includes everything in Monthly +',
      subtext: '',
      features: ['Quarterly Check-Ins (Roadmap Review + Growth Planning)', 'Priority Support Responses'],
      cta: 'Choose Quarterly Plan',
      link: 'https://rzp.io/rzp/KBClrybs',
      popular: true
    },
    {
      name: 'Yearly Plan',
      emoji: '👑',
      tag: 'BEST VALUE',
      price: '₹94,999',
      gst: '+ 18% GST',
      desc: 'Includes everything in Quarterly +',
      subtext: '',
      features: ['Premium Support', 'Early Features Access', '1–on–1 Niche Clarity Session', 'Done-For-You Landing Page (copy + design)', 'First Meta Ad Account Setup', 'Business Launch Support'],
      cta: 'Go Yearly',
      link: 'https://rzp.io/rzp/NpvFoINb',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0A0E27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">Affordable Pricing for Every Business</span>
          </h2>
          <p className="text-xl text-white/70">Simple, Flexible, Built for Your Growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border ${plan.popular ? 'border-[#00D4FF] shadow-2xl shadow-[#00D4FF]/30 scale-105' : 'border-white/10'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-full text-sm">
                  {plan.tag}
                </div>
              )}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{plan.emoji}</span>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              </div>
              <p className="text-[#00FFA3] text-xs font-semibold mb-3">{plan.tag}</p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/60 text-sm"> {plan.gst}</span>
              </div>
              <p className="text-white/80 font-semibold mb-1">{plan.desc}</p>
              {plan.subtext && <p className="text-white/60 text-sm mb-6">{plan.subtext}</p>}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start text-white/80">
                    <span className="text-[#00FFA3] mr-2 font-bold">✔</span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a href={plan.link} target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg text-center hover:shadow-lg hover:shadow-[#00D4FF]/50 transition transform hover:scale-105">
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
