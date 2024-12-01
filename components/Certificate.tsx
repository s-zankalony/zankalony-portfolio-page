import type { Education as cert } from '@/utils/education';

function Certificate({ cert }: { cert: cert }) {
  const { title, year, institute, details } = cert;
  return (
    <section className="mb-8">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="mb-2 text-zinc-700 dark:text-zinc-400">
        {institute}, year {year}
      </p>
      <p>{details}</p>
    </section>
  );
}
export default Certificate;
