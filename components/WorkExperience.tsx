import { workExperience } from '@/utils/work';
import SingleJob from './SingleJob';

function WorkExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-caveat font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in customer experience management and
            logistics
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {workExperience.map((job) => (
            <SingleJob key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default WorkExperienceSection;
