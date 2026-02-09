'use client';
import { useState, useEffect, useRef } from 'react';

// Blog Data (Remain same)
const blogPosts = [
  {
    id: 1,
    category: "Healthcare",
    title: "Telehealth Portal Revolution",
    description: "A deep dive into how we built a HIPAA-compliant video consultation platform for a national healthcare provider, reducing wait times by 40%.",
    date: "Oct 24, 2025",
    icon: (
      <svg className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
    color: "bg-blue-100 text-blue-600",
    hoverBg: "group-hover:bg-blue-50",
    hoverBorder: "group-hover:border-blue-200",
    hoverShadow: "group-hover:shadow-blue-200/50",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-slate-800">The Challenge</h4>
        <p className="text-slate-600">The client needed a secure, scalable way to connect patients with doctors remotely.</p>
      </div>
    )
  },
  {
    id: 2,
    category: "Manufacturing",
    title: "Predictive Maintenance AI",
    description: "Using TensorFlow to predict machinery failure for a manufacturing giant, saving them over 30% in operational repair costs.",
    date: "Nov 12, 2025",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
    color: "bg-purple-100 text-purple-600",
    hoverBg: "group-hover:bg-purple-50",
    hoverBorder: "group-hover:border-purple-200",
    hoverShadow: "group-hover:shadow-purple-200/50",
    fullContent: <p>Full content here...</p>
  },
  {
    id: 3,
    category: "Finance",
    title: "Blockchain Payment Gateway",
    description: "Implementing a secure cryptocurrency payment system for e-commerce platforms with real-time transaction tracking.",
    date: "Dec 5, 2025",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    color: "bg-green-100 text-green-600",
    hoverBg: "group-hover:bg-green-50",
    hoverBorder: "group-hover:border-green-200",
    hoverShadow: "group-hover:shadow-green-200/50",
    fullContent: <p>Full content here...</p>
  },
  {
    id: 4,
    category: "Education",
    title: "AI-Powered Learning Platform",
    description: "Creating personalized learning experiences with adaptive AI algorithms that improve student engagement by 60%.",
    date: "Jan 15, 2026",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
    color: "bg-amber-100 text-amber-600",
    hoverBg: "group-hover:bg-amber-50",
    hoverBorder: "group-hover:border-amber-200",
    hoverShadow: "group-hover:shadow-amber-200/50",
    fullContent: <p>Full content here...</p>
  },
  {
    id: 5,
    category: "Retail",
    title: "Smart Inventory Management",
    description: "Revolutionizing retail operations with IoT sensors and ML algorithms for real-time stock optimization.",
    date: "Feb 1, 2026",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    ),
    color: "bg-rose-100 text-rose-600",
    hoverBg: "group-hover:bg-rose-50",
    hoverBorder: "group-hover:border-rose-200",
    hoverShadow: "group-hover:shadow-rose-200/50",
    fullContent: <p>Full content here...</p>
  }
];

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogPosts[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  // Sliding Logic for Desktop
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const cardWidth = 380; // Approximate width of one card + gap
      const scrollTo = direction === 'left' 
        ? scrollLeft - cardWidth 
        : scrollLeft + cardWidth;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="blogs" ref={sectionRef} className="relative w-full py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
          <div>
            <h2 className={`text-blue-600 font-bold tracking-widest text-sm mb-3 uppercase transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Insights & News</h2>
            <h3 className={`text-4xl font-extrabold text-slate-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Recent Updates</h3>
          </div>
        </div>

        <div className="relative">
          
          {/* Sliding Arrows - Visible on Desktop when scrollable */}
          {canScrollLeft && (
            <button 
              onClick={() => scroll('left')}
              className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white shadow-2xl rounded-full items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 hover:shadow-blue-200/50 transition-all duration-300 border-2 border-slate-200 hover:border-blue-300"
              aria-label="Scroll Left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}

          {canScrollRight && (
            <button 
              onClick={() => scroll('right')}
              className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white shadow-2xl rounded-full items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 hover:shadow-blue-200/50 transition-all duration-300 border-2 border-slate-200 hover:border-blue-300"
              aria-label="Scroll Right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          )}

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
          >
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                className={`flex-shrink-0 w-[calc(33.333%-1.5rem)] min-w-[320px] snap-start bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col items-start hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden ${post.hoverBorder} ${post.hoverShadow} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
                onClick={() => setSelectedBlog(post)}
              >
                <div className={`absolute inset-0 ${post.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                <div className={`w-12 h-12 rounded-2xl ${post.color} flex items-center justify-center mb-6`}>{post.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{post.description}</p>
                <div className="w-full flex items-center justify-between border-t border-slate-100 pt-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{post.date}</span>
                  <button className="text-sm font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Logic */}
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedBlog(null)}></div>
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8 md:p-12 overflow-y-auto max-h-[90vh] no-scrollbar animate-slideUp">
               <button 
                 onClick={() => setSelectedBlog(null)} 
                 className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 text-2xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-all"
               >
                 ✕
               </button>
               <div className={`w-12 h-12 rounded-2xl ${selectedBlog.color} flex items-center justify-center mb-6`}>
                 {selectedBlog.icon}
               </div>
               <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{selectedBlog.category}</span>
               <h2 className="text-3xl font-extrabold text-slate-900 mb-4 mt-2">{selectedBlog.title}</h2>
               <span className="text-sm text-slate-500 mb-6 block">{selectedBlog.date}</span>
               <div className="prose prose-slate max-w-none">{selectedBlog.fullContent}</div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        #blogs .no-scrollbar::-webkit-scrollbar { display: none; }
        #blogs .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}