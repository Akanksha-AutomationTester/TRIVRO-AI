import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    { name: 'Rahul Sharma', role: 'Marketing Agency Owner', text: 'Trivro AI has transformed how we deliver services to clients. We can now create complete campaigns in hours instead of weeks. Game changer!', rating: 5 },
    { name: 'Priya Patel', role: 'Freelance Marketer', text: 'As a solo freelancer, Trivro AI gives me the power of an entire agency. I can take on more clients and deliver better results.', rating: 5 },
    { name: 'Amit Kumar', role: 'E-commerce Founder', text: 'The ROI is incredible. We saved over 60% on our marketing costs while actually improving our ad performance and funnel conversions.', rating: 5 },
    { name: 'Sneha Reddy', role: 'Real Estate Professional', text: 'The AI Real Estate tool alone is worth the investment. It generates property descriptions, ads, and lead funnels that actually convert.', rating: 5 },
    { name: 'Vikram Singh', role: 'Course Creator', text: 'From landing pages to email sequences to blog content - everything I need is in one place. The AI quality is outstanding.', rating: 5 },
    { name: 'Anjali Mehta', role: 'Startup Founder', text: 'Started my agency with zero budget. Trivro AI made it possible to compete with established players from day one.', rating: 5 }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
            Trusted by Founders & Agencies
          </h2>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://share.google/kNtJnol031aYnjJJE" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition text-white font-semibold">
              Google Reviews
            </a>
            <a href="https://www.trustpilot.com/review/trivro.in" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition text-white font-semibold">
              Trustpilot Reviews
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#00D4FF]/50 transition">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-[#00FFA3] text-[#00FFA3]" />
                ))}
              </div>
              <p className="text-white/80 mb-4 italic">"{t.text}"</p>
              <div>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-white/60 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
