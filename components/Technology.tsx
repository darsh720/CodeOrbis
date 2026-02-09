'use client';
import { useEffect, useRef, useState } from 'react';

// --- ICON COMPONENTS FOR REAL-TIME FEEL ---

const ReactIcon = () => (
  <svg className="w-8 h-8 transition-transform duration-500 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 21.5c4.97 0 9-2.16 9-5.5S16.97 10.5 12 10.5s-9 2.16-9 5.5 4.03 5.5 9 5.5z" />
    <path d="M12 2.5c4.97 0 9 2.16 9 5.5S16.97 13.5 12 13.5s-9-2.16-9-5.5 4.03-5.5 9-5.5z" transform="rotate(60 12 12)" />
    <path d="M12 2.5c4.97 0 9 2.16 9 5.5S16.97 13.5 12 13.5s-9-2.16-9-5.5 4.03-5.5 9-5.5z" transform="rotate(120 12 12)" />
  </svg>
);

const NodeIcon = () => (
  <svg className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L4.5 6.5V17.5L12 22L19.5 17.5V6.5L12 2Z" />
    <path d="M12 22V13" />
    <path d="M19.5 6.5L12 13L4.5 6.5" />
  </svg>
);

const PythonIcon = () => (
  <svg className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 14h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3v2.5" />
    <path d="M10 10H8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3v-2.5" />
    <path d="M9.5 9h.01" /><path d="M14.5 15h.01" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-8 h-8 transition-all duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const AsteriskIcon = () => (
  <svg className="w-8 h-8 transition-transform duration-500 group-hover:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-8 h-8 transition-transform duration-500 group-hover:translate-y-[-4px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5.05 15A6 6 0 0 1 12 4a6.5 6.5 0 0 1 5.95 9" />
    <path d="M5 15h14a5 5 0 1 0 0-10" />
  </svg>
);

const ChipIcon = () => (
  <svg className="w-8 h-8 transition-transform duration-500 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 9h6v6H9z" /><path d="M9 1V4" /><path d="M15 1V4" /><path d="M9 20V23" /><path d="M15 20V23" />
    <path d="M20 9h3" /><path d="M20 14h3" /><path d="M1 9h3" /><path d="M1 14h3" />
  </svg>
);

// --- DATA SLIDES ---

const techSlides = [
  {
    id: 0,
    category: "Front-End Engineering",
    description: "Building responsive, pixel-perfect user interfaces using the modern React ecosystem.",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    glowColor: "shadow-blue-500/50",
    mainIcon: <ReactIcon />, 
    techs: [
      { name: "Next.js / React", icon: <ReactIcon /> },
      { name: "Tailwind CSS", icon: <CloudIcon /> },
      { name: "TypeScript", icon: <code className="font-bold text-lg">TS</code> },
      { name: "Framer Motion", icon: <span className="font-bold text-lg">F</span> },
    ]
  },
  {
    id: 1,
    category: "Back-End Architecture",
    description: "Scalable server-side solutions designed for high concurrency and speed optimization.",
    color: "bg-purple-500",
    textColor: "text-purple-600",
    glowColor: "shadow-purple-500/50",
    mainIcon: <NodeIcon />,
    techs: [
      { name: "Node.js", icon: <NodeIcon /> },
      { name: "Python / Django", icon: <PythonIcon /> },
      { name: "PostgreSQL", icon: <DatabaseIcon /> },
      { name: "Redis", icon: <span className="font-bold text-lg">Rd</span> },
    ]
  },
  {
    id: 2,
    category: "Data Analytics & AI",
    description: "Transforming raw data into actionable insights with ML models and visualization.",
    color: "bg-emerald-500",
    textColor: "text-emerald-600",
    glowColor: "shadow-emerald-500/50",
    mainIcon: <ChartIcon />,
    techs: [
      { name: "Big Data", icon: <DatabaseIcon /> },
      { name: "Predictive AI", icon: <ChipIcon /> },
      { name: "Tableau / BI", icon: <ChartIcon /> },
      { name: "TensorFlow", icon: <PythonIcon /> },
    ]
  },
  {
    id: 3,
    category: "VoIP & Real-Time Comm",
    description: "Enterprise-grade telephony, SIP trunking, and WebRTC communication systems.",
    color: "bg-orange-500",
    textColor: "text-orange-600",
    glowColor: "shadow-orange-500/50",
    mainIcon: <AsteriskIcon />,
    techs: [
      { name: "Asterisk PBX", icon: <AsteriskIcon /> },
      { name: "WebRTC", icon: <CloudIcon /> },
      { name: "SIP Trunking", icon: <span className="font-bold text-lg">SIP</span> },
      { name: "Kamailio", icon: <span className="font-bold text-lg">K</span> },
    ]
  },
];

export default function Technology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollPosition = -top;
      
      // Check if section is in viewport
      if (top < window.innerHeight && top > -height) {
        setIsVisible(true);
      }
      
      // Adjusted calculation for smoother transition
      if (scrollPosition < 0) {
        setActiveSlide(0);
      } else {
        const currentStep = Math.floor((scrollPosition + window.innerHeight / 3) / window.innerHeight);
        setActiveSlide(Math.min(3, Math.max(0, currentStep)));
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="technology"
      ref={containerRef} 
      className="relative w-full bg-white mt-24 h-[400vh]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Animated Background Blob */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 transition-all duration-1000 ${techSlides[activeSlide].color} animate-[pulse_4s_ease-in-out_infinite]`} />
        
        {/* Secondary Blob for Depth */}
        <div className={`absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-5 transition-all duration-1000 ${techSlides[activeSlide].color} animate-[float_6s_ease-in-out_infinite]`} />

        {/* Floating Particles */}
        <div className={`absolute top-20 left-[10%] w-2 h-2 rounded-full ${techSlides[activeSlide].color} opacity-30 animate-[floatParticle_8s_ease-in-out_infinite]`} />
        <div className={`absolute top-40 right-[15%] w-3 h-3 rounded-full ${techSlides[activeSlide].color} opacity-20 animate-[floatParticle_10s_ease-in-out_infinite_2s]`} />
        <div className={`absolute bottom-32 left-[20%] w-2.5 h-2.5 rounded-full ${techSlides[activeSlide].color} opacity-25 animate-[floatParticle_9s_ease-in-out_infinite_1s]`} />
        <div className={`absolute bottom-20 right-[25%] w-2 h-2 rounded-full ${techSlides[activeSlide].color} opacity-30 animate-[floatParticle_7s_ease-in-out_infinite_3s]`} />

        <div className="relative z-10 max-w-5xl w-full px-6 mt-30 text-center">
          
          {/* Section Label with Fade-in */}
          <h2 
            className={`text-slate-400 font-bold tracking-widest text-sm mb-3 uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Technological Core
          </h2>

          {/* Main Title with Stagger */}
          <h3 
            className={`text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            The CodeOrbis Ecosystem
          </h3>

          {/* Dynamic Content Area */}
          <div className="transition-all duration-700 ease-in-out transform">
            
            {/* Main Center Icon with Scale Animation */}
            <div 
              className={`mx-auto w-24 h-24 rounded-3xl bg-white shadow-2xl border border-slate-100 flex items-center justify-center mb-5 transition-all duration-700 text-slate-700 ${techSlides[activeSlide].glowColor} ${
                isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-45'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className={`${techSlides[activeSlide].textColor} transition-all duration-700 transform scale-125 hover:scale-150 cursor-pointer`}>
                {techSlides[activeSlide].mainIcon}
              </div>
            </div>

            {/* Title with Slide Animation */}
            <h4 
              className={`text-3xl font-bold mb-4 transition-all duration-700 ${techSlides[activeSlide].textColor}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.4s'
              }}
            >
              {techSlides[activeSlide].category}
            </h4>

            {/* Description with Fade */}
            <p 
              className="text-slate-500 max-w-2xl mx-auto text-lg mb-5 leading-relaxed transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.5s'
              }}
            >
              {techSlides[activeSlide].description}
            </p>

            {/* Tech Grid (Cards) with Staggered Entrance */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techSlides[activeSlide].techs.map((tech, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white shadow-lg shadow-slate-200/50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center gap-4 hover:translate-y-[-8px] hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-pointer`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                    transitionDelay: `${0.6 + idx * 0.1}s`
                  }}
                >
                  {/* Icon with Hover Animation */}
                  <div className={`text-slate-400 group-hover:${techSlides[activeSlide].textColor} transition-all duration-500 group-hover:scale-110`}>
                    {tech.icon}
                  </div>
                  
                  {/* Tech Name */}
                  <span className="text-slate-700 font-semibold text-sm group-hover:text-slate-900 transition-colors duration-300">
                    {tech.name}
                  </span>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-45 transition-opacity duration-500 ${techSlides[activeSlide].color} blur-xl -z-10`} style={{ filter: 'blur(20px)' }} />
                </div>
              ))}
            </div>

          </div>

          {/* Progress Indicators (Dots) with Animation */}
          <div 
            className="flex justify-center gap-3 mt-20"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease-out',
              transitionDelay: '1s'
            }}
          >
            {techSlides.map((slide, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer hover:scale-125 ${
                  activeSlide === idx 
                    ? `w-8 ${slide.color}` 
                    : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to ${slide.category}`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div 
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1.2s' }}
          >
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Scroll to Explore</span>
            <svg 
              className="w-5 h-5 text-slate-400 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

        </div>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes floatParticle {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translate(20px, -30px) scale(1.2);
            opacity: 0.6;
          }
          50% { 
            transform: translate(-10px, -50px) scale(0.8);
            opacity: 0.4;
          }
          75% { 
            transform: translate(30px, -20px) scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
          }
          33% { 
            transform: translateY(-30px) translateX(20px);
          }
          66% { 
            transform: translateY(-15px) translateX(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1) translate(-50%, -50%);
            opacity: 0.1;
          }
          50% { 
            transform: scale(1.1) translate(-50%, -50%);
            opacity: 0.15;
          }
        }

        /* Remove scrollbar from horizontal overflow if any */
        #technology::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}