import { useState } from 'react';
import { X, Lock, Plus, Edit2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const BLOG_PASSCODE = "trivro2025";

// Utility function to format date as "Nov 20, 2024"
const formatDate = (dateString: string): string => {
  const date = new Date(dateString + 'T00:00:00');
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Utility function to convert from formatted date back to YYYY-MM-DD
const dateStringToInputFormat = (formattedDate: string): string => {
  const date = new Date(formattedDate);
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

interface BlogManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  blogs: BlogData[];
  externalLinks: ExternalLinkData[];
  onUpdateBlogs: (blogs: BlogData[]) => void;
  onUpdateExternalLinks: (links: ExternalLinkData[]) => void;
}

export default function BlogManagementModal({
  isOpen,
  onClose,
  blogs,
  externalLinks,
  onUpdateBlogs,
  onUpdateExternalLinks,
}: BlogManagementModalProps) {
  const [step, setStep] = useState<'passcode' | 'dashboard'>('passcode');
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  const [activeTab, setActiveTab] = useState<'blogs' | 'links'>('blogs');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<BlogData | ExternalLinkData | null>(null);
  const [formData, setFormData] = useState<any>({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    category: 'AI Marketing',
    customCategory: '',
    url: ''
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
      url: ''
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
      category: 'AI Marketing',
      customCategory: '',
      url: ''
    });
    setShowForm(true);
  };

  const handleEdit = (item: BlogData | ExternalLinkData) => {
    setEditingItem(item);
    setFormData(item);
    if ('customCategory' in item && !['AI Marketing', 'Funnels', 'SEO & AEO', 'AI Content', 'Paid Ads', 'Business Tips', 'Tutorial'].includes(item.category)) {
      setShowCustomCategory(true);
      setFormData({ ...item, customCategory: item.category });
    }
    setShowForm(true);
  };

  const handleDelete = (id: string | undefined) => {
    if (!id) return;
    if (activeTab === 'blogs') {
      const updated = blogs.filter(b => b.id !== id);
      onUpdateBlogs(updated);
    } else {
      const updated = externalLinks.filter(l => l.id !== id);
      onUpdateExternalLinks(updated);
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.title.trim()) errors.title = 'Title is required';
    if (!formData.excerpt.trim()) errors.excerpt = 'Excerpt is required';
    if (activeTab === 'blogs' && !formData.content.trim()) errors.content = 'Content is required';
    if (activeTab === 'blogs' && !formData.image.trim()) errors.image = 'Image URL is required';
    if (activeTab === 'blogs' && !formData.author.trim()) errors.author = 'Author is required';
    if (activeTab === 'links' && !formData.url.trim()) errors.url = 'URL is required';
    if (!formData.date && activeTab === 'blogs') errors.date = 'Date is required';

    const finalCategory = formData.category === 'Other' ? formData.customCategory : formData.category;
    if (!finalCategory.trim()) errors.category = 'Category is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const finalCategory = formData.category === 'Other' ? formData.customCategory : formData.category;
    const formattedDate = formatDate(formData.date);
    const itemData = {
      ...formData,
      date: formattedDate,
      category: finalCategory,
      id: editingItem?.id || Date.now().toString()
    };

    if (activeTab === 'blogs') {
      if (editingItem?.id) {
        const updated = blogs.map(b => b.id === editingItem.id ? itemData : b);
        onUpdateBlogs(updated);
      } else {
        onUpdateBlogs([...blogs, itemData]);
      }
    } else {
      if (editingItem?.id) {
        const updated = externalLinks.map(l => l.id === editingItem.id ? itemData : l);
        onUpdateExternalLinks(updated);
      } else {
        onUpdateExternalLinks([...externalLinks, itemData]);
      }
    }

    setShowForm(false);
    setEditingItem(null);
  };

  const currentItems = activeTab === 'blogs' ? blogs : externalLinks;
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
                  {activeTab === 'blogs' ? 'Blog Management' : 'External Links Management'}
                </h2>
                <button
                  onClick={handleModalClose}
                  className="p-2 hover:bg-white/10 rounded-full transition"
                >
                  <X className="w-6 h-6 text-white/70 hover:text-white" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => {
                    setActiveTab('blogs');
                    setCurrentSlide(0);
                    setShowForm(false);
                  }}
                  className={`px-6 py-2 rounded-lg font-semibold transition ${
                    activeTab === 'blogs'
                      ? 'bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Blogs ({blogs.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('links');
                    setCurrentSlide(0);
                    setShowForm(false);
                  }}
                  className={`px-6 py-2 rounded-lg font-semibold transition ${
                    activeTab === 'links'
                      ? 'bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  External Links ({externalLinks.length})
                </button>
              </div>

              {showForm ? (
                <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                  <h3 className="text-2xl font-bold text-white">
                    {editingItem ? 'Edit Item' : 'Add New Item'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-white mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => {
                          setFormData({ ...formData, title: e.target.value });
                          if (formErrors.title) {
                            setFormErrors({ ...formErrors, title: '' });
                          }
                        }}
                        placeholder="Enter title"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition"
                      />
                      {formErrors.title && (
                        <p className="text-red-400 text-sm mt-1">{formErrors.title}</p>
                      )}
                    </div>

                    {/* Excerpt */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-white mb-2">
                        Excerpt *
                      </label>
                      <textarea
                        value={formData.excerpt}
                        onChange={(e) => {
                          setFormData({ ...formData, excerpt: e.target.value });
                          if (formErrors.excerpt) {
                            setFormErrors({ ...formErrors, excerpt: '' });
                          }
                        }}
                        placeholder="Enter excerpt"
                        rows={2}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition resize-none"
                      />
                      {formErrors.excerpt && (
                        <p className="text-red-400 text-sm mt-1">{formErrors.excerpt}</p>
                      )}
                    </div>

                    {activeTab === 'blogs' && (
                      <>
                        {/* Content */}
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-white mb-2">
                            Content *
                          </label>
                          <textarea
                            value={formData.content}
                            onChange={(e) => {
                              setFormData({ ...formData, content: e.target.value });
                              if (formErrors.content) {
                                setFormErrors({ ...formErrors, content: '' });
                              }
                            }}
                            placeholder="Enter blog content"
                            rows={6}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition resize-none"
                          />
                          {formErrors.content && (
                            <p className="text-red-400 text-sm mt-1">{formErrors.content}</p>
                          )}
                        </div>

                        {/* Author */}
                        <div>
                          <label className="block text-sm font-semibold text-white mb-2">
                            Author *
                          </label>
                          <input
                            type="text"
                            value={formData.author}
                            onChange={(e) => {
                              setFormData({ ...formData, author: e.target.value });
                              if (formErrors.author) {
                                setFormErrors({ ...formErrors, author: '' });
                              }
                            }}
                            placeholder="Enter author name"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition"
                          />
                          {formErrors.author && (
                            <p className="text-red-400 text-sm mt-1">{formErrors.author}</p>
                          )}
                        </div>

                        {/* Date */}
                        <div>
                          <label className="block text-sm font-semibold text-white mb-2">
                            Date *
                          </label>
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => {
                              setFormData({ ...formData, date: e.target.value });
                              if (formErrors.date) {
                                setFormErrors({ ...formErrors, date: '' });
                              }
                            }}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition"
                          />
                          {formErrors.date && (
                            <p className="text-red-400 text-sm mt-1">{formErrors.date}</p>
                          )}
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-white mb-2">
                            Image URL *
                          </label>
                          <input
                            type="url"
                            value={formData.image}
                            onChange={(e) => {
                              setFormData({ ...formData, image: e.target.value });
                              if (formErrors.image) {
                                setFormErrors({ ...formErrors, image: '' });
                              }
                            }}
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition"
                          />
                          {formErrors.image && (
                            <p className="text-red-400 text-sm mt-1">{formErrors.image}</p>
                          )}
                        </div>
                      </>
                    )}

                    {activeTab === 'links' && (
                      <>
                        {/* URL */}
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-white mb-2">
                            URL *
                          </label>
                          <input
                            type="url"
                            value={formData.url}
                            onChange={(e) => {
                              setFormData({ ...formData, url: e.target.value });
                              if (formErrors.url) {
                                setFormErrors({ ...formErrors, url: '' });
                              }
                            }}
                            placeholder="https://example.com"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition"
                          />
                          {formErrors.url && (
                            <p className="text-red-400 text-sm mt-1">{formErrors.url}</p>
                          )}
                        </div>
                      </>
                    )}

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => {
                          setFormData({ ...formData, category: e.target.value });
                          setShowCustomCategory(e.target.value === 'Other');
                          if (formErrors.category) {
                            setFormErrors({ ...formErrors, category: '' });
                          }
                        }}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition [color-scheme:dark]"
                      >
                        <option value="AI Marketing" style={{backgroundColor: '#0A0E27', color: 'white'}}>AI Marketing</option>
                        <option value="Funnels" style={{backgroundColor: '#0A0E27', color: 'white'}}>Funnels</option>
                        <option value="SEO & AEO" style={{backgroundColor: '#0A0E27', color: 'white'}}>SEO & AEO</option>
                        <option value="AI Content" style={{backgroundColor: '#0A0E27', color: 'white'}}>AI Content</option>
                        <option value="Paid Ads" style={{backgroundColor: '#0A0E27', color: 'white'}}>Paid Ads</option>
                        <option value="Business Tips" style={{backgroundColor: '#0A0E27', color: 'white'}}>Business Tips</option>
                        <option value="Tutorial" style={{backgroundColor: '#0A0E27', color: 'white'}}>Tutorial</option>
                        <option value="AI Tool" style={{backgroundColor: '#0A0E27', color: 'white'}}>AI Tool</option>
                        <option value="Market Research" style={{backgroundColor: '#0A0E27', color: 'white'}}>Market Research</option>
                        <option value="Social Media" style={{backgroundColor: '#0A0E27', color: 'white'}}>Social Media</option>
                        <option value="Other" style={{backgroundColor: '#0A0E27', color: 'white'}}>Other</option>
                      </select>
                      {formErrors.category && (
                        <p className="text-red-400 text-sm mt-1">{formErrors.category}</p>
                      )}
                    </div>

                    {showCustomCategory && (
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">
                          Enter Category Name *
                        </label>
                        <input
                          type="text"
                          value={formData.customCategory}
                          onChange={(e) => {
                            setFormData({ ...formData, customCategory: e.target.value });
                          }}
                          placeholder="Enter custom category"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00D4FF]/50 transition"
                    >
                      {editingItem ? 'Update' : 'Add'}
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  {/* Slider */}
                  {currentItems.length > 0 ? (
                    <div className="mb-8">
                      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-6">
                        {displayItem && (
                          <div>
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                  {displayItem.title}
                                </h3>
                                <div className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-semibold rounded-full inline-block">
                                  {displayItem.category}
                                </div>
                              </div>
                            </div>

                            <p className="text-white/80 mb-4">
                              {displayItem.excerpt}
                            </p>

                            {activeTab === 'blogs' && (
                              <div className="flex items-center justify-between text-sm text-white/60 mb-6">
                                <div>{(displayItem as BlogData).author}</div>
                                <div>{(displayItem as BlogData).date}</div>
                              </div>
                            )}

                            {activeTab === 'links' && (
                              <a
                                href={(displayItem as ExternalLinkData).url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00D4FF] hover:underline text-sm font-semibold mb-6 block"
                              >
                                Visit Link →
                              </a>
                            )}

                            <div className="flex space-x-4">
                              <button
                                onClick={() => handleEdit(displayItem)}
                                className="flex items-center space-x-2 px-4 py-2 bg-[#00D4FF]/20 text-[#00D4FF] rounded-lg hover:bg-[#00D4FF]/30 transition"
                              >
                                <Edit2 className="w-4 h-4" />
                                <span>Edit</span>
                              </button>
                              <button
                                onClick={() => handleDelete(displayItem.id)}
                                className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition"
                              >
                                <Trash2 className="w-4 h-4" />
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Slider Controls */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                          disabled={currentSlide === 0}
                          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="flex-1 text-center">
                          <p className="text-white/70 text-sm">
                            {currentSlide + 1} of {currentItems.length}
                          </p>
                        </div>

                        <button
                          onClick={() => setCurrentSlide(Math.min(currentItems.length - 1, currentSlide + 1))}
                          disabled={currentSlide === currentItems.length - 1}
                          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>

                      {/* Dots */}
                      <div className="flex justify-center space-x-2 mt-4">
                        {currentItems.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-2 h-2 rounded-full transition ${
                              idx === currentSlide
                                ? 'bg-[#00D4FF]'
                                : 'bg-white/30 hover:bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-white/60 mb-6">
                        No {activeTab === 'blogs' ? 'blogs' : 'external links'} yet
                      </p>
                    </div>
                  )}

                  {/* Add New Button */}
                  <button
                    onClick={handleAddNew}
                    className="w-full py-3 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00D4FF]/50 transition flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add New {activeTab === 'blogs' ? 'Blog' : 'External Link'}</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
