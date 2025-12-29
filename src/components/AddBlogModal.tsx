import { useState } from 'react';
import { X, Lock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const BLOG_PASSCODE = "trivro2025";

interface AddBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBlog: (blog: {
    title: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    date: string;
    category: string;
  }) => void;
}

export default function AddBlogModal({ isOpen, onClose, onAddBlog }: AddBlogModalProps) {
  const [step, setStep] = useState<'passcode' | 'form'>('passcode');
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    category: 'AI Marketing',
    customCategory: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasscodeError('');

    if (passcode.toLowerCase() === BLOG_PASSCODE.toLowerCase()) {
      setStep('form');
      setPasscode('');
    } else {
      setPasscodeError('Incorrect passcode. Please try again.');
      setPasscode('');
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.title.trim()) errors.title = 'Title is required';
    if (!formData.excerpt.trim()) errors.excerpt = 'Excerpt is required';
    if (!formData.content.trim()) errors.content = 'Content is required';
    if (!formData.image.trim()) errors.image = 'Image URL is required';
    if (!formData.author.trim()) errors.author = 'Author name is required';
    if (!formData.date) errors.date = 'Date is required';
    const finalCategory = formData.category === 'Other' ? formData.customCategory : formData.category;
    if (!finalCategory.trim()) errors.category = 'Category is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate a slight delay for submission
      await new Promise(resolve => setTimeout(resolve, 500));
      const finalCategory = formData.category === 'Other' ? formData.customCategory : formData.category;
      const blogData = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        image: formData.image,
        author: formData.author,
        date: formData.date,
        category: finalCategory
      };
      onAddBlog(blogData);
      handleModalClose();
    } catch (error) {
      console.error('Error adding blog:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setStep('passcode');
    setPasscode('');
    setPasscodeError('');
    setShowCustomCategory(false);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      author: '',
      date: new Date().toISOString().split('T')[0],
      category: 'AI Marketing',
      customCategory: ''
    });
    setFormErrors({});
    onClose();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Show/hide custom category input
    if (name === 'category') {
      setShowCustomCategory(value === 'Other');
    }
    
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent className="max-w-2xl w-[90vw] bg-[#0A0E27] border-white/10 text-white p-0 overflow-hidden sm:rounded-3xl max-h-[90vh] flex flex-col">
        <div className="flex-1 overflow-y-auto bg-[#0A0E27] custom-scrollbar min-h-0">
          <div className="p-8 sm:p-12">
            <div className="flex justify-between items-center mb-8">
              <DialogTitle className="text-3xl font-bold text-white">
                {step === 'passcode' ? 'Verify Access' : 'Add New Blog'}
              </DialogTitle>
              <button
                onClick={handleModalClose}
                className="p-2 hover:bg-white/10 rounded-full transition"
              >
                <X className="w-6 h-6 text-white/70 hover:text-white" />
              </button>
            </div>

            {step === 'passcode' ? (
              <form onSubmit={handlePasscodeSubmit} className="space-y-6">
                <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#00FFA3]/10 border border-[#00D4FF]/20 rounded-2xl p-6 mb-6">
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
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Title */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-white mb-2">
                      Blog Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter blog title"
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
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      placeholder="Enter brief excerpt"
                      rows={2}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition resize-none"
                    />
                    {formErrors.excerpt && (
                      <p className="text-red-400 text-sm mt-1">{formErrors.excerpt}</p>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-white mb-2">
                      Content *
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      placeholder="Enter full blog content"
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
                      Author Name *
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
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
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition"
                    />
                    {formErrors.date && (
                      <p className="text-red-400 text-sm mt-1">{formErrors.date}</p>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition [color-scheme:dark]"
                    >
                      <option value="AI Marketing" style={{backgroundColor: '#0A0E27', color: 'white'}}>AI Marketing</option>
                      <option value="Funnels" style={{backgroundColor: '#0A0E27', color: 'white'}}>Funnels</option>
                      <option value="SEO & AEO" style={{backgroundColor: '#0A0E27', color: 'white'}}>SEO & AEO</option>
                      <option value="AI Content" style={{backgroundColor: '#0A0E27', color: 'white'}}>AI Content</option>
                      <option value="Paid Ads" style={{backgroundColor: '#0A0E27', color: 'white'}}>Paid Ads</option>
                      <option value="Business Tips" style={{backgroundColor: '#0A0E27', color: 'white'}}>Business Tips</option>
                      <option value="Tutorial" style={{backgroundColor: '#0A0E27', color: 'white'}}>Tutorial</option>
                      <option value="Other" style={{backgroundColor: '#0A0E27', color: 'white'}}>Other</option>
                    </select>
                    {formErrors.category && (
                      <p className="text-red-400 text-sm mt-1">{formErrors.category}</p>
                    )}
                  </div>

                  {/* Custom Category Input */}
                  {showCustomCategory && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-white mb-2">
                        Enter Category Name *
                      </label>
                      <input
                        type="text"
                        name="customCategory"
                        value={formData.customCategory}
                        onChange={handleInputChange}
                        placeholder="Enter your custom category"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition"
                      />
                    </div>
                  )}

                  {/* Image URL */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-white mb-2">
                      Image URL *
                    </label>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/50 transition"
                    />
                    {formErrors.image && (
                      <p className="text-red-400 text-sm mt-1">{formErrors.image}</p>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep('passcode')}
                    className="flex-1 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00D4FF]/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Adding...' : 'Add Blog'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
