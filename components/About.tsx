import Link from 'next/link';

function About() {
  return (
    <p className="font-montserrat text-sm">
      Hi there, I'm a Full Stack developer, I'm specialized in Front-end
      development & back-end development. I've made some great projects, you can
      check them in the following link{' '}
      <Link href="#project-1" className="nav-link-style">
        zankalony.com/projects/
      </Link>
    </p>
  );
}
export default About;
