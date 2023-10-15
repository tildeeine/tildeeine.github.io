import Image from 'next/image'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSecton';
import ProjectSection from '../components/ProjectSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import BackgroundSection from '../components/BackgroundSection';
import ContactSection from '../components/ContactSection';

const Page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <HomeSection />
      <ProjectSection />
      <AboutSection />
      <ExperienceSection />
      <BackgroundSection />
      <ContactSection />
    </main>
  );
}


export default Page;