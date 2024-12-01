import type { WorkExperience } from '@/utils/work';

function SingleJob({ job }: { job: WorkExperience }) {
  const { title, company, date, duration, details } = job;
  return (
    <section className="m-8 gap-6 px-16 py-6 md:grid md:grid-cols-12 md:gap-5">
      <div className="job-details col-span-4">
        <h3 className="font-bold">{title}</h3>
        <p>{company}</p>
        <p>
          <small>{date}</small>
        </p>
        <small>{duration}</small>
      </div>
      <div className="col-span-8 mt-2 md:mt-0">
        <h2 className="text-xl font-bold">Description</h2>
        <div
          className="job-summary [&_ul]:list-disc [&_ul]:ml-6 [&_li]:my-1 "
          dangerouslySetInnerHTML={{ __html: details }}
        />
      </div>
    </section>
  );
}
export default SingleJob;
