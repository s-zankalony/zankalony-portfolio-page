import Certificate from './Certificate';
import { education } from '@/utils/education';

function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-caveat font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development in technology and
            business
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((cert) => (
            <Certificate key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
