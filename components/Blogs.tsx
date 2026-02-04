'use client';
import { useState, useEffect, useRef } from 'react';

// Blog Data
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
        <p className="text-slate-600">The client needed a secure, scalable way to connect patients with doctors remotely during high-traffic periods. Legacy systems were crashing under load, and security compliance was a major hurdle.</p>
        <h4 className="text-lg font-bold text-slate-800">Our Solution</h4>
        <p className="text-slate-600">We architected a WebRTC-based solution using Next.js and a custom signaling server. We implemented end-to-end encryption to meet HIPAA standards and deployed on a Kubernetes cluster that auto-scales based on active room count.</p>
        <h4 className="text-lg font-bold text-slate-800">The Result</h4>
        <p className="text-slate-600">Patient wait times dropped by 40%, and the system successfully handled 10,000 concurrent sessions during its first stress test.</p>
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
      <svg className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
    color: "bg-purple-100 text-purple-600",
    hoverBg: "group-hover:bg-purple-50",
    hoverBorder: "group-hover:border-purple-200",
    hoverShadow: "group-hover:shadow-purple-200/50",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-slate-800">Overview</h4>
        <p className="text-slate-600">Unplanned downtime was costing our client millions. They needed a way to foresee mechanical failures before they happened.</p>
        <h4 className="text-lg font-bold text-slate-800">AI Implementation</h4>
        <p className="text-slate-600">We installed IoT sensors on key machinery to collect vibration and temperature data. This data was fed into a custom TensorFlow model trained to recognize anomaly patterns preceding part failure.</p>
      </div>
    )
  },
  {
    id: 3,
    category: "SaaS",
    title: "Automated CI/CD Pipeline",
    description: "Reducing deployment time from 2 hours to 5 minutes for a fast-growing SaaS startup using GitHub Actions and Docker.",
    date: "Jan 15, 2026",
    icon: (
      <svg className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
    color: "bg-orange-100 text-orange-600",
    hoverBg: "group-hover:bg-orange-50",
    hoverBorder: "group-hover:border-orange-200",
    hoverShadow: "group-hover:shadow-orange-200/50",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-slate-800">The Problem</h4>
        <p className="text-slate-600">Manual deployment processes were prone to human error and took valuable developer time away from coding.</p>
        <h4 className="text-lg font-bold text-slate-800">Automation Strategy</h4>
        <p className="text-slate-600">We built a robust pipeline using GitHub Actions. Every commit now triggers automated testing, building of Docker images, and zero-downtime deployment to AWS ECS.</p>
      </div>
    )
  },
  {
    id: 4,
    category: "E-Commerce",
    title: "Real-Time Inventory System",
    description: "Building a scalable microservices architecture that synchronizes inventory across 50+ retail locations in real-time.",
    date: "Dec 08, 2025",
    icon: (
      <svg className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    ),
    color: "bg-emerald-100 text-emerald-600",
    hoverBg: "group-hover:bg-emerald-50",
    hoverBorder: "group-hover:border-emerald-200",
    hoverShadow: "group-hover:shadow-emerald-200/50",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-slate-800">The Challenge</h4>
        <p className="text-slate-600">A major retail chain was struggling with inventory discrepancies across their stores, leading to stockouts and lost sales opportunities.</p>
        <h4 className="text-lg font-bold text-slate-800">Our Approach</h4>
        <p className="text-slate-600">We designed a microservices architecture using Apache Kafka for event streaming and Redis for caching. Each store location publishes inventory updates that are instantly propagated across the entire network.</p>
        <h4 className="text-lg font-bold text-slate-800">Impact</h4>
        <p className="text-slate-600">Inventory accuracy improved to 99.7%, and the system now handles over 100,000 transactions per hour during peak shopping seasons.</p>
      </div>
    )
  },
  {
    id: 5,
    category: "FinTech",
    title: "Blockchain Payment Gateway",
    description: "Implementing a secure cryptocurrency payment solution that reduced transaction fees by 65% for international transfers.",
    date: "Sep 22, 2025",
    icon: (
      <svg className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    color: "bg-cyan-100 text-cyan-600",
    hoverBg: "group-hover:bg-cyan-50",
    hoverBorder: "group-hover:border-cyan-200",
    hoverShadow: "group-hover:shadow-cyan-200/50",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-slate-800">Business Need</h4>
        <p className="text-slate-600">A global remittance company wanted to offer cryptocurrency payment options to reduce high international wire transfer fees.</p>
        <h4 className="text-lg font-bold text-slate-800">Technical Implementation</h4>
        <p className="text-slate-600">We built a multi-chain payment gateway supporting Bitcoin, Ethereum, and stablecoins. The system includes smart contract integration for automated settlement and comprehensive KYC/AML compliance checks.</p>
        <h4 className="text-lg font-bold text-slate-800">Results</h4>
        <p className="text-slate-600">Transaction fees dropped from an average of $45 to $15 per transfer, and settlement time decreased from 3-5 days to under 1 hour.</p>
      </div>
    )
  },
  {
    id: 6,
    category: "Education",
    title: "AI-Powered Learning Platform",
    description: "Creating an adaptive learning system that personalizes education paths for 10,000+ students using machine learning algorithms.",
    date: "Aug 14, 2025",
    icon: (
      <svg className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
    color: "bg-pink-100 text-pink-600",
    hoverBg: "group-hover:bg-pink-50",
    hoverBorder: "group-hover:border-pink-200",
    hoverShadow: "group-hover:shadow-pink-200/50",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-slate-800">The Vision</h4>
        <p className="text-slate-600">An educational institution wanted to move beyond one-size-fits-all curriculum and provide personalized learning experiences for each student.</p>
        <h4 className="text-lg font-bold text-slate-800">AI & Analytics</h4>
        <p className="text-slate-600">We developed a recommendation engine using collaborative filtering and neural networks that analyzes student performance, learning pace, and engagement patterns. The system dynamically adjusts content difficulty and suggests supplementary materials.</p>
        <h4 className="text-lg font-bold text-slate-800">Outcomes</h4>
        <p className="text-slate-600">Student engagement increased by 45%, and average test scores improved by 23%. Teachers reported saving 5+ hours per week on lesson planning.</p>
      </div>
    )
  }
];

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogPosts[0] | null>(null);
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

  // Prevent body scroll and hide navbar when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
      // Hide navbar
      const navbar = document.querySelector('nav');
      if (navbar) {
        (navbar as HTMLElement).style.opacity = '0';
        (navbar as HTMLElement).style.pointerEvents = 'none';
      }
    } else {
      document.body.style.overflow = 'unset';
      // Show navbar
      const navbar = document.querySelector('nav');
      if (navbar) {
        (navbar as HTMLElement).style.opacity = '1';
        (navbar as HTMLElement).style.pointerEvents = 'auto';
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      const navbar = document.querySelector('nav');
      if (navbar) {
        (navbar as HTMLElement).style.opacity = '1';
        (navbar as HTMLElement).style.pointerEvents = 'auto';
      }
    };
  }, [selectedBlog]);

  return (
    <section id="blogs" ref={sectionRef} className="relative w-full py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 right-[15%] w-[350px] h-[350px] bg-purple-100/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
      
      {/* Floating Particles */}
      <div className="absolute top-40 right-[20%] w-2 h-2 bg-blue-400/30 rounded-full animate-[floatParticle_9s_ease-in-out_infinite]" />
      <div className="absolute top-60 left-[25%] w-3 h-3 bg-orange-400/30 rounded-full animate-[floatParticle_11s_ease-in-out_infinite_1s]" />
      <div className="absolute bottom-40 right-[30%] w-2.5 h-2.5 bg-purple-400/30 rounded-full animate-[floatParticle_10s_ease-in-out_infinite_2s]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with Animation */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
          <div>
            <h2 
              className={`text-blue-600 font-bold tracking-widest text-sm mb-3 uppercase transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Insights & News
            </h2>
            <h3 
              className={`text-4xl font-extrabold text-slate-900 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              Recent Updates
            </h3>
          </div>
          <button 
            className={`text-slate-500 hover:text-blue-600 flex items-center gap-2 transition-all duration-700 font-medium group ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            View all articles 
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Blog Carousel - Shows 3 at a time, horizontal scroll */}
        <div className="relative">
          {/* Scroll Container */}
          <div 
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#cbd5e1 #f1f5f9'
            }}
          >
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                className={`flex-shrink-0 w-[calc(33.333%-1.5rem)] min-w-[320px] snap-start bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col items-start hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden ${post.hoverBorder} ${post.hoverShadow} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${0.4 + index * 0.15}s` 
                }}
                onClick={() => setSelectedBlog(post)}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 ${post.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                
                {/* Animated Top Border on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_linear_infinite]" style={{ color: post.color.split(' ')[1].replace('text-', '') }} />

                {/* Icon Box with Enhanced Animation */}
                <div className={`w-12 h-12 rounded-2xl ${post.color} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg relative`}>
                  {post.icon}
                  {/* Ping Effect */}
                  <span className={`absolute inset-0 rounded-2xl ${post.color.split(' ')[0]} opacity-0 group-hover:opacity-20 group-hover:animate-ping`} />
                </div>

                {/* Title with Color Transition */}
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h4>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow group-hover:text-slate-600 transition-colors duration-300">
                  {post.description}
                </p>

                {/* Footer: Date & Button */}
                <div className="w-full flex items-center justify-between border-t border-slate-100 pt-6 group-hover:border-slate-200 transition-colors duration-300">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider group-hover:text-slate-500 transition-colors duration-300">
                    {post.date}
                  </span>
                  <button 
                    className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBlog(post);
                    }}
                  >
                    Read Article
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                  <div className={`absolute bottom-0 right-0 w-full h-full ${post.color.split(' ')[0]} rounded-tl-[100%]`} />
                </div>

                {/* Bottom Shine Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div 
            className={`flex justify-center gap-2 mt-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            {blogPosts.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors cursor-pointer"
              />
            ))}
          </div>

          {/* Scroll Hint Text */}
          <p 
            className={`text-center text-sm text-slate-400 mt-4 flex items-center justify-center gap-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1.1s' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Scroll to see more articles
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </p>
        </div>

        {/* MODAL OVERLAY with Enhanced Animation */}
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
            {/* Backdrop Blur with Animation */}
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-[fadeIn_0.3s_ease-out]"
              onClick={() => setSelectedBlog(null)}
            ></div>

            {/* Modal Content with Scale Animation */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8 md:p-12 overflow-y-auto max-h-[90vh] animate-[modalSlideUp_0.4s_ease-out]">
              
              {/* Close Button with Hover Effect */}
              <button 
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 hover:rotate-90 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header with Stagger */}
              <div className="flex items-center gap-3 mb-6 animate-[slideDown_0.5s_ease-out_0.1s_both]">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${selectedBlog.color.replace('text', 'bg').replace('100', '50')} ${selectedBlog.color.split(' ')[1]}`}>
                  {selectedBlog.category}
                </span>
                <span className="text-slate-400 text-sm">{selectedBlog.date}</span>
              </div>

              {/* Modal Title */}
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight animate-[slideDown_0.5s_ease-out_0.2s_both]">
                {selectedBlog.title}
              </h2>

              {/* Dynamic Content with Fade In */}
              <div className="prose prose-slate max-w-none animate-[fadeIn_0.6s_ease-out_0.3s_both]">
                {selectedBlog.fullContent}
              </div>

              {/* Modal Footer */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end animate-[fadeIn_0.6s_ease-out_0.4s_both]">
                <button 
                  onClick={() => setSelectedBlog(null)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-purple-300/50 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Close Article</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          33% { 
            transform: translateY(-30px) translateX(20px);
            opacity: 0.3;
          }
          66% { 
            transform: translateY(-15px) translateX(-20px);
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom Scrollbar Styling for Blog Carousel */
        #blogs .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }

        #blogs .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        #blogs .overflow-x-auto::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }

        #blogs .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </section>
  );
}