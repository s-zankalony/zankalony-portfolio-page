import { Project } from '@/utils/projects';
import SingleProject from './SingleProject';

function Projects({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-[url('@/public/images/projects.jpg')] bg-fixed bg-black/50 bg-blend-overlay">
      <h1 className="capitalize font-caveat text-6xl ml-8 text-slate-50">
        featured projects
      </h1>
      {projects.map((project) => {
        return <SingleProject project={project} key={project.id} />;
      })}
    </section>
  );
}
export default Projects;
