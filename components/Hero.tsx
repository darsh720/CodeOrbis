'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  // Animation State Logic
  const [activeStage, setActiveStage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animations
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 4000); // Change scene every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden pt-32 pb-20 lg:pt-25 lg:pb-32">
      
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl -z-10 opacity-60 animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-3xl -z-10 opacity-60 animate-[float_10s_ease-in-out_infinite_2s]" />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-[15%] w-3 h-3 bg-purple-400/30 rounded-full animate-[floatParticle_6s_ease-in-out_infinite]" />
      <div className="absolute top-40 right-[20%] w-2 h-2 bg-blue-400/30 rounded-full animate-[floatParticle_8s_ease-in-out_infinite_1s]" />
      <div className="absolute bottom-32 left-[25%] w-2.5 h-2.5 bg-pink-400/30 rounded-full animate-[floatParticle_7s_ease-in-out_infinite_2s]" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Text Content with Animations */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
          
          {/* Main Heading with Staggered Animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            <span 
              className={`inline-block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              The Future of
            </span>
            <br className="hidden lg:block" />
            <span 
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: '0.3s',
                backgroundSize: '200% auto',
                animation: isVisible ? 'gradientShift 3s ease infinite' : 'none'
              }}
            >
              Tech Solutions
            </span>
            <br className="hidden lg:block" />
            <span 
              className={`inline-block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.5s' }}
            >
              empowered by
            </span>
            <br className="hidden lg:block" />
            <span 
              className={`inline-block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.7s' }}
            >
              CodeOrbis.
            </span>
          </h1>

          {/* Description with Fade-in */}
          <p 
            className={`text-base sm:text-lg text-slate-500 max-w-lg leading-relaxed font-medium transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.9s' }}
          >
            CodeOrbis is a modern platform for managing and monitoring enterprise software stacks in real time. Full control, clear insights, and proactive maintenance.
          </p>

          {/* Buttons with Scale Animation */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: '1.1s' }}
          >
            <button className="group px-8 py-3.5 bg-[#0f172a] text-white rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Free Trial 
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            
            <button className="group px-8 py-3.5 bg-white text-slate-700 border-2 border-slate-200 rounded-full font-bold text-sm hover:bg-slate-50 transition-all hover:-translate-y-1 hover:border-slate-300 w-full sm:w-auto relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </span>
            </button>
          </div>

          {/* Trust Indicators with Slide-in Animation */}
          <div 
            className={`flex items-center gap-8 pt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '1.3s' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {i === 1 ? '👤' : i === 2 ? '👨' : '👩'}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 font-semibold">
                <span className="text-slate-900 font-bold">2.5K+</span> Active Users
              </p>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-4 h-4 text-yellow-400 animate-[scaleIn_0.3s_ease-out_both]"
                  style={{ animationDelay: `${1.5 + i * 0.1}s` }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Animated Dashboard Card */}
        <div 
          className={`relative group order-1 lg:order-2 flex justify-center lg:justify-end w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-12 rotate-3'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          
          {/* Decorative Backdrops with Pulse */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2rem] blur-2xl opacity-15 transform translate-y-6 scale-95 -z-10 animate-pulse" />
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-xl opacity-20 animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-xl opacity-20 animate-[float_8s_ease-in-out_infinite_1s]" />

          {/* Card Container with Hover Effect */}
          <div className="relative z-10 bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-slate-100 w-full max-w-[460px] h-[440px] flex flex-col transition-all duration-500 hover:shadow-[0_30px_60px_rgb(0,0,0,0.15)] hover:-translate-y-2">
            
            {/* Card Header with Slide Animation */}
            <div className="flex justify-between items-start mb-6 shrink-0">
              <div>
                <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-2 border border-indigo-100 transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-xs text-slate-400 font-semibold tracking-wide uppercase">System Status</p>
                <h3 className="text-xl font-bold text-slate-800 mt-0.5">Operational</h3>
              </div>
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-emerald-200 h-fit animate-[slideInRight_0.6s_ease-out]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                LIVE
              </span>
            </div>

            {/* Animation Window with Enhanced Transitions */}
            <div className="relative flex-grow bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-inner">
              
              {/* STAGE 1: Data Transfer (PC to PC) */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700 ${activeStage === 0 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-2'}`}>
                <div className="flex justify-between items-center w-full relative z-10">
                   {/* PC 1 */}
                   <div className="flex flex-col items-center gap-3 animate-[bounceIn_0.6s_ease-out]">
                      <div className="w-14 h-14 bg-white rounded-xl border-2 border-slate-200 shadow-sm flex items-center justify-center text-slate-700 transition-all duration-300 hover:scale-110 hover:border-blue-400 hover:shadow-lg">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-slate-500">HOST A</span>
                   </div>

                   {/* Moving Bits Pipeline */}
                   <div className="flex-1 h-12 relative flex items-center justify-center mx-2">
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200"></div>
                      <div className="flex gap-3 absolute animate-[moveRight_2s_linear_infinite]">
                         <span className="text-sm font-mono text-blue-600 font-bold bg-white px-1 shadow-sm rounded animate-pulse">0</span>
                         <span className="text-sm font-mono text-purple-600 font-bold bg-white px-1 shadow-sm rounded animate-pulse" style={{ animationDelay: '0.2s' }}>1</span>
                         <span className="text-sm font-mono text-blue-600 font-bold bg-white px-1 shadow-sm rounded animate-pulse" style={{ animationDelay: '0.4s' }}>0</span>
                         <span className="text-sm font-mono text-purple-600 font-bold bg-white px-1 shadow-sm rounded animate-pulse" style={{ animationDelay: '0.6s' }}>1</span>
                      </div>
                   </div>

                   {/* PC 2 */}
                   <div className="flex flex-col items-center gap-3 animate-[bounceIn_0.6s_ease-out_0.2s_both]">
                      <div className="w-14 h-14 bg-white rounded-xl border-2 border-slate-200 shadow-sm flex items-center justify-center text-slate-700 transition-all duration-300 hover:scale-110 hover:border-purple-400 hover:shadow-lg">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-slate-500">HOST B</span>
                   </div>
                </div>
                <div className="mt-8 px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full animate-[pulse_2s_ease-in-out_infinite]">
                   Transferring Data Packets...
                </div>
              </div>

              {/* STAGE 2: Code Writing (Terminal Style) */}
              <div className={`absolute inset-0 bg-[#1e293b] flex flex-col transition-all duration-700 ${activeStage === 1 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 -rotate-2'}`}>
                {/* Terminal Header */}
                <div className="bg-[#0f172a] px-4 py-2 flex gap-2 shrink-0 animate-[slideDown_0.4s_ease-out]">
                  <div className="w-3 h-3 rounded-full bg-red-400 transition-all duration-300 hover:scale-125"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400 transition-all duration-300 hover:scale-125"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 transition-all duration-300 hover:scale-125"></div>
                </div>
                {/* Code Content with Typing Effect */}
                <div className="p-6 font-mono text-sm text-slate-300 space-y-2 flex-grow overflow-hidden">
                  <p className="animate-[fadeIn_0.5s_ease-out_0.2s_both]">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">initSystem</span> = <span className="text-yellow-400">async</span> () <span className="text-purple-400">=&gt;</span> {'{'}
                  </p>
                  <p className="pl-4 text-slate-400 animate-[fadeIn_0.5s_ease-out_0.4s_both]">// Connecting to Core...</p>
                  <p className="pl-4 animate-[fadeIn_0.5s_ease-out_0.6s_both]">
                    await <span className="text-yellow-400">connectDB</span>(Credentials);
                  </p>
                  <p className="pl-4 animate-[fadeIn_0.5s_ease-out_0.8s_both]">
                    await <span className="text-blue-400">loadModules</span>([<span className="text-green-400">'AI'</span>, <span className="text-green-400">'Integration'</span>]);
                  </p>
                  <p className="pl-4 animate-[fadeIn_0.5s_ease-out_1s_both]">
                    return <span className="text-green-400">true</span>;
                  </p>
                  <p className="animate-[fadeIn_0.5s_ease-out_1.2s_both]">{'}'}</p>
                  <p className="animate-[blink_1s_step-end_infinite] text-blue-400">_</p>
                </div>
              </div>

              {/* STAGE 3: VoIP Signaling */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700 ${activeStage === 2 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-2'}`}>
                <div className="flex justify-between items-center w-full px-4">
                   {/* SIP Server */}
                   <div className="flex flex-col items-center gap-2 relative z-10 animate-[scaleIn_0.6s_ease-out]">
                      <div className="w-16 h-16 bg-orange-50 rounded-full border-2 border-orange-100 shadow-md flex items-center justify-center text-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-xl">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-slate-500">ASTERISK</span>
                   </div>

                   {/* Signals */}
                   <div className="flex-1 flex flex-col items-center justify-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <span className="text-[10px] font-mono text-orange-400 font-bold tracking-widest animate-pulse">SIGNALING</span>
                   </div>

                   {/* Phone Client */}
                   <div className="flex flex-col items-center gap-2 relative z-10 animate-[scaleIn_0.6s_ease-out_0.2s_both]">
                      <div className="w-16 h-16 bg-green-50 rounded-full border-2 border-green-100 shadow-md flex items-center justify-center text-green-500 transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:shadow-xl">
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                         </svg>
                      </div>
                      <span className="text-xs font-bold text-slate-500">CLIENT</span>
                   </div>
                </div>
                <div className="mt-8 px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full animate-[pulse_2s_ease-in-out_infinite]">
                   SIP Connection Established
                </div>
              </div>

            </div>

            {/* Animation Progress Bar with Smooth Transitions */}
            <div className="flex gap-2 justify-center pt-6 shrink-0">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveStage(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer hover:scale-110 ${
                    activeStage === i ? 'w-10 bg-slate-800' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to stage ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Global Keyframes */}
      <style jsx global>{`
        @keyframes moveRight {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes floatParticle {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(10px, -20px); opacity: 0.6; }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}