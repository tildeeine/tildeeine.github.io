import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection';
import ProjectSection from '../components/Project/ProjectSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '@/components/Footer';

const Page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-background">
      <Navbar />
      <HomeSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}


export default Page;