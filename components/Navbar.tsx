'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

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
      {/* Top Left Corner */}
      <span className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-orange-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-2.5 group-hover:h-2.5"></span>
      {/* Bottom Right Corner */}
      <span className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-orange-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-2.5 group-hover:h-2.5"></span>
    </Link>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Add global styles with animations */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        body::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Remove any focus outlines */
        nav *:focus,
        nav *:focus-visible {
          outline: none !important;
          box-shadow: none !important;
        }

        /* Keyframe Animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
      
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
            outline: 'none',
            animation: 'fadeInDown 0.8s ease-out'
          }}
        >
          {/* Logo Section with animation */}
          <div 
            className={`flex items-center gap-2 ${isScrolled ? 'hidden lg:hidden' : 'block'}`}
            style={{ animation: 'slideInFromLeft 0.8s ease-out' }}
          >
            <Logo />
          </div>

          {/* Desktop Links with staggered animation */}
          <div className="hidden lg:flex items-center gap-1"> 
            <NavLink href="/" delay={0.1}>Home</NavLink>
            
            {/* Solutions Dropdown */}
            <div className="relative group" style={{ animation: 'fadeInDown 0.6s ease-out 0.2s both' }}>
              <NavLink href="/solutions" hasDropdown delay={0}>Solutions</NavLink>
              <div className="absolute top-full left-0 mt-2 w-[340px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 opacity-0 invisible transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="grid gap-1">
                  <DropdownItemsList />
                </div>
              </div>
            </div>

            <NavLink href="#technology" delay={0.3}>Technology</NavLink>
            <NavLink href="#experience" delay={0.4}>Experience</NavLink>
            <NavLink href="#blogs" delay={0.5}>Blogs</NavLink>
            <NavLink href="#about" delay={0.6}>About us</NavLink>
            <NavLink href="#contact" delay={0.7}>Contact</NavLink>
          </div>

          {/* Action Buttons with animation */}
          <div 
            className={`hidden lg:flex items-center gap-3 ${isScrolled ? 'pl-4 border-l border-slate-200 ml-2' : ''}`}
            style={{ animation: 'scaleIn 0.6s ease-out 0.8s both' }}
          >
            <Link href="/emoji-generator">
              <button className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group ${
                  isScrolled ? 'bg-slate-900 text-white' : 'bg-[#0f172a] text-white'
              }`}>
                <span className="relative z-10">Emoji Tool</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer"></span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle with animation */}
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

      {/* Mobile Menu Overlay with staggered items */}
      <div className={`fixed inset-0 z-30 bg-white/98 backdrop-blur-xl transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden flex flex-col pt-24 px-8 gap-6 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)} 
          className="text-xl font-semibold text-slate-800 hover:text-orange-500 transition-all duration-300 hover:translate-x-2"
          style={{ 
            animation: isMobileMenuOpen ? 'slideInFromLeft 0.4s ease-out 0.1s both' : 'none' 
          }}
        >
          Home
        </Link>
        
        <div 
          className="w-full"
          style={{ 
            animation: isMobileMenuOpen ? 'slideInFromLeft 0.4s ease-out 0.2s both' : 'none' 
          }}
        >
          <button 
            onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)} 
            className="flex items-center justify-between w-full text-xl font-semibold text-slate-800 hover:text-orange-500 transition-all duration-300 hover:translate-x-2"
          >
            Solutions
            <svg className={`w-5 h-5 transition-transform duration-300 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${isMobileSolutionsOpen ? 'max-h-[400px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid gap-2 pl-2"><DropdownItemsList mobile /></div>
          </div>
        </div>

        {['Technology', 'Experience', 'Blogs', 'About us', 'Contact'].map((item, index) => (
          <Link 
            key={item}
            href={`#${item.toLowerCase().replace(' ', '')}`}
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-xl font-semibold text-slate-800 hover:text-orange-500 transition-all duration-300 hover:translate-x-2"
            style={{ 
              animation: isMobileMenuOpen ? `slideInFromLeft 0.4s ease-out ${0.3 + index * 0.1}s both` : 'none' 
            }}
          >
            {item}
          </Link>
        ))}

        <Link 
          href="/emoji-generator"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <button 
            className="bg-[#0f172a] text-white text-sm font-bold px-8 py-3 rounded-full mt-4 w-full transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
            style={{ 
              animation: isMobileMenuOpen ? 'scaleIn 0.5s ease-out 0.8s both' : 'none' 
            }}
          >
            <span className="relative z-10">Emoji Tool</span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </Link>
      </div>
    </>
  );
}

function DropdownItemsList({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <DropdownItem title="Web Development" desc="Modern web apps built with React & Next.js" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />} color="bg-purple-50 text-purple-600" delay={0} />
      <DropdownItem title="Mobile Apps" desc="Native iOS & Android solutions" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />} color="bg-blue-50 text-blue-600" delay={0.05} />
      <DropdownItem title="AI Integration" desc="Smart automation & ML tools" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />} color="bg-pink-50 text-pink-600" delay={0.1} />
      <DropdownItem title="Cloud Services" desc="Scalable infrastructure management" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />} color="bg-indigo-50 text-indigo-600" delay={0.15} />
    </>
  );
}

function DropdownItem({ title, desc, icon, color, delay }: { title: string; desc: string; icon: React.ReactNode; color: string; delay: number }) {
  return (
    <Link 
      href="#" 
      className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-all duration-300 group/item hover:translate-x-1"
      style={{
        animation: `slideInFromLeft 0.3s ease-out ${delay}s both`
      }}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${color} transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-6`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-800 group-hover/item:text-orange-500 transition-colors duration-300">{title}</h4>
        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{desc}</p>
      </div>
    </Link>
  );
}