'use client';
import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection';
import ProjectSection from '../components/Project/ProjectSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '@/components/Footer';

const Page: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsNavbarVisible(false);
    } else {
      // Scrolling up
      setIsNavbarVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <main className="flex min-h-screen flex-col p-24 bg-background">
      <Navbar isVisible={isNavbarVisible} />
      <HomeSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}


export default Page;