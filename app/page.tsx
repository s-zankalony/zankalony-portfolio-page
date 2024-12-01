import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import WorkExperienceSection from '@/components/WorkExperience';
import { projects } from '@/utils/projects';

function HomePage() {
  return (
    <>
      <Projects projects={projects} />
      <WorkExperienceSection />
      <Education />
      <Footer />
    </>
  );
}
export default HomePage;
