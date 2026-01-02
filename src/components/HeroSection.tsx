import { useState } from 'react';
import { Link } from 'react-router-dom';
import metaAdsBg from '@/assets/meta-ads-bg.jpg';
import funnelGenieAiBg from '@/assets/funnel-genie-ai-bg.jpg';
import aiEmailMarketingBg from '@/assets/ai-email-marketing-bg.jpg';
import LatestUpdatesSlider from './LatestUpdatesSlider';

export default function HeroSection() {

  const [showUpdates, setShowUpdates] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0E27] pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 via-[#8B5CF6]/10 to-[#00FFA3]/20"></div>
      <div className="absolute inset-0" style={{ backgroundImage: `url(https://d64gsuwffb70l.cloudfront.net/692924af1d5f99a872fdbc9c_1764304165038_e648f933.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white speakable-text">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FFA3] bg-clip-text text-transparent">India's Best AI Marketing Tools Ecosystem</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto speakable-text">
            Build Meta Ads, Funnels, Landing Pages, Emails, Blogs & SEO Content — in Minutes. Powered by 51+ AI Tools.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://app.trivro.in" className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#00D4FF]/50 transition transform hover:scale-105">
              Sign Up
            </a>
            <a href="/tools" className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-bold rounded-lg text-lg border border-white/20 hover:bg-white/20 transition">
              Explore Tools
            </a>
            <a href="/pricing" className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-bold rounded-lg text-lg border border-white/20 hover:bg-white/20 transition">
              View Pricing
            </a>
          </div>
        </div>


          <div className="flex justify-center py-10">
            <button
              onClick={() => setShowUpdates(!showUpdates)}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#8B5CF6] via-[#00D4FF] to-[#00FFA3] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-none"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00FFA3] rounded-full animate-ping"></span>
                {showUpdates ? 'Hide Updates' : "What's New - View Latest Updates"}
              </span>
            </button>
          </div>

        {showUpdates && (
          <div className="animate-in fade-in slide-in-from-top-10 duration-500 mb-20">
            <LatestUpdatesSlider />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { img: metaAdsBg, title: 'Meta Ads AI' },
            { img: funnelGenieAiBg, title: 'Funnel Genie AI' },
            { img: aiEmailMarketingBg, title: 'Email Marketing AI' }
          ].map((tool, i) => (
            <div key={i} className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#00D4FF]/50 transition transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00D4FF]/30">
              <img src={tool.img} alt={tool.title} title={tool.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white">{tool.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

