'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

// Solution Modal Component
const SolutionModal = ({ 
  isOpen, 
  onClose, 
  title, 
  desc, 
  icon, 
  color 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  desc: string; 
  icon: React.ReactNode; 
  color: string; 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-lg md:max-w-xl lg:max-w-3xl w-full max-h-[85vh] md:max-h-[90vh] overflow-y-auto animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-300 hover:rotate-90 z-10"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="p-4 md:p-6 lg:p-8 pb-3 md:pb-4 lg:pb-6 border-b border-slate-100">
          <div className="flex items-start gap-3 md:gap-4">
            <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl flex items-center justify-center ${color} shrink-0`}>
              <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {icon}
              </svg>
            </div>
            <div className="pr-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-1 md:mb-2">{title}</h2>
              <p className="text-slate-600 text-xs md:text-sm lg:text-base">{desc}</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 md:p-6 lg:p-8">
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-2 md:mb-3">Overview</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We provide comprehensive {title.toLowerCase()} services tailored to your business needs. 
                Our expert team delivers cutting-edge solutions that drive growth and innovation.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-2 md:mb-3">Key Features</h3>
              <ul className="space-y-2 md:space-y-2.5 lg:space-y-3">
                {getFeatures(title).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-slate-700 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-2 md:mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {getTechnologies(title).map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-100 text-slate-700 rounded-full text-xs md:text-sm font-medium hover:bg-slate-200 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 md:pt-5 lg:pt-6 border-t border-slate-100">
              <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm md:text-base font-bold py-3 md:py-3.5 lg:py-4 rounded-xl md:rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                Get Started with {title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions for modal content
const getFeatures = (title: string) => {
  const features: Record<string, string[]> = {
    'Web Development': [
      'Responsive design that works on all devices',
      'SEO-optimized for better search rankings',
      'Fast loading times and optimal performance',
      'Scalable architecture for future growth'
    ],
    'Mobile Apps': [
      'Native iOS and Android development',
      'Cross-platform solutions with React Native',
      'Intuitive user interface design',
      'Seamless integration with backend services'
    ],
    'AI Integration': [
      'Custom machine learning models',
      'Natural language processing',
      'Predictive analytics and insights',
      'Automated workflow optimization'
    ],
    'Cloud Services': [
      'AWS, Azure, and Google Cloud expertise',
      'Auto-scaling infrastructure',
      'Security and compliance management',
      'Cost optimization strategies'
    ]
  };
  return features[title] || [];
};

const getTechnologies = (title: string) => {
  const tech: Record<string, string[]> = {
    'Web Development': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    'Mobile Apps': ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase'],
    'AI Integration': ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Python'],
    'Cloud Services': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes']
  };
  return tech[title] || [];
};

// Helper component for the "Corner" Hover Effect with Animation
const NavLink = ({ href, children, hasDropdown = false, delay = 0 }: { href: string; children: React.ReactNode; hasDropdown?: boolean; delay?: number }) => {
  return (
    <Link 
      href={href} 
      className="relative group px-3 py-2 inline-block"
      style={{
        animation: `fadeInDown 0.6s ease-out ${delay}s both`
      }}
    >
      <span className="relative z-10 text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-orange-500 flex items-center gap-1 whitespace-nowrap">
        {children}
        {hasDropdown && (
          <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </span>
      <span className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-orange-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-2.5 group-hover:h-2.5"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-orange-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-2.5 group-hover:h-2.5"></span>
    </Link>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    desc: string;
    icon: React.ReactNode;
    color: string;
  }>({
    isOpen: false,
    title: '',
    desc: '',
    icon: null,
    color: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (title: string, desc: string, icon: React.ReactNode, color: string) => {
    setModalData({ isOpen: true, title, desc, icon, color });
    setIsMobileMenuOpen(false); // Close mobile menu if modal opens
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <>
      <style jsx global>{`
        body::-webkit-scrollbar { display: none; }
        body { -ms-overflow-style: none; scrollbar-width: none; }
        nav *:focus, nav *:focus-visible { outline: none !important; box-shadow: none !important; }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
      `}</style>
      
      <SolutionModal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        desc={modalData.desc}
        icon={modalData.icon}
        color={modalData.color}
      />

      <nav
        className={`fixed z-40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled
            ? 'top-4 left-1/2 -translate-x-1/2 w-auto max-w-[95vw]' 
            : 'top-0 left-0 w-full'
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'bg-white/90 text-slate-800 backdrop-blur-xl rounded-full px-6 py-2' 
              : 'bg-transparent text-slate-800 px-2 py-2 lg:px-12' 
          }`}
          style={{
            border: isScrolled ? '1px solid rgba(226, 232, 240, 0.6)' : 'none',
            boxShadow: isScrolled ? '0 20px 25px -5px rgba(226, 232, 240, 0.2), 0 10px 10px -5px rgba(226, 232, 240, 0.04)' : 'none',
            animation: 'fadeInDown 0.8s ease-out'
          }}
        >
          <div 
            className={`flex items-center gap-2 ${isScrolled ? 'hidden lg:hidden' : 'block'}`}
            style={{ animation: 'slideInFromLeft 0.8s ease-out' }}
          >
            <Logo />
          </div>

          <div className="hidden lg:flex items-center gap-1"> 
            <NavLink href="/" delay={0.1}>Home</NavLink>
            
            <div className="relative group" style={{ animation: 'fadeInDown 0.6s ease-out 0.2s both' }}>
              <NavLink href="/solutions" hasDropdown delay={0}>Solutions</NavLink>
              <div className="absolute top-full left-0 mt-2 w-[340px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 opacity-0 invisible transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="grid gap-1">
                  <DropdownItemsList openModal={openModal} />
                </div>
              </div>
            </div>

            <NavLink href="#technology" delay={0.3}>Technology</NavLink>
            <NavLink href="#experience" delay={0.4}>Experience</NavLink>
            <NavLink href="#blogs" delay={0.5}>Blogs</NavLink>
            <NavLink href="#about" delay={0.6}>About us</NavLink>
            <NavLink href="#contact" delay={0.7}>Contact</NavLink>
          </div>

          <div 
            className={`hidden lg:flex items-center gap-3 ${isScrolled ? 'pl-4 border-l border-slate-200 ml-2' : ''}`}
            style={{ animation: 'scaleIn 0.6s ease-out 0.8s both' }}
          >
            <Link href="/emoji-generator">
              <button className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group ${
                  isScrolled ? 'bg-slate-900 text-white' : 'bg-[#0f172a] text-white'
              }`}>
                <span className="relative z-10">Emoji</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer"></span>
              </button>
            </Link>
          </div>

          <button 
            className="lg:hidden text-2xl focus:outline-none transition-transform duration-300 hover:scale-110" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ animation: 'scaleIn 0.6s ease-out 0.3s both' }}
          >
            <span className={`text-slate-800 inline-block transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-30 bg-white/98 backdrop-blur-xl transform transition-all duration-500 lg:hidden flex flex-col pt-24 px-8 gap-6 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-semibold text-slate-800" style={{ animation: isMobileMenuOpen ? 'slideInFromLeft 0.4s ease-out 0.1s both' : 'none' }}>Home</Link>
        
        <div className="w-full" style={{ animation: isMobileMenuOpen ? 'slideInFromLeft 0.4s ease-out 0.2s both' : 'none' }}>
          <button onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)} className="flex items-center justify-between w-full text-xl font-semibold text-slate-800">
            Solutions
            <svg className={`w-5 h-5 transition-transform duration-300 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${isMobileSolutionsOpen ? 'max-h-[400px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid gap-2 pl-2"><DropdownItemsList mobile openModal={openModal} /></div>
          </div>
        </div>

        {['Technology', 'Experience', 'Blogs', 'About us', 'Contact'].map((item, index) => (
          <Link key={item} href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-semibold text-slate-800" style={{ animation: isMobileMenuOpen ? `slideInFromLeft 0.4s ease-out ${0.3 + index * 0.1}s both` : 'none' }}>{item}</Link>
        ))}
      </div>
    </>
  );
}

function DropdownItemsList({ openModal }: { mobile?: boolean; openModal: (title: string, desc: string, icon: React.ReactNode, color: string) => void }) {
  return (
    <>
      <DropdownItem 
        title="Web Development" 
        desc="Modern web apps built with React & Next.js" 
        icon={<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />} 
        color="bg-purple-50 text-purple-600" 
        delay={0} 
        openModal={openModal}
      />
      <DropdownItem 
        title="Mobile Apps" 
        desc="Native iOS & Android solutions" 
        icon={<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />} 
        color="bg-blue-50 text-blue-600" 
        delay={0.05} 
        openModal={openModal}
      />
      <DropdownItem 
        title="AI Integration" 
        desc="Smart automation & ML tools" 
        icon={<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />} 
        color="bg-pink-50 text-pink-600" 
        delay={0.1} 
        openModal={openModal}
      />
      <DropdownItem 
        title="Cloud Services" 
        desc="Scalable infrastructure management" 
        icon={<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />} 
        color="bg-indigo-50 text-indigo-600" 
        delay={0.15} 
        openModal={openModal}
      />
    </>
  );
}

function DropdownItem({ title, desc, icon, color, delay, openModal }: { title: string; desc: string; icon: React.ReactNode; color: string; delay: number; openModal: (title: string, desc: string, icon: React.ReactNode, color: string) => void; }) {
  return (
    <button
      onClick={() => openModal(title, desc, icon, color)}
      className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-all duration-300 group/item hover:translate-x-1 w-full text-left"
      style={{
        animation: `slideInFromLeft 0.3s ease-out ${delay}s both`
      }}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${color} transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-6`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">{icon}</svg>
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-800 group-hover/item:text-orange-500 transition-colors duration-300 mt-2">{title}</h4>
        {/* <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{desc}</p> */}
      </div>
    </button>
  );
}