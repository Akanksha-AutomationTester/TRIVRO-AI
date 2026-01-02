import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A0E27] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 inline-flex">
              <img src="https://d64gsuwffb70l.cloudfront.net/6929245d5cbaf46091e25752_1764304011186_9d921df5.png" alt="Trivro AI Logo" title="Trivro AI Logo" className="h-12 w-12" loading="lazy" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">Trivro AI</span>
            </Link>
            <p className="text-white/70 mb-2 text-lg font-medium">India's Best AI Marketing Tools Ecosystem.</p>
            <p className="text-white/50 mb-8">Build your in-house marketing system today.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/trivro_ai" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.facebook.com/share/17RWrP5arP/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1877F2] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg" aria-label="Facebook">
                <FaFacebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.linkedin.com/company/trivro-ai/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0A66C2] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.youtube.com/watch?v=BngPWSxzF-w" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#FF0000] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg" aria-label="YouTube">
                <FaYoutube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-white/50">
              <li><Link to="/tools" className="hover:text-[#00D4FF] transition">51+ AI Tools</Link></li>
              <li><Link to="/pricing" className="hover:text-[#00D4FF] transition">Pricing Plans</Link></li>
              <li><Link to="/blog" className="hover:text-[#00D4FF] transition">Expert Blogs</Link></li>
              <li><a href="https://app.trivro.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition">Sign Up</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-white/50">
              <li><Link to="/about" className="hover:text-[#00D4FF] transition">About Trivro</Link></li>
              <li><Link to="/about" className="hover:text-[#00D4FF] transition">Meet the Founder</Link></li>
              <li><Link to="/" className="hover:text-[#00D4FF] transition">Why Choose Us</Link></li>
              <li><a href="mailto:support@trivro.in" className="hover:text-[#00D4FF] transition">Contact Support</a></li>
            </ul>
          </div>

          <div>
              <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-4 text-white/50">
                <li><Link to="/blog" className="hover:text-[#00D4FF] transition">Blog & Guides</Link></li>
                <li><a href="https://app.trivro.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition">Login</a></li>
                <li><a href="mailto:support@trivro.in" className="hover:text-[#00D4FF] transition flex items-center gap-2"><Mail className="w-4 h-4" /> Email Support</a></li>
                <li><a href="https://www.youtube.com/watch?v=BngPWSxzF-w" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition">Video Tutorial</a></li>
              </ul>
            </div>

<div>
              <h4 className="text-white font-bold mb-6 text-lg">Learn More</h4>
              <ul className="space-y-4 text-white/50">
                <li><a href="https://developers.facebook.com/docs/marketing-apis/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition">Meta Marketing API Docs</a></li>
                <li><a href="https://blog.hubspot.com/marketing" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition">HubSpot Marketing Blog</a></li>
                <li><a href="https://neilpatel.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition">Neil Patel SEO Insights</a></li>
                <li><a href="https://moz.com/beginners-guide-to-seo" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition">Moz SEO Guide</a></li>
                <li><a href="https://www.searchenginejournal.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition">Search Engine Journal</a></li>
                <li><a href="https://contentmarketinginstitute.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition">Content Marketing Institute</a></li>
              </ul>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>© 2025 Trivro AI. All rights reserved. Powered by 51+ AI Engines. Trusted by Founders & Agencies. Built for Speed & Scale.</p>
        </div>
      </div>
    </footer>
  );
}
