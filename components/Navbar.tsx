import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
function Navbar() {
  return (
    <header className="bg-blue-dark text-almost-white">
      <div className="max-w-[800px] w-[85%] mx-auto py-16 md:text-center relative">
        <h1 className="font-caveat font-normal text-[75px] md:text-[100px] leading-[0.9] mb-5 md:mb-0">
          Sameh El Zankalony
        </h1>
        <h2 className="font-caveat font-normal text-[45px] leading-tight">
          Full Stack Developer
        </h2>

        <p>
          Hi there, I'm a Full Stack developer, I'm specialized in Front-end
          development & back-end development. I've made some great projects, you
          can check them in the following link{' '}
          <Link href="#project-1">zankalony.com/projects/</Link>
        </p>
      </div>
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
    </header>
  );
}
export default Navbar;
