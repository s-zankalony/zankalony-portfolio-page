import Projects from '@/components/Projects';
import WorkExperienceSection from '@/components/WorkExperience';
import { projects } from '@/utils/projects';

function HomePage() {
  return (
    <>
      <Projects projects={projects} />
      <WorkExperienceSection />
    </>
  );
}
export default HomePage;
