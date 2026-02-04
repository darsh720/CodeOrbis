// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SmokyCursor from '@/components/SmokyCursor';
import Technology from '@/components/Technology';
import Experience from '@/components/Experience';
import Blogs from '@/components/Blogs';
import About from '@/components/About';
import Contact from '@/components/Contact';
import EmojiGenerator from '@/components/Emojigenerator';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 1. The Custom Cursor */}
      {/* <SmokyCursor /> */}
      
      {/* 2. The Floating Navbar */}
      <Navbar />
      
      {/* 3. The Hero/Home Section */}
      <Hero />
      <Technology />
      <Experience />
      <Blogs />
      <About />
      <Contact />
      {/* Add more sections below as we build them */}
    </main>
  );
}