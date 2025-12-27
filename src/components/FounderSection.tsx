import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function FounderSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
            Meet the Founder
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] rounded-3xl blur-2xl opacity-30"></div>
              <img
                src="https://d64gsuwffb70l.cloudfront.net/6929245d5cbaf46091e25752_1764304014334_7192bde9.png"
                alt="Akanksha Raj Trivedi"
                title="Akanksha Raj Trivedi - Founder of Trivro AI"
                className="relative rounded-3xl w-full shadow-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Akanksha Raj Trivedi</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Founder of Trivro AI, India's Best AI Marketing Tools Ecosystem. With a vision to democratize AI-powered marketing, Akanksha has built a platform that empowers founders, freelancers, and agencies to scale with confidence using cutting-edge AI technology.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                Through Trivro AI, she's helping businesses save 50-70% on marketing costs while achieving 3X faster launches and superior results.
              </p>

              <div className="flex space-x-4">
                <a href="https://www.instagram.com/trivro_ai" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaInstagram className="w-6 h-6 text-white" />
                </a>
                <a href="https://www.facebook.com/share/17RWrP5arP/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1877F2] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaFacebook className="w-6 h-6 text-white" />
                </a>
                <a href="https://www.linkedin.com/company/trivro-ai/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0A66C2] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
