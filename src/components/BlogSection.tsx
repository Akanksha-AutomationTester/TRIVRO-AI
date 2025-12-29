import { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import BlogManagementModal from '@/components/BlogManagementModal';

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [showManagementModal, setShowManagementModal] = useState(false);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [externalLinks, setExternalLinks] = useState<any[]>([]);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const internalResources = [
    {
      title: 'How AI is Revolutionizing Digital Marketing in 2024',
      excerpt: 'Discover how artificial intelligence is transforming the way businesses approach marketing, from ad creation to customer engagement.',
      content: `Artificial intelligence is no longer a futuristic concept; it's a present-day powerhouse driving the most successful marketing campaigns. In 2024, AI is revolutionizing digital marketing through:
      
      Predictive Analytics: Anticipating customer behavior before they even make a move. By analyzing trillions of data points in real-time, AI engines can predict churn, purchase intent, and even the best time of day to send a notification.

      Automated Content Creation: Tools like Trivro AI allow brands to generate high-quality ad copy, images, and videos in seconds. This isn't just about speed—it's about "creative diversification." AI allows you to test 50 different versions of a creative to see which one stick with your audience.

      Hyper-Personalization: delivering the right message to the right person at the exact right moment. Personalization has moved beyond "Hi [First Name]." It's now about dynamic content blocks that change based on the user's current weather, location, or recent browsing history.

      Businesses that fail to adopt AI-driven strategies risk falling behind in an increasingly competitive landscape. Leveraging AI doesn't just save time; it provides insights that human teams could never uncover alone. The key is to view AI not as a replacement for human creativity, but as an exponential multiplier of it.`,
      image: 'https://d64gsuwffb70l.cloudfront.net/692924af1d5f99a872fdbc9c_1764304177722_f38f6bb4.webp',
      author: 'Akanksha Raj Trivedi',
      date: 'Nov 25, 2024',
      category: 'AI Marketing'
    },
    {
      title: 'Complete Guide to Building High-Converting Sales Funnels',
      excerpt: 'Learn the step-by-step process of creating sales funnels that convert visitors into customers using AI-powered tools.',
      content: `A sales funnel is the backbone of any online business. But building one that actually converts is both an art and a science. 
      
      The modern funnel consists of four key stages:
      - Awareness: Capturing attention through scroll-stopping ads.
      - Interest: Engaging prospects with valuable content and benefits.
      - Decision: Presenting a compelling offer with irresistible hooks.
      - Action: Leading the customer to a smooth checkout or sign-up.
      
      Using Funnel Genie AI, you can automate these steps, ensuring consistent branding and optimized messaging throughout the entire customer journey.`,
      image: 'https://d64gsuwffb70l.cloudfront.net/692924af1d5f99a872fdbc9c_1764304179662_12c02cb3.webp',
      author: 'Trivro AI Team',
      date: 'Nov 22, 2024',
      category: 'Funnels'
    },
    {
      title: 'AEO vs SEO: Why Answer Engine Optimization is the Future',
      excerpt: 'Understanding the shift from traditional SEO to AEO and how to optimize your content for AI-powered search engines.',
      content: `Search engines are evolving into "Answer Engines." With the rise of LLMs like ChatGPT and Claude, users are increasingly looking for direct answers rather than a list of links.
      
      AEO (Answer Engine Optimization) focuses on:
      - Content Accuracy: Ensuring your data is factual and easily parsed by AI.
      - Semantic Structure: Using proper tagging and clear, direct language.
      - Authority: Establishing your brand as the definitive source of information.
      
      In this guide, we explore how Trivro's AEO tools help you stay ahead of the curve by optimizing your blogs and website content for the next generation of search.`,
      image: 'https://d64gsuwffb70l.cloudfront.net/692924af1d5f99a872fdbc9c_1764304181973_24b0ed2c.webp',
      author: 'Akanksha Raj Trivedi',
      date: 'Nov 20, 2024',
      category: 'SEO & AEO'
    },
    {
      title: 'The Future of AI in Content Creation',
      excerpt: 'Explore how AI tools are reshaping content creation workflows and what it means for creators in the coming years.',
      content: `The barrier to entry for high-quality content creation has never been lower. AI tools are democratizing the ability to produce cinematic videos, professional podcasts, and deep-dive articles.
      
      For creators, this means:
      - Rapid Prototyping: Testing 10 different hooks or themes in the time it used to take for one.
      - Infinite Variations: Tailoring content for different platforms (TikTok, LinkedIn, Instagram) effortlessly.
      - Focus on Strategy: Shifting energy from "doing" the work to "directing" the AI.
      
      As we move into 2025, the "Creator-CEO" model will become standard. AI will handle the editing, the transcription, and the basic distribution, while the human creator focuses on the narrative arc and the community connection.

      Trivro AI is built to be the companion every creator needs to scale their output without sacrificing their unique voice. Our vision is a world where every entrepreneur has a full-scale media agency living inside their pocket.`,
      image: 'https://d64gsuwffb70l.cloudfront.net/692924af1d5f99a872fdbc9c_1764304177722_f38f6bb4.webp',
      author: 'Trivro AI Team',
      date: 'Nov 18, 2024',
      category: 'AI Content'
    },
    {
      title: 'Maximizing Ad ROI with Creative Testing',
      excerpt: 'How to use AI to test thousands of creative variations and find your next winning ad campaign.',
      content: `Most advertisers fail because they fall in love with a single creative. In the age of algorithmic bidding, your creative is your targeting.
      
      The formula for a winning creative strategy in 2024:
      1. Volume: Launching 5-10 new creatives every week.
      2. Diversity: Testing different hooks (visual, text, emotional).
      3. Data-Driven Decisions: Killing losers early and scaling winners exponentially.

      Trivro's Meta Ads AI allows you to instantly generate these variations, taking the guesswork out of creative production. Instead of asking "I wonder if this will work?", you can say "I know which of these 20 variations will win because the AI helped me engineer the curiosity gap."`,
      image: 'https://d64gsuwffb70l.cloudfront.net/692924af1d5f99a872fdbc9c_1764304179662_12c02cb3.webp',
      author: 'Akanksha Raj Trivedi',
      date: 'Nov 15, 2024',
      category: 'Paid Ads'
    }
  ];

  // Load blogs and external links from localStorage on component mount
  useEffect(() => {
    const savedBlogs = localStorage.getItem('trivro_blogs');
    const savedLinks = localStorage.getItem('trivro_external_links');
    
    if (savedBlogs) {
      try {
        const parsedBlogs = JSON.parse(savedBlogs);
        const allBlogs = parsedBlogs.map((b: any) => ({ ...b, id: b.id || Date.now().toString() }));
        setBlogs([...internalResources, ...allBlogs]);
      } catch (error) {
        console.error('Error loading blogs from localStorage:', error);
        setBlogs(internalResources.map((b: any) => ({ ...b, id: b.id || Date.now().toString() })));
      }
    } else {
      setBlogs(internalResources.map((b: any) => ({ ...b, id: b.id || Date.now().toString() })));
    }

    if (savedLinks) {
      try {
        const parsedLinks = JSON.parse(savedLinks);
        const allLinks = parsedLinks.map((l: any) => ({ ...l, id: l.id || Date.now().toString() }));
        setExternalLinks([...externalResources, ...allLinks]);
      } catch (error) {
        console.error('Error loading external links from localStorage:', error);
        setExternalLinks(externalResources.map((l: any) => ({ ...l, id: l.id || Date.now().toString() })));
      }
    } else {
      setExternalLinks(externalResources.map((l: any) => ({ ...l, id: l.id || Date.now().toString() })));
    }
  }, []);

  const handleUpdateBlogs = (updatedBlogs: any[]) => {
    // Filter out the default blogs and save only custom ones
    const customBlogs = updatedBlogs.filter(
      b => !internalResources.find(ir => ir.title === b.title)
    );
    localStorage.setItem('trivro_blogs', JSON.stringify(customBlogs));
    setBlogs(updatedBlogs);
  };

  const handleUpdateExternalLinks = (updatedLinks: any[]) => {
    // Filter out the default links and save only custom ones
    const customLinks = updatedLinks.filter(
      l => !externalResources.find(er => er.title === l.title)
    );
    localStorage.setItem('trivro_external_links', JSON.stringify(customLinks));
    setExternalLinks(updatedLinks);
  };

  const externalResources = [
    {
      title: 'OpenAI ChatGPT',
      excerpt: 'Advanced AI language model for content creation and strategy.',
      url: 'https://chat.openai.com',
      category: 'AI Tool'
    },
    {
      title: 'Google Trends',
      excerpt: 'Analyze popularity of search queries across various regions and languages.',
      url: 'https://trends.google.com',
      category: 'Market Research'
    },
    {
      title: 'Meta Business Suite',
      excerpt: 'Manage all your marketing activities on Facebook and Instagram.',
      url: 'https://business.facebook.com',
      category: 'Social Media'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-[#0A0E27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
              Resources & Insights
            </h2>
            <p className="text-xl text-white/70">Connect with internal guides and external tools</p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Hidden Star Button - Opens Blog Management */}
            <button
              onClick={() => setShowManagementModal(true)}
              title="Manage blogs and links"
              className="p-3 rounded-full hover:bg-white/10 transition text-2xl opacity-40 hover:opacity-100"
            >
              ⭐
            </button>
          </div>
        </div>

        {/* Internal Links Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent flex-grow opacity-50"></div>
            <h3 className="text-2xl font-bold text-white px-4 border border-[#00D4FF]/30 rounded-full py-1 bg-[#00D4FF]/10 backdrop-blur-sm">Internal Links</h3>
            <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent flex-grow opacity-50"></div>
          </div>

          {blogs.length > 0 ? (
            <>
              {/* Blog Slider */}
              <div className="mb-8">
                <div className="relative">
                  {/* Slider Container */}
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateX(-${currentBlogIndex * 100}%)`,
                      }}
                    >
                      {blogs.map((blog, i) => (
                        <div key={i} className="w-full flex-shrink-0">
                          <div className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-[#00D4FF]/50 transition h-full flex flex-col">
                            <div className="relative h-64 md:h-80 overflow-hidden shrink-0">
                              <img src={blog.image} alt={blog.title} title={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                              <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] text-sm font-semibold rounded-full">
                                {blog.category}
                              </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition line-clamp-2">{blog.title}</h3>
                              <p className="text-white/70 mb-4 line-clamp-3 flex-grow">{blog.excerpt}</p>
                              <div className="flex items-center justify-between text-sm text-white/60 mb-4 mt-auto">
                                <div className="flex items-center space-x-2">
                                  <User className="w-4 h-4" />
                                  <span>{blog.author}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>{blog.date}</span>
                                </div>
                              </div>
                              <button
                                onClick={() => setSelectedBlog(blog)}
                                className="flex items-center space-x-2 text-[#00D4FF] font-semibold group-hover:space-x-3 transition-all"
                              >
                                <span>Read More</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  {blogs.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentBlogIndex(Math.max(0, currentBlogIndex - 1))}
                        disabled={currentBlogIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition z-10"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => setCurrentBlogIndex(Math.min(blogs.length - 1, currentBlogIndex + 1))}
                        disabled={currentBlogIndex === blogs.length - 1}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition z-10"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>

                {/* Slider Indicators */}
                {blogs.length > 1 && (
                  <div className="flex justify-center items-center space-x-2 mt-6">
                    {blogs.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentBlogIndex(idx)}
                        className={`h-2 rounded-full transition ${
                          idx === currentBlogIndex
                            ? 'bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] w-8'
                            : 'bg-white/20 w-2 hover:bg-white/40'
                        }`}
                      />
                    ))}
                    <span className="text-white/60 text-sm ml-4">
                      {currentBlogIndex + 1} / {blogs.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Grid View for Multiple Items */}
              {blogs.length > 1 && (
                <>
                  <div className="flex items-center space-x-4 mb-8 mt-16">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent flex-grow opacity-50"></div>
                    <h3 className="text-lg font-bold text-white px-4 border border-[#00D4FF]/30 rounded-full py-1 bg-[#00D4FF]/10 backdrop-blur-sm">All Blogs</h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent flex-grow opacity-50"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, i) => (
                      <div key={i} className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-[#00D4FF]/50 transition h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden shrink-0">
                          <img src={blog.image} alt={blog.title} title={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] text-sm font-semibold rounded-full">
                            {blog.category}
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition line-clamp-2">{blog.title}</h3>
                          <p className="text-white/70 mb-4 line-clamp-3 flex-grow">{blog.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-white/60 mb-4 mt-auto">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4" />
                              <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{blog.date}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedBlog(blog)}
                            className="flex items-center space-x-2 text-[#00D4FF] font-semibold group-hover:space-x-3 transition-all"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-white/60">
              No blogs available
            </div>
          )}
        </div>

        {/* External Links Section */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#00FFA3] to-transparent flex-grow opacity-50"></div>
            <h3 className="text-2xl font-bold text-white px-4 border border-[#00FFA3]/30 rounded-full py-1 bg-[#00FFA3]/10 backdrop-blur-sm">External Links</h3>
            <div className="h-px bg-gradient-to-r from-transparent via-[#00FFA3] to-transparent flex-grow opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {externalResources.map((resource, i) => (
              <a href={resource.url} target="_blank" rel="noopener noreferrer" key={i} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#00FFA3]/50 transition h-full flex flex-col hover:bg-white/[0.07]">
                <div className="flex items-start justify-between mb-4">
                  <div className="px-3 py-1 bg-[#00FFA3]/20 text-[#00FFA3] text-sm font-semibold rounded-full">
                    {resource.category}
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-[#00FFA3] transition" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FFA3] transition">{resource.title}</h3>
                <p className="text-white/70 mb-4 flex-grow">{resource.excerpt}</p>
                <div className="flex items-center text-[#00FFA3] text-sm font-semibold group-hover:underline">
                  Visit Resource
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
        <DialogContent className="max-w-5xl w-[90vw] bg-[#0A0E27] border-white/10 text-white p-0 overflow-hidden sm:rounded-3xl max-h-[90vh] flex flex-col">
          {selectedBlog && (
            <div className="flex-1 overflow-y-auto bg-[#0A0E27] custom-scrollbar min-h-0">
              <div className="relative h-[300px] sm:h-[400px]">
                <img src={selectedBlog.image} alt={selectedBlog.title} title={selectedBlog.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27]/40 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] text-sm font-bold rounded-full shadow-lg shadow-[#00D4FF]/20">
                  {selectedBlog.category}
                </div>
              </div>
              <div className="p-8 sm:p-12">
                <DialogTitle className="text-3xl sm:text-6xl font-bold mb-10 text-white leading-[1.1] tracking-tight">
                  {selectedBlog.title}
                </DialogTitle>
                <div className="text-xl text-white/70 leading-relaxed whitespace-pre-wrap space-y-6">
                  {selectedBlog.content}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <BlogManagementModal
        isOpen={showManagementModal}
        onClose={() => setShowManagementModal(false)}
        blogs={blogs}
        externalLinks={externalLinks}
        onUpdateBlogs={handleUpdateBlogs}
        onUpdateExternalLinks={handleUpdateExternalLinks}
      />
    </section>
  );
}
