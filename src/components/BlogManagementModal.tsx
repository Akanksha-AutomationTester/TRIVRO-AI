import { useState } from 'react';
import { X, Lock, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, Image as ImageIcon, FileText, Grid, Layout } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const BLOG_PASSCODE = "trivro2025";

// Utility function to format date as "Nov 20, 2024"
const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  // If it's already formatted (doesn't contain -), return as is
  if (!dateString.includes('-')) return dateString;
  const date = new Date(dateString + 'T00:00:00');
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Utility function to convert from formatted date back to YYYY-MM-DD
const dateStringToInputFormat = (formattedDate: string): string => {
  if (!formattedDate) return new Date().toISOString().split('T')[0];
  if (formattedDate.includes('-')) return formattedDate;
  const date = new Date(formattedDate);
  if (isNaN(date.getTime())) return new Date().toISOString().split('T')[0];
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

interface BlogData {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

interface ExternalLinkData {
  id?: string;
  title: string;
  excerpt: string;
  url: string;
  category: string;
}

interface LatestUpdateData {
  id?: string;
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

interface ToolData {
  id?: string;
  name: string;
  icon: string;
  desc: string;
  category: string;
  features: string[];
  useCase: string;
  image: string;
}

interface BlogManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  blogs: BlogData[];
  externalLinks: ExternalLinkData[];
  latestUpdates: LatestUpdateData[];
  tools: ToolData[];
  onUpdateBlogs: (blogs: BlogData[]) => void;
  onUpdateExternalLinks: (links: ExternalLinkData[]) => void;
  onUpdateLatestUpdates: (updates: LatestUpdateData[]) => void;
  onUpdateTools: (tools: ToolData[]) => void;
}

export default function BlogManagementModal({
  isOpen,
  onClose,
  blogs,
  externalLinks,
  latestUpdates,
  tools,
  onUpdateBlogs,
  onUpdateExternalLinks,
  onUpdateLatestUpdates,
  onUpdateTools,
}: BlogManagementModalProps) {
  const [step, setStep] = useState<'passcode' | 'dashboard'>('passcode');
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  const [activeTab, setActiveTab] = useState<'blogs' | 'links' | 'updates' | 'tools'>('blogs');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    category: 'AI Marketing',
    customCategory: '',
    url: '',
    link: '',
    detailedContent: '',
    name: '',
    icon: '⚡',
    desc: '',
    features: '',
    useCase: '',
    gridSize: 'standard',
    badgeText: '',
    badgeType: 'new'
  });
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasscodeError('');

    if (passcode.toLowerCase() === BLOG_PASSCODE.toLowerCase()) {
      setStep('dashboard');
      setPasscode('');
    } else {
      setPasscodeError('Incorrect passcode. Please try again.');
      setPasscode('');
    }
  };

  const handleModalClose = () => {
    setStep('passcode');
    setPasscode('');
    setPasscodeError('');
    setActiveTab('blogs');
    setCurrentSlide(0);
    setShowForm(false);
    setEditingItem(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      author: '',
      date: new Date().toISOString().split('T')[0],
      category: 'AI Marketing',
      customCategory: '',
      url: '',
      link: '',
      detailedContent: '',
      name: '',
      icon: '⚡',
      desc: '',
      features: '',
      useCase: '',
      gridSize: 'standard',
      badgeText: '',
      badgeType: 'new'
    });
    setFormErrors({});
    onClose();
  };

  const handleAddNew = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      author: '',
      date: new Date().toISOString().split('T')[0],
      category: activeTab === 'tools' ? 'AI Advertising Tools' : 'AI Marketing',
      customCategory: '',
      url: '',
      link: '',
      detailedContent: '',
      name: '',
      icon: '⚡',
      desc: '',
      features: '',
      useCase: '',
      gridSize: 'standard',
      badgeText: '',
      badgeType: 'new'
    });
    setShowForm(true);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    if (activeTab === 'tools') {
      setFormData({
        ...item,
        features: Array.isArray(item.features) ? item.features.join('\n') : item.features
      });
    } else {
      setFormData({
        ...item,
        date: item.date ? dateStringToInputFormat(item.date) : new Date().toISOString().split('T')[0],
        gridSize: item.gridSize || 'standard',
        badgeText: item.badgeText || '',
        badgeType: item.badgeType || 'new'
      });
    }

    if ('category' in item && !['AI Marketing', 'Funnels', 'SEO & AEO', 'AI Content', 'Paid Ads', 'Business Tips', 'Tutorial', 'AI Tool', 'Market Research', 'Social Media', 'AI Advertising Tools', 'Branding & Creative Suite', 'AI Marketing & Funnel Builder', 'Content Creation Tools', 'Business & Productivity Tools'].includes(item.category)) {
      setShowCustomCategory(true);
      setFormData((prev: any) => ({ ...prev, customCategory: item.category }));
    } else {
      setShowCustomCategory(false);
    }
    setShowForm(true);
  };

  const handleDelete = (id: string | undefined) => {
    if (!id) return;
    if (activeTab === 'blogs') {
      const updated = blogs.filter(b => b.id !== id);
      onUpdateBlogs(updated);
    } else if (activeTab === 'links') {
      const updated = externalLinks.filter(l => l.id !== id);
      onUpdateExternalLinks(updated);
    } else if (activeTab === 'updates') {
      const updated = latestUpdates.filter(u => u.id !== id);
      onUpdateLatestUpdates(updated);
    } else if (activeTab === 'tools') {
      const updated = tools.filter(t => t.id !== id);
      onUpdateTools(updated);
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (activeTab === 'tools') {
      if (!formData.name?.trim()) errors.name = 'Name is required';
      if (!formData.desc?.trim()) errors.desc = 'Description is required';
      if (!formData.icon?.trim()) errors.icon = 'Icon is required';
      if (!formData.category?.trim()) errors.category = 'Category is required';
    } else {
      if (!formData.title?.trim()) errors.title = 'Title is required';
      if (activeTab !== 'updates' && !formData.excerpt?.trim()) errors.excerpt = 'Excerpt is required';
      if (activeTab === 'blogs' && !formData.content?.trim()) errors.content = 'Content is required';
      if (activeTab === 'updates' && !formData.content?.trim()) errors.content = 'Update content is required';
      if (activeTab === 'blogs' && !formData.image?.trim()) errors.image = 'Image URL is required';
      if (activeTab === 'blogs' && !formData.author?.trim()) errors.author = 'Author is required';
      if (activeTab === 'links' && !formData.url?.trim()) errors.url = 'URL is required';
      if (activeTab !== 'links' && !formData.date) errors.date = 'Date is required';

      const finalCategory = formData.category === 'Other' ? formData.customCategory : formData.category;
      if (activeTab !== 'updates' && !finalCategory?.trim()) errors.category = 'Category is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (activeTab === 'tools') {
      const toolData = {
        ...formData,
        features: typeof formData.features === 'string' ? formData.features.split('\n').filter((f: string) => f.trim() !== '') : formData.features,
        id: editingItem?.id || Date.now().toString()
      };
      if (editingItem?.id) {
        onUpdateTools(tools.map(t => t.id === editingItem.id ? toolData : t));
      } else {
        onUpdateTools([...tools, toolData]);
      }
    } else {
      const finalCategory = formData.category === 'Other' ? formData.customCategory : formData.category;
      const formattedDate = (formData.date && formData.date.includes('-')) ? formatDate(formData.date) : formData.date;

      const itemData = {
        ...formData,
        date: formattedDate,
        category: finalCategory,
        id: editingItem?.id || Date.now().toString()
      };

      if (activeTab === 'blogs') {
        if (editingItem?.id) {
          onUpdateBlogs(blogs.map(b => b.id === editingItem.id ? itemData : b));
        } else {
          onUpdateBlogs([...blogs, itemData]);
        }
      } else if (activeTab === 'links') {
        if (editingItem?.id) {
          onUpdateExternalLinks(externalLinks.map(l => l.id === editingItem.id ? itemData : l));
        } else {
          onUpdateExternalLinks([...externalLinks, itemData]);
        }
      } else if (activeTab === 'updates') {
        if (editingItem?.id) {
          onUpdateLatestUpdates(latestUpdates.map(u => u.id === editingItem.id ? itemData : u));
        } else {
          onUpdateLatestUpdates([...latestUpdates, itemData]);
        }
      }
    }

    setShowForm(false);
    setEditingItem(null);
  };

  const currentItems = activeTab === 'blogs' ? blogs : activeTab === 'links' ? externalLinks : activeTab === 'updates' ? latestUpdates : tools;
  const displayItem = currentItems[currentSlide];

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent className="max-w-4xl w-[95vw] bg-[#0A0E27] border-white/10 text-white p-0 overflow-hidden sm:rounded-3xl max-h-[90vh] flex flex-col">
        <div className="flex-1 overflow-y-auto bg-[#0A0E27] custom-scrollbar min-h-0">
          {step === 'passcode' ? (
            <div className="p-8 sm:p-12">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">Verify Access</h2>
                <button
                  onClick={handleModalClose}
                  className="p-2 hover:bg-white/10 rounded-full transition"
                >
                  <X className="w-6 h-6 text-white/70 hover:text-white" />
                </button>
              </div>

              <form onSubmit={handlePasscodeSubmit} className="space-y-6">
                <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#00FFA3]/10 border border-[#00D4FF]/20 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Lock className="w-5 h-5 text-[#00D4FF]" />
                    <p className="text-sm text-white/80">
                      This is a restricted area. Please enter the passcode to continue.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Passcode
                  </label>
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setPasscodeError('');
                    }}
                    placeholder="Enter passcode"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition"
                  />
                  {passcodeError && (
                    <p className="text-red-400 text-sm mt-2">{passcodeError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00D4FF]/50 transition"
                >
                  Verify & Continue
                </button>
              </form>
            </div>
          ) : (
            <div className="p-8 sm:p-12">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">
                  {activeTab === 'blogs' ? 'Blog Management' : activeTab === 'links' ? 'Links Management' : activeTab === 'updates' ? 'Updates Management' : 'Tools Management'}
                </h2>
                <button
                  onClick={handleModalClose}
                  className="p-2 hover:bg-white/10 rounded-full transition"
                >
                  <X className="w-6 h-6 text-white/70 hover:text-white" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => { setActiveTab('blogs'); setCurrentSlide(0); setShowForm(false); }}
                  className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === 'blogs' ? 'bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  Blogs ({blogs.length})
                </button>
                <button
                  onClick={() => { setActiveTab('links'); setCurrentSlide(0); setShowForm(false); }}
                  className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === 'links' ? 'bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  Links ({externalLinks.length})
                </button>
                <button
                  onClick={() => { setActiveTab('updates'); setCurrentSlide(0); setShowForm(false); }}
                  className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === 'updates' ? 'bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  Updates ({latestUpdates.length})
                </button>
                <button
                  onClick={() => { setActiveTab('tools'); setCurrentSlide(0); setShowForm(false); }}
                  className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === 'tools' ? 'bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  Tools ({tools.length})
                </button>
              </div>

              {showForm ? (
                <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                  <h3 className="text-2xl font-bold text-white">
                    {editingItem ? 'Edit Item' : 'Add New Item'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeTab === 'tools' ? (
                      <>
                        <div className="md:col-span-1">
                          <label className="block text-sm font-semibold text-white mb-2">Tool Name *</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label className="block text-sm font-semibold text-white mb-2">Icon (Emoji) *</label>
                          <input
                            type="text"
                            value={formData.icon}
                            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-white mb-2">Short Description *</label>
                          <textarea
                            value={formData.desc}
                            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                            rows={2}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition resize-none"
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label className="block text-sm font-semibold text-white mb-2">Category *</label>
                          <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A0E27] border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                          >
                            <option value="AI Advertising Tools">AI Advertising Tools</option>
                            <option value="Branding & Creative Suite">Branding & Creative Suite</option>
                            <option value="AI Marketing & Funnel Builder">AI Marketing & Funnel Builder</option>
                            <option value="Content Creation Tools">Content Creation Tools</option>
                            <option value="Business & Productivity Tools">Business & Productivity Tools</option>
                          </select>
                        </div>
                        <div className="md:col-span-1">
                          <label className="block text-sm font-semibold text-white mb-2 flex items-center">
                            <ImageIcon className="w-4 h-4 mr-2" /> Tool Image URL
                          </label>
                          <input
                            type="url"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            placeholder="https://example.com/tool-bg.jpg"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-white mb-2 flex items-center">
                            <Plus className="w-4 h-4 mr-2" /> Key Features (One per line)
                          </label>
                          <textarea
                            value={formData.features}
                            onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                            rows={4}
                            placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-white mb-2">Use Case</label>
                          <textarea
                            value={formData.useCase}
                            onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                            rows={3}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-white mb-2">Title *</label>
                          <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                          />
                        </div>

                        {activeTab !== 'updates' && (
                          <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-white mb-2">Excerpt *</label>
                            <textarea
                              value={formData.excerpt}
                              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                              rows={2}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition resize-none"
                            />
                          </div>
                        )}

                        {(activeTab === 'blogs' || activeTab === 'updates') && (
                          <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-white mb-2">{activeTab === 'blogs' ? 'Content *' : 'Update Message *'}</label>
                            <textarea
                              value={formData.content}
                              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                              rows={6}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                            />
                          </div>
                        )}

                        {activeTab === 'updates' && (
                          <>
                            <div className="md:col-span-1">
                              <label className="block text-sm font-semibold text-white mb-2 flex items-center">
                                <Layout className="w-4 h-4 mr-2" /> Bento Grid Size
                              </label>
                              <select
                                value={formData.gridSize}
                                onChange={(e) => setFormData({ ...formData, gridSize: e.target.value })}
                                className="w-full px-4 py-3 bg-[#0A0E27] border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                              >
                                <option value="standard">Standard (1x1)</option>
                                <option value="wide">Wide (2x1)</option>
                                <option value="large">Large (2x2)</option>
                              </select>
                            </div>
                            <div className="md:col-span-1">
                              <label className="block text-sm font-semibold text-white mb-2 flex items-center">
                                <Grid className="w-4 h-4 mr-2" /> Badge Text (Optional)
                              </label>
                              <input
                                type="text"
                                value={formData.badgeText}
                                onChange={(e) => setFormData({ ...formData, badgeText: e.target.value })}
                                placeholder="e.g. Live Now, v2.0"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                              />
                            </div>
                            <div className="md:col-span-1">
                              <label className="block text-sm font-semibold text-white mb-2">Badge Type</label>
                              <select
                                value={formData.badgeType}
                                onChange={(e) => setFormData({ ...formData, badgeType: e.target.value })}
                                className="w-full px-4 py-3 bg-[#0A0E27] border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                              >
                                <option value="new">Glowing New Feature</option>
                                <option value="live">Pulsing Live Now</option>
                                <option value="version">Metallic Version</option>
                              </select>
                            </div>
                          </>
                        )}

                        {activeTab === 'updates' && (
                          <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-white mb-2 flex items-center">
                              <FileText className="w-4 h-4 mr-2" /> Learn More Details (HTML or Plain Text)
                            </label>
                            <textarea
                              value={formData.detailedContent}
                              onChange={(e) => setFormData({ ...formData, detailedContent: e.target.value })}
                              rows={4}
                              placeholder="Add more details that appear when clicking Learn More..."
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                            />
                          </div>
                        )}

                        {activeTab === 'blogs' && (
                          <div className="md:col-span-1">
                            <label className="block text-sm font-semibold text-white mb-2">Author *</label>
                            <input
                              type="text"
                              value={formData.author}
                              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                            />
                          </div>
                        )}

                        {activeTab !== 'links' && (
                          <div className="md:col-span-1">
                            <label className="block text-sm font-semibold text-white mb-2">Date *</label>
                            <input
                              type="date"
                              value={formData.date?.includes('-') ? formData.date : ''}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                            />
                          </div>
                        )}

                        {(activeTab === 'blogs' || activeTab === 'updates') && (
                          <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-white mb-2 flex items-center">
                              <ImageIcon className="w-4 h-4 mr-2" /> Image URL {activeTab === 'blogs' ? '*' : '(Optional)'}
                            </label>
                            <input
                              type="url"
                              value={formData.image}
                              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                              placeholder="https://example.com/image.jpg"
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                            />
                          </div>
                        )}

                        {(activeTab === 'links' || activeTab === 'updates') && (
                          <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-white mb-2">{activeTab === 'links' ? 'URL *' : 'Action Link (Optional)'}</label>
                            <input
                              type="url"
                              value={activeTab === 'links' ? formData.url : formData.link}
                              onChange={(e) => activeTab === 'links' ? setFormData({ ...formData, url: e.target.value }) : setFormData({ ...formData, link: e.target.value })}
                              placeholder="https://example.com"
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                            />
                          </div>
                        )}

                        {activeTab !== 'updates' && (
                          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-semibold text-white mb-2">Category *</label>
                              <select
                                value={formData.category}
                                onChange={(e) => {
                                  setFormData({ ...formData, category: e.target.value });
                                  setShowCustomCategory(e.target.value === 'Other');
                                }}
                                className="w-full px-4 py-3 bg-[#0A0E27] border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                              >
                                <option value="AI Marketing">AI Marketing</option>
                                <option value="Funnels">Funnels</option>
                                <option value="SEO & AEO">SEO & AEO</option>
                                <option value="AI Content">AI Content</option>
                                <option value="Paid Ads">Paid Ads</option>
                                <option value="Business Tips">Business Tips</option>
                                <option value="Tutorial">Tutorial</option>
                                <option value="AI Tool">AI Tool</option>
                                <option value="Market Research">Market Research</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                            {showCustomCategory && (
                              <div>
                                <label className="block text-sm font-semibold text-white mb-2">Enter Category Name *</label>
                                <input
                                  type="text"
                                  value={formData.customCategory}
                                  onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00D4FF] transition"
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition">Cancel</button>
                    <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg hover:shadow-lg transition">{editingItem ? 'Update' : 'Add'}</button>
                  </div>
                </form>
              ) : (
                <>
                  {currentItems.length > 0 ? (
                    <div className="mb-8">
                      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-6 min-h-[300px] flex flex-col justify-center">
                        {displayItem && (
                          <div>
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                  {activeTab === 'tools' ? (displayItem as ToolData).name : (displayItem as LatestUpdateData).title}
                                </h3>
                                {activeTab !== 'updates' && (displayItem as any).category && (
                                  <div className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-semibold rounded-full inline-block">{(displayItem as any).category}</div>
                                )}
                              </div>
                            </div>

                            {activeTab === 'tools' ? (
                              <p className="text-white/80 mb-4">{(displayItem as ToolData).desc}</p>
                            ) : (
                              <p className="text-white/80 mb-4 whitespace-pre-wrap">{activeTab === 'updates' ? (displayItem as LatestUpdateData).content : (displayItem as BlogData).excerpt}</p>
                            )}

                            {activeTab === 'blogs' && (
                              <div className="flex items-center justify-between text-sm text-white/60 mb-6">
                                <div>{(displayItem as BlogData).author}</div>
                                <div>{(displayItem as BlogData).date}</div>
                              </div>
                            )}
                            {activeTab === 'updates' && <div className="text-sm text-white/60 mb-6">{(displayItem as LatestUpdateData).date}</div>}

                            <div className="flex space-x-4">
                              <button onClick={() => handleEdit(displayItem)} className="flex items-center space-x-2 px-4 py-2 bg-[#00D4FF]/20 text-[#00D4FF] rounded-lg hover:bg-[#00D4FF]/30 transition"><Edit2 className="w-4 h-4" /><span>Edit</span></button>
                              <button onClick={() => handleDelete(displayItem.id)} className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition"><Trash2 className="w-4 h-4" /><span>Delete</span></button>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <button onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))} disabled={currentSlide === 0} className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 transition"><ChevronLeft className="w-6 h-6" /></button>
                        <p className="text-white/70 text-sm">{currentSlide + 1} of {currentItems.length}</p>
                        <button onClick={() => setCurrentSlide(Math.min(currentItems.length - 1, currentSlide + 1))} disabled={currentSlide === currentItems.length - 1} className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 transition"><ChevronRight className="w-6 h-6" /></button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-white/60 mb-6">No {activeTab} yet</div>
                  )}

                  <button onClick={handleAddNew} className="w-full py-3 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg hover:shadow-lg transition flex items-center justify-center space-x-2"><Plus className="w-5 h-5" /><span>Add New {activeTab === 'blogs' ? 'Blog' : activeTab === 'links' ? 'Link' : activeTab === 'updates' ? 'Update' : 'Tool'}</span></button>
                </>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
