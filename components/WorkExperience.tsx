import { workExperience } from '@/utils/work';
import SingleJob from './SingleJob';

function WorkExperienceSection() {
  return (
    <section className="bg-[url('/images/work-experience-light.jpg')] dark:bg-[url('/images/work-experience.jpg')] bg-fixed bg-black/50 bg-blend-overlay mx-auto">
      <h1 className="capitalize font-caveat text-6xl ml-8 mb-8 text-slate-50">
        work experience
      </h1>
      <div className="bg-white/40 backdrop-blur-sm hover:bg-white/50 dark:bg-black/40 dark:hover:bg-black/50 transition-all duration-300">
        {workExperience.map((job) => {
          return <SingleJob key={job.id} job={job} />;
        })}
      </div>
    </section>
  );
}
export default WorkExperienceSection;
