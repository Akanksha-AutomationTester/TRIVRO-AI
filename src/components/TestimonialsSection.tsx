import { Star } from 'lucide-react';

export default function TestimonialsSection() {
    const testimonials = [
      { 
        name: 'Ankit Kumar', 
        role: 'Business Owner', 
        text: 'Trivro AI is a powerful all-in-one marketing platform. From funnel creation to WhatsApp automation and CRM, everything works smoothly. What I liked most is that it’s beginner-friendly but still powerful enough for scaling campaigns. If you want predictable growth without hiring a big team, Trivro AI is worth it.', 
        rating: 5 
      },
      { 
        name: 'Jiya Sharma', 
        role: 'Marketing Professional', 
        text: 'Trivro AI is a game-changer for anyone looking to scale their marketing. Their ecosystem of 51+ integrated tools makes it incredibly easy to handle everything from Meta Ads automation to professional copywriting. I especially appreciate the \'Creative Studio\' tools like Logo Genie and Scroll Stopping Ads AI which deliver high-quality assets in seconds. If you\'re looking for a professional, results-driven AI marketing suite in India, this is it!', 
        rating: 5 
      },
      { 
        name: 'Pragnesh Patel', 
        role: 'Local Guide', 
        text: 'I got Early Bird Access to Trivro AI, and it has been an amazing experience! The platform offers 51+ powerful tools that are simple to use and give excellent results. Even as an early-access user, I found the system fast, reliable, and extremely user-friendly. Trivro AI has helped me streamline my work, save time, and improve the quality of my output across multiple areas. The team is very supportive and quick to respond to feedback. Overall, a fantastic all-in-one AI platform. Highly recommended!', 
        rating: 5 
      },
      { 
        name: 'Shivam Maheswari', 
        role: 'Professional', 
        text: 'Excellent service by Trivro AI! The platform’s 51+ AI tools are extremely helpful, user-friendly, and deliver amazing results every time. The interface is smooth, fast, and very reliable for day-to-day business tasks. Trivro AI has made my workflow more efficient and helped me achieve better results in less time. Their support team is also very professional and quick to respond. Highly recommended for startups, creators, and professionals looking for an all-in-one AI solution!', 
        rating: 5 
      },
      { 
        name: 'Ayushi Bhindwale', 
        role: 'Digital Marketer', 
        text: 'Trivro AI actually made things much easier for me. I could create ads quickly, set up a proper funnel, and manage everything in one place without any technical issues.', 
        rating: 5 
      },
      { 
        name: 'Ankita Rajawat', 
        role: 'Entrepreneur', 
        text: 'Working with Trivro AI has completely changed the way we do marketing. Before this, we were spending a lot on agencies and ads without clear results. Everything felt scattered and confusing. After using Trivro AI, we finally got a proper system in place. The AI tools helped us create high-converting funnel ads, landing pages, and follow-up flows without needing a big team or technical skills. The results were visible within a short time, especially in lead quality and response rate. Now we feel confident running our own in-house marketing instead of depending on agencies.', 
        rating: 5 
      }
    ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
            Trusted by Founders & Agencies
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            See why thousands of businesses choose our <a href="/tools" className="text-[#00D4FF] hover:text-[#00FFA3] transition">AI marketing platform</a> for their growth journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="https://share.google/kNtJnol031aYnjJJE" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 hover:border-[#00D4FF]/50 transition text-white font-semibold">
              Google Reviews
            </a>
            <a href="https://www.trustpilot.com/review/trivro.in" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 hover:border-[#00D4FF]/50 transition text-white font-semibold">
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
