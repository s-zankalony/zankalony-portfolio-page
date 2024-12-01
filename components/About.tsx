import Image from 'next/image';
import Link from 'next/link';

function About() {
  return (
    <>
      <Image
        src={`/images/IMG_0556.jpg`}
        width={100}
        height={100}
        alt="avatar"
        className="rounded-full mx-auto block mb-4"
      />
      <p className="font-montserrat text-sm">
        Hi there, I&apos;m a Full Stack developer, I&apos;m specialized in
        Front-end development & back-end development. I&apos;ve made some
        projects, you can check them below.
      </p>
      <Link
        href="/Sameh_El_Zankalony_Full_Stack_Developer.pdf"
        className="nav-link-style"
        target="_blank"
      >
        grab a copy of my CV
      </Link>
    </>
  );
}
export default About;
