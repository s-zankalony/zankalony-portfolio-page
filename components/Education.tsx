import Certificate from './Certificate';
import { education } from '@/utils/education';

function Education() {
  return (
    <section className="bg-[url('/images/joanna-kosinska-unsplash.jpg')] bg-fixed bg-top pb-24 dark:bg-black/70 dark:bg-blend-overlay">
      <div className="max-w-[800px] w-[85%] mx-auto py-16">
        <h2 className="font-caveat font-normal text-6xl mb-8">Education</h2>
        {education.map((cert) => {
          return <Certificate key={cert.id} cert={cert} />;
        })}
      </div>
    </section>
  );
}
export default Education;
