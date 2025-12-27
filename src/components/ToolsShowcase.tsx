import { toolCategories } from '@/data/toolsData';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, Sparkles, CheckCircle2, Search, Filter } from 'lucide-react';
import { marketingTools, contentTools, businessTools } from '@/data/toolsDataPart2';
import trivroCloudBg from '@/assets/trivro-cloud-bg.jpg';
import crmExpressBg from '@/assets/crm-express-bg.jpg';
import metaAdsBg from '@/assets/meta-ads-bg.jpg';
import aiEbookCoverBg from '@/assets/ai-ebook-cover-bg.jpg';
import aiEbookWriterBg from '@/assets/ai-ebook-writer-bg.jpg';
import audiobookMakerBg from '@/assets/audiobook-maker-bg.jpg';
import advanceFunnelAiBg from '@/assets/advance-funnel-ai-bg.jpg';
import aiVoiceBg from '@/assets/ai-voice-bg.jpg';
import benefitGenieAiBg from '@/assets/benefit-genie-ai-bg.jpg';
import aiSeoOptimizerBg from '@/assets/ai-seo-optimizer-bg.jpg';
import hookGenieAiBg from '@/assets/hook-genie-ai-bg.jpg';
import logoGenieAiBg from '@/assets/logo-genie-ai-bg.jpg';
import imageProAiBg from '@/assets/image-pro-ai-bg.jpg';
import aiAvatarBg from '@/assets/ai-avatar-bg.jpg';
import videoMasterAiBg from '@/assets/video-master-ai-bg.jpg';
import trivroCommunityBg from '@/assets/trivro-community-bg.jpg';
import uGptBg from '@/assets/u-gpt-bg.png';
import funnelGenieAiBg from '@/assets/funnel-genie-ai-bg.jpg';
import aiChatbotBg from '@/assets/ai-chatbot-bg.png';
import modelMagicAiBg from '@/assets/model-magic-ai-bg.png';
import knowledgeBaseBg from '@/assets/knowledge-base-bg.png';
import scrollStoppingBg from '@/assets/scroll-stopping-ads-bg.png';
import leadImageGeneratorBg from '@/assets/lead-image-generator-bg.png';
import motionGraphicsProBg from '@/assets/motion-graphics-pro-bg.png';
import magicPostBg from '@/assets/magic-post-bg.jpg';
import pixeloracleBg from '@/assets/pixeloracle-bg.jpg';
import authorAcademyBg from '@/assets/author-academy-bg.png';
import aiBlogsBg from '@/assets/ai-blogs-bg.png';
import aiFormsBg from '@/assets/ai-forms-bg.png';
import domainManagerBg from '@/assets/domain-manager-bg.png';
import taskProBg from '@/assets/task-pro-bg.png';
import aiBusinessCoachBg from '@/assets/ai-business-coach-bg.jpg';
import aiRealEstateBg from '@/assets/ai-real-estate-bg.png';
import ebookOutlineBg from '@/assets/ebook-outline-bg.png';
import humanizerBg from '@/assets/humanizer-bg.png';
import aiEmailMarketingBg from '@/assets/ai-email-marketing-bg.jpg';
import ecomGenieAiBg from '@/assets/ecom-genie-ai-bg.jpg';
import objectionCrushingBg from '@/assets/objection-crushing-faqs-bg.png';
import bonusGenieBg from '@/assets/bonus-genie-bg.png';
import aiDomainBg from '@/assets/ai-domain-bg.png';
import brainmailBg from '@/assets/brainmail-bg.png';
import notesBg from '@/assets/notes-bg.jpg';

const moreDetailedInfo: { [key: string]: { features: string[], useCase: string } } = {
  'Meta Ads AI': {
    features: ['Instant Ad Copy Generation', 'Visual Creative Suggestions', 'Split Testing Hooks', 'Direct Meta Integration'],
    useCase: 'Best for agency owners and e-commerce brands looking to scale their Facebook & Instagram ad spend efficiently.'
  },
  'Funnel Genie AI': {
    features: ['Drag-and-Drop Builder', 'High-Converting Templates', 'AI Copy Synthesis', 'Mobile Optimization'],
    useCase: 'Perfect for entrepreneurs starting from scratch who need a professional sales funnel without hiring a designer.'
  },
  'AI Email Marketing Generator': {
    features: ['Sequence Automation', 'Nurture Flow Logic', 'Personalization Tokens', 'Subject Line Optimization'],
    useCase: 'Ideal for building long-term relationships with subscribers through automated, human-like email conversations.'
  },
  'AI Blogs': {
    features: ['SEO Keyword Optimization', 'Long-form Structure', 'Semantic Analysis', 'One-click Publishing'],
    useCase: 'Designed for content marketers who need to produce 10x more high-quality blogs for search engine ranking.'
  },
  'Logo Genie AI': {
    features: ['Vector SVG Output', 'Style Presets (Minimal, Modern, Tech)', 'Color Palette Suggestions', 'Instantly Resizable'],
    useCase: 'For new startups and personal brands needing a professional identity in under 30 seconds.'
  },
  'AI Avatar': {
    features: ['4K Video Rendering', 'Lip-sync from Audio/Text', 'Global Accents & Languages', 'Custom Background Selection'],
    useCase: 'Scale your TikTok, Reels, and YouTube shorts without ever stepping in front of a camera.'
  },
  'CRM Express': {
    features: ['Lead Scoring', 'Automated Step-Tracking', 'Email Syncing', 'Team Collaboration Panels'],
    useCase: 'Manage your entire sales pipeline and client relationships from a single, AI-powered hub.'
  },
  'Trivro Cloud (5TB)': {
    features: ['End-to-End Encryption', 'High-Speed File Transfer', 'Cross-Device Syncing', 'Collaborative Folders'],
    useCase: 'Securely store and share all your marketing assets, videos, and raw files in a unified AI ecosystem.'
  },
  'AI Ebook Cover Designer': {
    features: ['Genre-Specific Layouts', 'Professional Typography', '3D Mockup Generator', 'Print-Ready Exports'],
    useCase: 'Create bestseller-worthy covers for your Kindle or print-on-demand books in seconds.'
  },
  'AI Ebook Writer': {
    features: ['Chapter Outline Generation', 'Research Integration', 'Tone Consistency Checker', 'Export to PDF/EPUB'],
    useCase: 'Write and publish your lead magnets or full-length non-fiction books without the writers block.'
  },
  'Audiobook Maker': {
    features: ['Natural Voice Synthesis', 'Multi-Character Narration', 'Background Soundscapes', 'Chapter Sequencing'],
    useCase: 'Convert your ebooks and articles into high-quality audio recordings for Spotify or Audible.'
  },
  'Advance Funnel AI': {
    features: ['A/B Testing Engine', 'Behavioral Triggers', 'Upsell/Downsell Logic', 'Heatmap Integration'],
    useCase: 'Optimizing existing traffic for maximum profit through intelligent, multi-step customer journeys.'
  },
  'AI Voice': {
    features: ['Human-Like Inflection', '60+ Languages Supported', 'Emotion Parameter Control', 'API Integration Ready'],
    useCase: 'Voiceover work for commercials, training videos, and social media content that sounds authentic.'
  },
  'Benefit Genie AI': {
    features: ['Feature-to-Benefit Mapping', 'Psychological Trigger Engine', 'Industry-Specific Presets', 'Competitor Comparison'],
    useCase: 'Transform dry technical features into highly emotional, benefit-driven sales copy.'
  },
  'AI SEO Optimizer': {
    features: ['Real-time Keyword Suggestions', 'Backlink Opportunity Finder', 'On-Page Content Audit', 'Competitor Gap Analysis'],
    useCase: 'Rank higher on Google by optimizing every piece of content for modern search algorithms.'
  },
  'Hook Genie AI': {
    features: ['Viral Hook Templates', 'Curiosity Gap Engineering', 'Pattern Interrupt Logic', 'Multi-Platform Variation'],
    useCase: 'Stop the scroll and get more clicks on your social media posts and paid advertisements.'
  },
  'Image Pro AI': {
    features: ['Photorealistic Rendering', 'Inpainting & Outpainting', 'Aspect Ratio Flexible', 'Text-to-Art Engine'],
    useCase: 'Generate stunning, professional photography and digital art without expensive gear or software.'
  },
  'Video Master AI': {
    features: ['Automatic Subtitling', 'AI Scene Transitions', 'Background Music Syncing', 'Template-Based Editing'],
    useCase: 'Edit and polish raw video footage into high-performance marketing content in minutes.'
  },
  'Trivro Community': {
    features: ['Private Networking Groups', 'Weekly Live Coaching', 'Shared Prompt Library', 'Leaderboard Rewards'],
    useCase: 'Connect with other AI entrepreneurs and grow your business with collective intelligence.'
  },
  'U-GPT': {
    features: ['Unlimited Prompt Execution', 'Latest LLM Models', 'Custom System Instructions', 'Chat History Search'],
    useCase: 'Your all-in-one personal AI assistant for research, coding, writing, and brainstorming.'
  },
  'AI Chatbot': {
    features: ['Live Training on Your Data', 'Multiple Website Support', 'Lead Capture Forms', 'Seamless Human Handoff'],
    useCase: '24/7 customer support and automated sales on your website without hiring more staff.'
  },
  'Model Magic AI': {
    features: ['Virtual Fashion Models', 'Pose & Expression Control', 'Garment Swapping', 'Studio-Grade Lighting'],
    useCase: 'Ecommerce brands looking to create professional product photography with virtual models.'
  },
  'Knowledge Base': {
    features: ['Automated FAQ Generation', 'Internal Search Engine', 'Rich Text Formatting', 'Analytics Dashboard'],
    useCase: 'Store all your company SOPs and customer help docs in an easily searchable, AI-powered wiki.'
  },
  'Scroll Stopping Ads AI': {
    features: ['High-Contrast Layouts', 'Emotional Visual Triggers', 'Proven Conversion Structures', 'Batch Variation Creator'],
    useCase: 'Specifically designed for direct-response marketing on platforms like Facebook, Instagram, and TikTok.'
  },
  'Lead Image Generator': {
    features: ['Headshot Generation', 'Professional Backdrop Selection', 'Clean-Up & Retouching', 'Dynamic Lighting'],
    useCase: 'Create professional avatars and lead magnets that establish authority and trust instantly.'
  },
  'Motion Graphics Pro': {
    features: ['Animated Typography', 'Logo Animation Presets', 'Transition Libraries', 'Lottie File Exports'],
    useCase: 'Add cinematic quality to your videos and websites with premium, AI-enhanced motion design.'
  },
  'Magic Post': {
    features: ['Social Media Scheduler', 'Platform-Specific Formatting', 'Caption Generation', 'Hashtag Optimization'],
    useCase: 'Manage and automate your entire social media presence across all major platforms.'
  },
  'PixelOracle': {
    features: ['Ad Performance Analytics', 'Budget Optimization Tips', 'Audience Segment Discovery', 'ROI Prediction'],
    useCase: 'Get deeper insights into your paid marketing efforts and know exactly where to spend next.'
  },
  'Author Academy': {
    features: ['Step-by-Step Publishing Course', 'AI Writing Workshops', 'Marketing Strategy Guides', 'Lifetime Content Updates'],
    useCase: 'The definitive school for turning your ideas into published books using modern AI tools.'
  },
  'AI Forms': {
    features: ['Conversational Survey Logic', 'AI-Powered Validation', 'Conditional Branching', 'Integration Hub'],
    useCase: 'Capture more leads with forms that feel like a conversation rather than a questionnaire.'
  },
  'Domain Manager': {
    features: ['Domain Suggestion Engine', 'Expiry Notifications', 'DNS Management Panel', 'Bulk Registration Tools'],
    useCase: 'Keep all your marketing sites and professional domains organized in one central location.'
  },
  'Task Pro': {
    features: ['AI Project Management', 'Automated Deadlines', 'Resource Allocation', 'Team Sentiment Analysis'],
    useCase: 'The smarter way to manage your team and projects, ensuring nothing falls through the cracks.'
  },
  'AI Business Coach': {
    features: ['Strategic Planning Roadmap', 'Financial Goal Tracking', 'Marketing Audit Engine', 'Mindset Coaching Prompts'],
    useCase: 'Get 24/7 strategic guidance and tactical advice to scale your business to the next level.'
  },
  'AI Real Estate': {
    features: ['Property Description Writer', 'Virtual Staging Tools', 'Local Market Analysis', 'Lead Nurture Flows'],
    useCase: 'Specifically for real estate agents who want to list properties faster and close more deals.'
  },
  'AI Bestseller Ebook Outline Maker': {
    features: ['Market Trend Analysis', 'Hook-Driven Structure', 'Chapter-by-Chapter Flow', 'Niche Explorer'],
    useCase: 'Reverse-engineer bestseller structures and plan your next book project for maximum success.'
  },
  'Humanizer': {
    features: ['Tone Modulation', 'Slang & Idiom Integration', 'AI Detector Bypass Logic', 'Readability Optimization'],
    useCase: 'Transform robotic AI text into warm, engaging content that connects with human readers.'
  },
  'Ecom Genie AI': {
    features: ['Product Description Generator', 'Competitor Price Watch', 'Upsell Recommender', 'Review Responder AI'],
    useCase: 'A complete suite of tools dedicated to scaling Shopify and Amazon e-commerce stores.'
  },
  'Objection Crushing FAQs': {
    features: ['Common Worry Predictor', 'Rebuttal Logic Engine', 'Confidence-Building Copy', 'Dynamic FAQ Blocks'],
    useCase: 'Anticipate and resolve your customers biggest doubts before they even ask them.'
  },
  'Bonus Genie AI': {
    features: ['Exclusive Offer Generator', 'Checklist & Guide Creator', 'Perceived Value Booster', 'Bundle Packaging'],
    useCase: 'Create irresistible bonuses that make your main product offer a no-brainer for buyers.'
  },
  'AI Domain': {
    features: ['Search via Keywords', 'Domain Extension Suggestion', 'Premium Domain Availability', 'Portfolio Tracker'],
    useCase: 'Find the perfect name for your next AI startup or marketing brand in seconds.'
  },
  'Brainmail': {
    features: ['Smart Email Drafts', 'Contextual Replies', 'Inbox Zero Prioritization', 'Meeting Setting Logic'],
    useCase: 'Spend less time on email and more time on high-impact work with an AI-powered inbox.'
  },
  'Notes': {
    features: ['Audio-to-Text Transcription', 'Bullet Point Summarization', 'Categorization Tags', 'Searchable Brain Storage'],
    useCase: 'Capture every idea and meeting insight, then let AI organize them for you.'
  }
};

export default function ToolsShowcase() {
  const [selectedTool, setSelectedTool] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const allCategories = [marketingTools, ...toolCategories, contentTools, businessTools];

  const categories = ['All', ...allCategories.map(cat => cat.title)];

  const filteredCategories = allCategories.map(category => ({
    ...category,
    tools: category.tools.filter(tool =>
      (activeCategory === 'All' || category.title === activeCategory) &&
      (tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.tools.length > 0);

  const backgroundImages: { [key: string]: string } = {
    'Trivro Cloud (5TB)': trivroCloudBg,
    'CRM Express': crmExpressBg,
    'Meta Ads AI': metaAdsBg,
    'AI Ebook Cover Designer': aiEbookCoverBg,
    'AI Ebook Writer': aiEbookWriterBg,
    'Audiobook Maker': audiobookMakerBg,
    'Advance Funnel AI': advanceFunnelAiBg,
    'AI Voice': aiVoiceBg,
    'Benefit Genie AI': benefitGenieAiBg,
    'AI SEO Optimizer': aiSeoOptimizerBg,
    'Hook Genie AI': hookGenieAiBg,
    'Logo Genie AI': logoGenieAiBg,
    'Image Pro AI': imageProAiBg,
    'AI Avatar': aiAvatarBg,
    'Video Master AI': videoMasterAiBg,
    'Trivro Community': trivroCommunityBg,
    'U-GPT': uGptBg,
    'Funnel Genie AI': funnelGenieAiBg,
    'AI Chatbot': aiChatbotBg,
    'Model Magic AI': modelMagicAiBg,
    'Knowledge Base': knowledgeBaseBg,
    'Scroll Stopping Ads AI': scrollStoppingBg,
    'Lead Image Generator': leadImageGeneratorBg,
    'Motion Graphics Pro': motionGraphicsProBg,
    'Magic Post': magicPostBg,
    'PixelOracle': pixeloracleBg,
    'Author Academy': authorAcademyBg,
    'AI Blogs': aiBlogsBg,
    'AI Forms': aiFormsBg,
    'Domain Manager': domainManagerBg,
    'Task Pro': taskProBg,
    'AI Business Coach': aiBusinessCoachBg,
    'AI Real Estate': aiRealEstateBg,
    'AI Bestseller Ebook Outline Maker': ebookOutlineBg,
    'Humanizer': humanizerBg,
    'AI Email Marketing Generator': aiEmailMarketingBg,
    'Ecom Genie AI': ecomGenieAiBg,
    'Objection Crushing FAQs': objectionCrushingBg,
    'Bonus Genie AI': bonusGenieBg,
    'AI Domain': aiDomainBg,
    'Brainmail': brainmailBg,
    'Notes': notesBg,
  };

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">Key Features & Tools</span>
          </h2>
          <p className="text-xl text-white/70 mb-10">Everything you need to scale your marketing</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#00D4FF] transition" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#00D4FF]/50 transition h-14"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-full border transition whitespace-nowrap ${activeCategory === cat
                    ? 'bg-[#00D4FF] border-[#00D4FF] text-[#0A0E27] font-bold shadow-lg shadow-[#00D4FF]/30'
                    : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No tools found</h3>
            <p className="text-white/60">Try searching with a different keyword or category.</p>
          </div>
        ) : (
          filteredCategories.map((category, idx) => (
            <div key={idx} className="mb-16">
              <h3 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, i) => (
                  <div
                    key={i}
                    className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#00D4FF]/50 transition transform hover:scale-105 hover:shadow-xl hover:shadow-[#00D4FF]/20 overflow-hidden min-h-[320px]`}
                  >
                    {backgroundImages[tool.name] && (
                      <>
                        <img
                          src={backgroundImages[tool.name]}
                          alt={`${tool.name} tool interface preview`}
                          title={`${tool.name} - AI Marketing Tool Preview`}
                          loading="lazy"
                          className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />
                      </>
                    )}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="text-4xl mb-4" role="img" aria-label={tool.name}>{tool.icon}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{tool.name}</h4>
                      <p className="text-white/70 mb-4 flex-grow">{tool.desc}</p>
                      <button
                        onClick={() => setSelectedTool(tool)}
                        className="flex items-center space-x-2 text-[#00D4FF] font-semibold hover:text-[#00FFA3] transition mt-auto group/btn"
                        aria-label={`Read more about ${tool.name}`}
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <Dialog open={!!selectedTool} onOpenChange={() => setSelectedTool(null)}>
        <DialogContent className="max-w-5xl w-[90vw] bg-[#0A0E27] border-white/10 text-white p-0 overflow-hidden sm:rounded-3xl max-h-[90vh] flex flex-col">
          {selectedTool && (
            <div className="flex-1 overflow-y-auto bg-[#0A0E27] custom-scrollbar min-h-0">
              <div className="relative h-56 sm:h-64 bg-gradient-to-br from-[#00D4FF]/20 to-[#00FFA3]/20 flex items-center justify-center border-b border-white/10">
                {backgroundImages[selectedTool.name] && (
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: `url(${backgroundImages[selectedTool.name]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-6xl mb-4 drop-shadow-lg">{selectedTool.icon}</div>
                  <DialogTitle className="text-3xl font-bold text-white">{selectedTool.name}</DialogTitle>
                </div>
              </div>

              <div className="p-8 sm:p-12 bg-[#0A0E27]">
                <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed">
                  {selectedTool.desc}
                </p>

                {moreDetailedInfo[selectedTool.name] && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                      <h5 className="text-xl font-bold text-white mb-6 flex items-center">
                        <CheckCircle2 className="w-6 h-6 mr-3 text-[#00FFA3]" />
                        Key Features
                      </h5>
                      <div className="space-y-4">
                        {moreDetailedInfo[selectedTool.name].features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-4 text-white/80 text-lg">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-[#00D4FF]/10 to-transparent rounded-3xl border border-white/10">
                      <h5 className="text-xl font-bold text-white mb-6 flex items-center">
                        <Sparkles className="w-6 h-6 mr-3 text-[#00D4FF]" />
                        Use Case
                      </h5>
                      <p className="text-white/70 italic text-xl leading-relaxed">
                        {moreDetailedInfo[selectedTool.name].useCase}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section >
  );
}
