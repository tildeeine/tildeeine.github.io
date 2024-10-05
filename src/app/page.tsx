'use client';
import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar/Navbar'
import HomeSection from '../components/Home/HomeSection';
import ProjectSection from '../components/Project/ProjectSection';
import AboutSection from '../components/About/AboutSection';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '@/components/Footer/Footer';
import SkillsSection from '@/components/Skills/SkillsSection';
import ExperienceSection from '@/components/Experience/ExperienceSection';

const Page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-background">
      <Navbar />
      <HomeSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Page;