import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: 'What is Trivro AI?', a: "Trivro AI is India's best AI Marketing Tools Ecosystem with 51+ AI tools for ads, funnels, landing pages, emails, blogs, SEO content, branding and automation — all in one platform." },
    { q: 'Who can use Trivro AI?', a: 'Startups, freelancers, agency owners, small business owners, real estate professionals, coaches, consultants, eCommerce brands, and new founders.' },
    { q: 'Does Trivro AI create Meta Ads?', a: 'Yes. Meta Ads AI generates ad creatives, hooks, CTAs, copy and variation sets instantly.' },
    { q: 'Can Trivro AI build landing pages automatically?', a: 'Yes. Trivro AI\'s Funnel Genie creates complete funnels and landing pages in minutes.' },
    { q: 'Does Trivro AI replace marketing agencies?', a: 'For many businesses — yes. It replaces ads creators, designers, copywriters, funnel builders, video editors, and content writers.' },
    { q: 'Is Trivro AI easy for beginners?', a: 'Yes. No coding or technical skills needed. Every tool is step-by-step guided.' },
    { q: 'Does Trivro AI offer custom AI apps?', a: 'Yes. You can request custom AI tools like AI CRM, industry bots, niche funnels, or automation systems built for your business.' },
    { q: 'What is AEO and how does Trivro AI support it?', a: 'AEO (Answer Engine Optimization) helps your content rank on AI search engines like GPT, Gemini, Perplexity and voice assistants. Trivro AI automatically optimizes content for AEO visibility.' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition"
              >
                <span className="text-lg font-semibold text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#00D4FF] transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-white/70">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
