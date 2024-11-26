import Projects from '@/components/Projects';
import { projects } from '@/utils/projects';

function HomePage() {
  return (
    <>
      <Projects projects={projects} />
    </>
  );
}
export default HomePage;
