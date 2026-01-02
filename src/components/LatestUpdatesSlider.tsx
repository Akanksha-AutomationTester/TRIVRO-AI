import { useState, useEffect, useRef } from 'react';
import { Bell, ArrowRight, X, Info, Sparkles } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";

interface LatestUpdateData {
    id: string;
    title: string;
    content: string;
    date: string;
    link?: string;
    image?: string;
    detailedContent?: string;
    gridSize?: 'large' | 'wide' | 'standard';
    badgeText?: string;
    badgeType?: 'live' | 'new' | 'version';
}

const defaultUpdates: LatestUpdateData[] = [
    {
        id: 'update-1',
        title: 'AI Website Builder 🚀',
        content: 'Build SEO-optimized sites in 60 seconds. No code.',
        detailedContent: 'Our new AI Website Builder uses advanced generative AI to create complete websites from a single prompt. Features include:\n\n- One-click SEO optimization\n- Mobile-responsive designs\n- Integrated copy generation\n- Custom domain support\n\nScale your online presence faster than ever before.',
        date: 'Dec 28, 2024',
        link: '/tools',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        gridSize: 'large',
        badgeText: 'Live Now',
        badgeType: 'live'
    },
    {
        id: 'update-2',
        title: 'WhatsApp Automation 📱',
        content: 'Automated engagement for your customers.',
        detailedContent: 'WhatsApp is where your customers are. Our automation suite allows you to:\n\n- Set up 24/7 AI-powered customer support\n- Send bulk updates safely\n- Automate appointment reminders\n- Track engagement and lead conversion.',
        date: 'Dec 25, 2024',
        link: '/tools',
        image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1000',
        gridSize: 'wide',
        badgeText: 'New Feature',
        badgeType: 'new'
    },
    {
        id: 'update-3',
        title: 'Trivro v2.0 ⚡',
        content: '10x speed with advanced AEO tools.',
        detailedContent: 'We have completely rebuilt the Trivro engine for 10x speed. \n\nWhat is new?\n- Advanced AEO features\n- Global language expansion\n- More niche-specific AI tools\n\nExperience the future of marketing automation.',
        date: 'Dec 20, 2024',
        link: '',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
        gridSize: 'standard',
        badgeText: 'v2.0',
        badgeType: 'version'
    },
    {
        id: 'update-4',
        title: '50K Users 🎉',
        content: 'Celebrating a growth milestone!',
        date: 'Dec 15, 2024',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        gridSize: 'standard'
    }
];

export default function LatestUpdatesSlider({ updates: externalUpdates }: { updates?: LatestUpdateData[] }) {
    const [updates, setUpdates] = useState<LatestUpdateData[]>(externalUpdates || []);
    const [selectedDetail, setSelectedDetail] = useState<LatestUpdateData | null>(null);

    useEffect(() => {
        const loadUpdates = () => {
            const savedUpdates = localStorage.getItem('trivro_latest_updates');
            if (savedUpdates) {
                try {
                    const parsed = JSON.parse(savedUpdates);
                    if (parsed && parsed.length > 0) {
                        setUpdates(parsed);
                        return;
                    }
                } catch (e) {
                    console.error('Error parsing updates', e);
                }
            }
            setUpdates(externalUpdates || defaultUpdates);
        };
        loadUpdates();
    }, [externalUpdates]);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden relative">
            {/* Theme Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 via-transparent to-[#00FFA3]/5 pointer-events-none" />

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes kenburns {
                    0% { transform: scale(1) translate(0, 0); }
                    100% { transform: scale(1.15) translate(-1%, -1%); }
                }
                .ken-burns {
                    animation: kenburns 30s ease-in-out infinite alternate;
                }
                .text-stroke {
                    -webkit-text-stroke: 2px rgba(0, 212, 255, 0.2);
                    color: transparent;
                }
                .pulse-live {
                    animation: pulse-live 2s infinite;
                }
                @keyframes pulse-live {
                    0% { 
                        transform: scale(0.95); 
                        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7), 0 0 20px rgba(239, 68, 68, 0.3);
                    }
                    70% { 
                        transform: scale(1); 
                        box-shadow: 0 0 0 10px rgba(239, 68, 68, 0), 0 0 30px rgba(239, 68, 68, 0.5);
                    }
                    100% { 
                        transform: scale(0.95); 
                        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0), 0 0 20px rgba(239, 68, 68, 0.3);
                    }
                }
                .glow-theme {
                    animation: glow-theme 3s infinite alternate;
                }
                @keyframes glow-theme {
                    from { 
                        box-shadow: 0 0 10px rgba(0, 212, 255, 0.4), 0 0 20px rgba(0, 255, 163, 0.2);
                    }
                    to { 
                        box-shadow: 0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 255, 163, 0.4);
                    }
                }
                .glow-version {
                    box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
                }
                .bento-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-auto-rows: 260px;
                    gap: 1.5rem;
                }
                @media (max-width: 1024px) {
                    .bento-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 240px; }
                }
                @media (max-width: 640px) {
                    .bento-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
                }
                .bento-item-large { grid-column: span 2; grid-row: span 2; }
                .bento-item-wide { grid-column: span 2; grid-row: span 1; }
                .bento-item-standard { grid-column: span 1; grid-row: span 1; }
                
                @media (max-width: 640px) {
                    .bento-item-large, .bento-item-wide, .bento-item-standard { 
                        grid-column: span 1; 
                        grid-row: auto;
                        min-height: 320px;
                    }
                }
            `}} />

            <div className="relative flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
                <div className="space-y-5">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-[#00D4FF]/20 to-[#00FFA3]/20 rounded-lg border border-[#00D4FF]/30">
                            <Sparkles className="w-5 h-5 text-[#00FFA3]" />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">Updates</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
                        What's New
                    </h2>
                </div>
                <div className="p-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 hidden md:block max-w-sm shadow-lg shadow-[#00D4FF]/10">
                    <p className="text-white/70 text-sm leading-relaxed">
                        Explore the latest features, releases, and milestones from the Trivro AI ecosystem.
                        Every update is designed to scale your marketing efficiency.
                    </p>
                </div>
            </div>

            <div className="bento-grid relative">
                {updates.map((update, idx) => (
                    <div
                        key={update.id}
                        onClick={() => setSelectedDetail(update)}
                        className={`
                            relative group overflow-hidden rounded-[28px] cursor-pointer
                            border-2 border-white/10 hover:border-[#00D4FF]/60 
                            transition-all duration-700 hover:shadow-2xl hover:shadow-[#00D4FF]/20
                            ${update.gridSize === 'large' ? 'bento-item-large' : update.gridSize === 'wide' ? 'bento-item-wide' : 'bento-item-standard'}
                        `}
                    >
                        {/* Background Image Container */}
                        <div className="absolute inset-0 z-0">
                            {update.image ? (
                                <img
                                    src={update.image}
                                    alt=""
                                    className="w-full h-full object-cover ken-burns group-hover:scale-110 transition-transform duration-[2000ms]"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27]" />
                            )}
                            {/* Theme-Integrated Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27]/60 to-[#0A0E27]/20 opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-transparent to-[#00FFA3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>

                        {/* Large Background Stroke Text for Depth */}
                        {update.gridSize === 'large' && (
                            <div className="absolute -top-10 -right-10 text-9xl font-black text-stroke opacity-20 select-none pointer-events-none group-hover:opacity-30 group-hover:translate-y-5 transition-all duration-1000">
                                NEW
                            </div>
                        )}

                        {/* Content Area */}
                        <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">

                            <div className="space-y-4 transform group-hover:-translate-y-4 transition-transform duration-500">
                                <div className="flex items-center gap-2">
                                    <div className="h-px w-8 bg-gradient-to-r from-[#00D4FF] to-transparent" />
                                    <span className="text-white/50 text-xs font-bold uppercase tracking-widest">{update.date}</span>
                                </div>
                                <h3 className={`
                                    font-black text-white tracking-tight leading-[1.15]
                                    drop-shadow-lg
                                    ${update.gridSize === 'large' ? 'text-3xl md:text-5xl mb-4' : 'text-xl md:text-2xl mb-2'}
                                `}>
                                    {update.title}
                                </h3>
                                {(update.gridSize === 'large' || update.gridSize === 'wide') && (
                                    <p className="text-white/70 text-base md:text-lg max-w-xl line-clamp-2 md:line-clamp-3 leading-relaxed">
                                        {update.content}
                                    </p>
                                )}
                            </div>

                            {/* Enhanced View Button */}
                            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center space-x-2">
                                <div className="px-4 py-2 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] rounded-lg font-bold text-sm text-[#0A0E27] flex items-center space-x-2 shadow-lg shadow-[#00D4FF]/30">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Detailed Content Modal */}
            <Dialog open={!!selectedDetail} onOpenChange={() => setSelectedDetail(null)}>
                <DialogContent className="max-w-4xl w-[90vw] bg-[#0A0E27] border-2 border-white/20 text-white p-0 overflow-hidden sm:rounded-[32px] max-h-[90vh] flex flex-col shadow-[0_0_100px_rgba(0,212,255,0.3)]">
                    {selectedDetail && (
                        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] custom-scrollbar min-h-0">
                            {selectedDetail.image && (
                                <div className="relative h-[250px] sm:h-[450px] overflow-hidden">
                                    <img
                                        src={selectedDetail.image}
                                        alt={selectedDetail.title}
                                        className="w-full h-full object-cover ken-burns"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27]/40 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-transparent to-[#00FFA3]/10" />
                                  </div>
                              )}
                              <div className="p-8 sm:p-12">
                                  <div className="flex items-center gap-3 text-[#00D4FF] mb-3">
                                      <Sparkles className="w-5 h-5" />
                                      <span className="text-xs font-black uppercase tracking-widest bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">{selectedDetail.date}</span>
                                  </div>
                                  <DialogTitle className="text-2xl sm:text-4xl font-black text-white tracking-tighter leading-[1.1] drop-shadow-lg mb-6">
                                      {selectedDetail.title}
                                  </DialogTitle>
                                  <div className="text-xl text-white/80 leading-relaxed whitespace-pre-wrap space-y-6 max-w-3xl">
                                      {selectedDetail.detailedContent || selectedDetail.content}
                                  </div>
                                {selectedDetail.link && (
                                    <div className="mt-12">
                                        <a
                                            href={selectedDetail.link}
                                            className="inline-flex items-center space-x-4 px-10 py-5 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-black uppercase tracking-widest text-xs rounded-2xl hover:shadow-[0_0_60px_rgba(0,212,255,0.6)] transition-all transform hover:-translate-y-1 hover:scale-105"
                                        >
                                            <span>Launch Feature</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    <button
                        onClick={() => setSelectedDetail(null)}
                        className="absolute top-6 right-6 p-3 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition z-50 border-2 border-white/20 hover:border-[#00D4FF]/50 hover:shadow-lg hover:shadow-[#00D4FF]/30"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </DialogContent>
            </Dialog>
        </section>
    );
}
