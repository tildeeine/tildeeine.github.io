import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection';
import ProjectSection from '../components/ProjectSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const Page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
      <Navbar />
      <HomeSection />
      {/* <ProjectSection />
      <AboutSection />
      <ContactSection /> */}
    </main>
  );
}


export default Page;