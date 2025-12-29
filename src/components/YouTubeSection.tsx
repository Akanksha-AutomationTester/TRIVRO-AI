export default function YouTubeSection() {
  const handleRegister = () => {
    window.open('https://calendly.com/cal_live_1fc107e5a1c67eb226ecd2448b29f636', '_blank');
  };

  return (
    <section className="py-20 bg-[#0A0E27]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
            Watch Trivro AI on YouTube
          </h2>
          <p className="text-xl text-white/70">See how our AI tools transform your marketing</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#00D4FF]/20 border border-white/10 bg-white/5 backdrop-blur-lg p-4 mb-12">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/jVedq_-rWpI"
              title="Trivro AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] animate-pulse mb-6">
            <div className="bg-[#0A0E27] px-6 py-2 rounded-xl">
              <span className="text-white font-semibold">Limited Slots Available!</span>
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Book Your <span className="text-[#00D4FF]">1:1 Strategy Session</span>
          </h3>
          <p className="text-xl text-white/70 mb-8">
            Worth <span className="line-through text-red-500">₹299</span> <span className="text-[#00FFA3] font-bold">FREE</span> for a limited time.
          </p>
          <a
            onClick={handleRegister}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-black rounded-2xl text-xl hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition transform hover:scale-105 cursor-pointer"
          >
            REGISTER NOW
          </a>
        </div>
      </div>
    </section>
  );
}
