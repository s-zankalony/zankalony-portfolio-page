import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import About from './About';
import Image from 'next/image';
function Navbar() {
  return (
    <header className="bg-[url('@/public/images/navbar-bg-light.jpg')] dark:bg-[url('@/public/images/navbar-bg.jpg')] bg-cover transition-all  mb-8">
      <div className="max-w-[800px] w-[85%] mx-auto py-16 md:text-center relative">
        <h1 className="font-caveat font-normal text-5xl md:text-8xl leading-[0.9] mb-5 md:mb-4 text-shadow dark:text-shadow-dark">
          Sameh El Zankalony
        </h1>
        <h2 className="font-caveat font-normal text-3xl md:text-5xl leading-tight mb-6">
          Full Stack Developer
        </h2>
        <Image
          src={`/images/IMG_0556.jpg`}
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full mx-auto block mb-4"
        />
        <About />
      </div>
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
    </header>
  );
}
export default Navbar;
