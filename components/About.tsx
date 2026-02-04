'use client';
import { useState, useEffect, useRef } from 'react';

// The lines that will be "typed" in the terminal
const terminalLines = [
  { text: "Initializing CodeOrbis Core Systems...", color: "text-slate-500" },
  { text: "> Connecting to Cloud PBX Clusters...", color: "text-blue-600 font-semibold" },
  { text: "> Optimizing Asterisk SIP Trunks...", color: "text-purple-600" },
  { text: "> Syncing Laravel Management Node...", color: "text-orange-500" },
  { text: "> Verifying Security Protocols...", color: "text-slate-500" },
  { text: "✔ System Ready. 99.9% Uptime Verified.", color: "text-emerald-600 font-bold" },
];

export default function About() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        // If we showed all lines, wait a bit then reset to 0 to loop
        if (prev >= terminalLines.length) {
          setTimeout(() => setVisibleLines(0), 2000); // Wait 2s before clearing
          return prev; 
        }
        return prev + 1;
      });
    }, 800); // New line every 800ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative w-full py-24 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 right-[15%] w-[350px] h-[350px] bg-purple-100/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
      
      {/* Floating Particles */}
      <div className="absolute top-40 right-[20%] w-2 h-2 bg-blue-400/30 rounded-full animate-[floatParticle_9s_ease-in-out_infinite]" />
      <div className="absolute top-60 left-[25%] w-3 h-3 bg-purple-400/30 rounded-full animate-[floatParticle_11s_ease-in-out_infinite_1s]" />
      <div className="absolute bottom-40 right-[30%] w-2.5 h-2.5 bg-orange-400/30 rounded-full animate-[floatParticle_10s_ease-in-out_infinite_2s]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE: Text Content with Animations */}
        <div className="space-y-8">
          <div>
            <h2 
              className={`text-blue-600 font-bold tracking-widest text-sm mb-3 uppercase transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Who We Are
            </h2>
            <h3 
              className={`text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              Engineering the <br />
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                style={{
                  backgroundSize: '200% auto',
                  animation: isVisible ? 'gradientShift 3s ease infinite' : 'none'
                }}
              >
                Digital Future.
              </span>
            </h3>
          </div>

          <p 
            className={`text-lg text-slate-500 leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            At CodeOrbis, we don't just write code; we architect ecosystems. Born from a passion for <strong className="text-slate-800">Linux infrastructure</strong> and <strong className="text-slate-800">VoIP telephony</strong>, we have evolved into a full-stack powerhouse capable of handling the most complex cloud challenges.
          </p>

          <p 
            className={`text-lg text-slate-500 leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Whether it's optimizing low-level kernel parameters for high-frequency trading or designing user-friendly interfaces for telehealth, our mission remains the same: <strong className="text-slate-800">Stability, Speed, and Security.</strong>
          </p>

          {/* Stats Row with Animation */}
          <div 
            className={`flex items-center gap-12 pt-6 border-t border-slate-100 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="group">
              <h4 className="text-4xl font-extrabold text-slate-900 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600">
                500+
              </h4>
              <p className="text-sm text-slate-500 mt-1 font-medium group-hover:text-slate-600 transition-colors">
                VoIP Systems Deployed
              </p>
            </div>
            <div className="w-[1px] h-12 bg-slate-200"></div>
            <div className="group">
              <h4 className="text-4xl font-extrabold text-slate-900 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-600">
                99.9%
              </h4>
              <p className="text-sm text-slate-500 mt-1 font-medium group-hover:text-slate-600 transition-colors">
                Uptime Guarantee
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Light Theme Terminal with Enhanced Animations */}
        <div 
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-12 rotate-3'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          {/* Decorative Blob with Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl -z-10 opacity-60 animate-pulse"></div>

          {/* Secondary Glow */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-2xl opacity-20 animate-[float_6s_ease-in-out_infinite]" />

          {/* Terminal Window */}
          <div className="w-full bg-slate-50 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 group">
            
            {/* Window Header */}
            <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400 transition-transform duration-300 group-hover:scale-125"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400 transition-transform duration-300 group-hover:scale-125"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 transition-transform duration-300 group-hover:scale-125"></div>
              </div>
              <div className="text-xs font-mono text-slate-400">root@codeorbis-server:~</div>
              <div className="w-4"></div>
            </div>

            {/* Terminal Content Area */}
            <div className="p-6 font-mono text-sm h-[320px] flex flex-col justify-end">
              <div className="space-y-3">
                
                {/* Static Start Command with Animation */}
                <div className="flex items-center gap-2 text-slate-400 border-b border-slate-100 pb-2 mb-4 animate-[slideDown_0.5s_ease-out]">
                  <span>$</span>
                  <span className="text-slate-800">./deploy_infrastructure.sh --verbose</span>
                </div>

                {/* Animated Lines with Stagger */}
                {terminalLines.map((line, index) => (
                  <div 
                    key={index} 
                    className={`transition-all duration-500 ${
                      index < visibleLines ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 hidden'
                    }`}
                  >
                    <span className={line.color}>{line.text}</span>
                  </div>
                ))}

                {/* Blinking Cursor */}
                <div className={`flex items-center gap-2 transition-opacity duration-300 ${visibleLines >= terminalLines.length ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="text-slate-400">{'>'}</span>
                  <span className="w-2 h-4 bg-blue-500 animate-[blink_1s_step-end_infinite]"></span>
                </div>

              </div>
            </div>
          </div>
          
          {/* Floating Badge with Enhanced Animation */}
          <div 
            className={`absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 transition-all duration-1000 hover:scale-110 hover:shadow-2xl cursor-pointer ${
              isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-12'
            }`}
            style={{ 
              transitionDelay: '0.8s',
              animation: isVisible ? 'float 3s ease-in-out infinite' : 'none'
            }}
          >
             <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
             </div>
             <div>
                <div className="text-xs text-slate-400 font-bold uppercase">Speed</div>
                <div className="text-sm font-bold text-slate-800">Optimized</div>
             </div>
          </div>

        </div>

      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          33% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 0.3;
          }
          66% { 
            transform: translateY(-10px) translateX(-10px);
            opacity: 0.25;
          }
        }

        @keyframes floatParticle {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translate(20px, -30px) scale(1.2);
            opacity: 0.5;
          }
          50% { 
            transform: translate(-10px, -50px) scale(0.8);
            opacity: 0.2;
          }
          75% { 
            transform: translate(30px, -20px) scale(1.1);
            opacity: 0.4;
          }
        }

        @keyframes gradientShift {
          0%, 100% { 
            background-position: 0% 50%;
          }
          50% { 
            background-position: 100% 50%;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}