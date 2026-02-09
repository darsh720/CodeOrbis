'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo'; // Import the Logo component

export default function Contact() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const currentYear = new Date().getFullYear();

  // Intersection Observer for scroll animations
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- REAL EMAIL SUBMISSION LOGIC ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Prepare data for Web3Forms
    const submissionData = {
      access_key: "c990411f-0a5a-460c-b21f-6ad70713aed2", // YOUR KEY
      ...formData,
      from_name: "CodeOrbis Website",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' }); // Reset form
        setTimeout(() => setIsSuccess(false), 5000); // Hide success message after 5 sec
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative w-full bg-slate-50 border-t border-slate-100 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-purple-100/20 rounded-full blur-3xl animate-[float_14s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 left-[15%] w-[350px] h-[350px] bg-blue-100/20 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_2s]" />
      
      {/* Floating Particles */}
      <div className="absolute top-60 left-[20%] w-2 h-2 bg-purple-400/30 rounded-full animate-[floatParticle_10s_ease-in-out_infinite]" />
      <div className="absolute top-80 right-[25%] w-3 h-3 bg-blue-400/30 rounded-full animate-[floatParticle_12s_ease-in-out_infinite_1s]" />
      <div className="absolute bottom-60 left-[30%] w-2.5 h-2.5 bg-green-400/30 rounded-full animate-[floatParticle_11s_ease-in-out_infinite_2s]" />
      
      {/* --- CONTACT SECTION CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* Header with Animation */}
        <div className="text-center mb-16">
          <h2 
            className={`text-blue-600 font-bold tracking-widest text-sm mb-3 uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Get in Touch
          </h2>
          <h3 
            className={`text-4xl md:text-5xl font-extrabold text-slate-900 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Let's Start a{' '}
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              style={{
                backgroundSize: '200% auto',
                animation: isVisible ? 'gradientShift 3s ease infinite' : 'none'
              }}
            >
              Conversation
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* LEFT: Contact Form with Enhanced Animation */}
          <div 
            className={`bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            
            {/* Success Overlay */}
            {isSuccess && (
              <div className="absolute inset-0 bg-green-50 z-20 flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 animate-[bounceIn_0.6s_ease-out]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-800">Message Sent!</h4>
                <p className="text-slate-600 mt-2">Thank you for contacting CodeOrbis. We will get back to you shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-6 text-sm font-bold text-green-700 hover:underline">Send another message</button>
              </div>
            )}

            <h4 className="text-2xl font-bold text-slate-800 mb-6 relative">
              Send us a message
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              {/* Hidden Key Input */}
              <input type="hidden" name="access_key" value="c990411f-0a5a-460c-b21f-6ad70713aed2" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-slate-600 transition-colors group-focus-within:text-blue-600">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white outline-none transition-all transform focus:scale-[1.02] text-slate-900 placeholder:text-slate-400" 
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-slate-600 transition-colors group-focus-within:text-blue-600">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white outline-none transition-all transform focus:scale-[1.02] text-slate-900 placeholder:text-slate-400" 
                  />
                </div>
              </div>
              
              <div className="space-y-2 group">
                <label className="text-sm font-semibold text-slate-600 transition-colors group-focus-within:text-blue-600">Subject</label>
                <select 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white outline-none transition-all text-slate-900 transform focus:scale-[1.02]"
                >
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Technical Support</option>
                  <option>Career Opportunity</option>
                </select>
              </div>

              <div className="space-y-2 group">
                <label className="text-sm font-semibold text-slate-600 transition-colors group-focus-within:text-blue-600">Message</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell us about your project..." 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white outline-none transition-all resize-none transform focus:scale-[1.02] text-slate-900 placeholder:text-slate-400"
                ></textarea>
              </div>

              {errorMessage && <p className="text-red-500 text-sm font-medium animate-shake">{errorMessage}</p>}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-[#0f172a] hover:bg-slate-800 hover:shadow-xl transform hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT: Map & Info with Animation */}
          <div 
            className={`flex flex-col space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            {/* Info Cards with Stagger Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div 
                className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.5s' }}
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-12 hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h5 className="font-bold text-slate-800">Email Us</h5>
                <p className="text-slate-500 text-sm mt-1">info@codeorbis.in</p>
              </div>
              <div 
                className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-12 hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h5 className="font-bold text-slate-800">Visit Us</h5>
                <p className="text-slate-500 text-sm mt-1">Anand, Gujarat</p>
              </div>
            </div>

            {/* MAP - Anand, Gujarat with Animation */}
            <div 
              className={`w-full h-80 bg-slate-200 rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative group transition-all duration-1000 hover:shadow-2xl ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              {/* Decorative Corner Accent */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59066.02701168019!2d72.9238356!3d22.5562767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e7fd2697269%3A0x7d247d4e511470!2sAnand%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Google Map Anand"
                className="transition-transform duration-300 group-hover:scale-105"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER SECTION --- */}
      <footer className="w-full bg-white border-t border-slate-200 pt-16 pb-8 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Logo & Desc */}
            <div 
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <Logo />
              <p className="text-slate-500 text-sm leading-relaxed">
                Empowering enterprises with next-gen VoIP solutions, cloud architecture, and AI-driven insights. Building the future, line by line.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.9s' }}
            >
              <h4 className="font-bold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-slate-500 hover:text-blue-600 text-sm transition-all hover:translate-x-1 inline-block">Home</Link></li>
                <li><Link href="#about" className="text-slate-500 hover:text-blue-600 text-sm transition-all hover:translate-x-1 inline-block">About Us</Link></li>
                <li><Link href="/work" className="text-slate-500 hover:text-blue-600 text-sm transition-all hover:translate-x-1 inline-block">Our Work</Link></li>
                <li><Link href="#blogs" className="text-slate-500 hover:text-blue-600 text-sm transition-all hover:translate-x-1 inline-block">Insights</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              <h4 className="font-bold text-slate-900 mb-6">Services</h4>
              <ul className="space-y-3">
                <li><span className="text-slate-500 text-sm hover:text-slate-700 transition-colors cursor-default">Web Development</span></li>
                <li><span className="text-slate-500 text-sm hover:text-slate-700 transition-colors cursor-default">Cloud Infrastructure</span></li>
                <li><span className="text-slate-500 text-sm hover:text-slate-700 transition-colors cursor-default">VoIP Solutions</span></li>
                <li><span className="text-slate-500 text-sm hover:text-slate-700 transition-colors cursor-default">AI Integration</span></li>
              </ul>
            </div>

            {/* Column 4: Legal & Social */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.1s' }}
            >
              <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><button onClick={() => setModalType('privacy')} className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setModalType('terms')} className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Terms of Service</button></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div 
            className={`pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1.2s' }}
          >
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} CodeOrbis Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
               <a href="#" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110 transform duration-300"><span className="sr-only">Twitter</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
               <a href="#" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110 transform duration-300"><span className="sr-only">LinkedIn</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- MODALS --- */}

      {/* PRIVACY POLICY MODAL */}
      {modalType === 'privacy' && (
        <LegalModal title="Privacy Policy" onClose={() => setModalType(null)}>
          <p><strong>1. Information Collection:</strong> We collect information you provide directly to us, such as when you fill out a contact form, request a demo, or communicate with us.</p>
          <p><strong>2. Use of Information:</strong> We use the information we collect to provide, maintain, and improve our services, and to communicate with you.</p>
          <p><strong>3. Data Protection:</strong> We implement appropriate technical and organizational measures to protect your personal data against unauthorized access.</p>
          <p><strong>4. Third Parties:</strong> We do not share your personal information with third parties except as necessary to provide our services or as required by law.</p>
        </LegalModal>
      )}

      {/* TERMS MODAL */}
      {modalType === 'terms' && (
        <LegalModal title="Terms & Conditions" onClose={() => setModalType(null)}>
          <p><strong>1. Acceptance of Terms:</strong> By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          <p><strong>2. Intellectual Property:</strong> All content, features, and functionality are and will remain the exclusive property of CodeOrbis Technologies.</p>
          <p><strong>3. Use License:</strong> Permission is granted to temporarily download one copy of the materials on CodeOrbis's website for personal, non-commercial viewing only.</p>
          <p><strong>4. Disclaimer:</strong> The materials on CodeOrbis's website are provided on an 'as is' basis. CodeOrbis makes no warranties, expressed or implied.</p>
        </LegalModal>
      )}

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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </section>
  );
}

// Helper Component for Modals with Animation
function LegalModal({ title, children, onClose }: { title: string, children: React.ReactNode, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8 max-h-[80vh] overflow-y-auto animate-[slideUp_0.4s_ease-out]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 hover:rotate-90 transition-all duration-300">
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="space-y-4 text-slate-600 leading-relaxed">{children}</div>
        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
          <button onClick={onClose} className="px-6 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transform hover:scale-105 transition-all">Close</button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}