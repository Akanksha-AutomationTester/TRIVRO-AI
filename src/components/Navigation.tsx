import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E27]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src="https://d64gsuwffb70l.cloudfront.net/6929245d5cbaf46091e25752_1764304011186_9d921df5.png" alt="Trivro AI" title="Trivro AI Logo" className="h-12 w-12" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">Trivro AI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/80 hover:text-[#00D4FF] transition">Home</Link>
            <Link to="/tools" className="text-white/80 hover:text-[#00D4FF] transition">Tools</Link>
            <Link to="/pricing" className="text-white/80 hover:text-[#00D4FF] transition">Pricing</Link>
            <Link to="/blog" className="text-white/80 hover:text-[#00D4FF] transition">Blog</Link>
            <Link to="/about" className="text-white/80 hover:text-[#00D4FF] transition">About</Link>
            <a href="https://app.trivro.in" className="px-6 py-2.5 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D4FF]/50 transition">Sign Up</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0A0E27] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-white/80 hover:text-[#00D4FF]">Home</Link>
            <Link to="/tools" onClick={() => setIsOpen(false)} className="block text-white/80 hover:text-[#00D4FF]">Tools</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="block text-white/80 hover:text-[#00D4FF]">Pricing</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-white/80 hover:text-[#00D4FF]">Blog</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-white/80 hover:text-[#00D4FF]">About</Link>
            <a href="https://app.trivro.in" className="block px-6 py-2.5 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-semibold rounded-lg text-center">Sign Up</a>
          </div>
        </div>
      )}
    </nav>
  );
}
