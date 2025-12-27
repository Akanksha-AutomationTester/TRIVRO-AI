export default function YouTubeSection() {
  return (
    <section className="py-20 bg-[#0A0E27]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
            Watch Trivro AI on YouTube
          </h2>
          <p className="text-xl text-white/70">See how our AI tools transform your marketing</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#00D4FF]/20 border border-white/10 bg-white/5 backdrop-blur-lg p-4">
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
      </div>
    </section>
  );
}
