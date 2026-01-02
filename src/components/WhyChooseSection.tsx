import { Link } from 'react-router-dom';

export default function WhyChooseSection() {
  const reasons = [
    { title: "India's Best AI Marketing Tools Ecosystem", desc: "51+ AI tools crafted to create ads, funnels, landing pages, blogs, emails, SEO content, branding assets, videos, and more — inside one powerful platform.", link: '/tools' },
    { title: "Build Everything in Minutes, Not Weeks", desc: "Create Meta Ads, funnels, landing pages, email sequences, blog posts, and visuals instantly with AI. Speed is your new superpower.", link: '/tools' },
    { title: "50%–70% Cost Savings for Every Business", desc: "Replace multiple subscriptions, agencies, designers, editors, developers, and content teams. Execute like a full-scale agency — at a fraction of the cost.", link: '/pricing' },
    { title: "High-Ticket Lead Generation, Simplified", desc: "Our AI Funnel Builder + Meta Ads AI + SEO Engine + Conversion Tools work together to bring you consistent, high-quality leads without guesswork.", link: '/tools' },
    { title: "The Power of AEO (Answer Engine Optimization)", desc: "Trivro AI prepares your content for next-generation search platforms like ChatGPT, Gemini, Perplexity, Meta AI, and voice assistants. AEO is the new SEO — and Trivro AI puts you far ahead of competitors.", link: '/blog' },
    { title: "Perfect for Early-Stage Founders & New Agency Owners", desc: "Start strong even if you don't have a team, design skills, coding knowledge, or a large budget. Trivro AI becomes your entire marketing team.", link: '/about' }
  ];

  return (
    <section id="why-choose" className="py-20 bg-[#0A0E27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">India's Best AI Marketing Tools Ecosystem</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Because modern marketing needs speed, clarity, and intelligence — not big teams, big budgets, or outdated strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <Link to={reason.link} key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#00D4FF]/50 transition group">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition">{reason.title}</h3>
              <p className="text-white/70 leading-relaxed">{reason.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
