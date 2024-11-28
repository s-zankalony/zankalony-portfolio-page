import { workExperience, WorkExperience } from '@/utils/work';
import SingleJob from './SingleJob';

function WorkExperienceSection() {
  return (
    <section className="bg-[url('@/public/images/hero_background_6.jpg')] bg-fixed bg-black/70 bg-blend-overlay mx-auto">
      <h1 className="capitalize font-caveat text-6xl ml-8 mb-8 text-slate-50">
        work experience
      </h1>
      <div className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
        {workExperience.map((job) => {
          return <SingleJob key={job.id} job={job} />;
        })}
      </div>
    </section>
  );
}
export default WorkExperienceSection;
