import React from 'react';
import { toolCategories } from '../data/toolsData';
import { marketingTools, contentTools, businessTools } from '../data/toolsDataPart2';

const ToolsOverview: React.FC = () => {
    const allCategories = [
        ...toolCategories,
        marketingTools,
        contentTools,
        businessTools,
    ];

    return (
        <section className="bg-[#0A0E27] py-20 border-t border-white/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Complete AI Marketing Tool Directory
                    </h2>
                    <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
                        Explore our ecosystem of 51+ AI-powered marketing tools designed to automate your digital presence,
                        optimize Meta Ads, generate SEO content, and scale your business with surgical precision.
                        Each tool is engineered to deliver high-converting results in minutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {allCategories.map((category) => (
                        <div key={category.id} className="space-y-6">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
                                {category.title}
                            </h3>
                            <ul className="space-y-4">
                                {category.tools.map((tool, idx) => (
                                    <li key={idx} className="group border-l border-white/10 pl-4 hover:border-[#00D4FF]/50 transition">
                                        <h4 className="text-white font-semibold group-hover:text-[#00D4FF] transition">
                                            {tool.icon} {tool.name}
                                        </h4>
                                        <p className="text-white/50 text-sm leading-relaxed mt-1">
                                            {tool.desc} Our AI-driven {tool.name} tool is specifically optimized for performance marketers
                                            looking to achieve better ROI in their {category.title.toLowerCase()} strategies.
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsOverview;
