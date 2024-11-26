import { Project } from '@/utils/projects';
import SingleProject from './SingleProject';

function Projects({ projects }: { projects: Project[] }) {
  return (
    <>
      <h1 className="capitalize font-caveat text-6xl ml-8">
        featured projects
      </h1>
      {projects.map((project) => {
        return <SingleProject project={project} key={project.id} />;
      })}
    </>
  );
}
export default Projects;
