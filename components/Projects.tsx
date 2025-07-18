import { Project } from '@/utils/projects';
import SingleProject from './SingleProject';

function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-caveat font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web
            technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <SingleProject project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
