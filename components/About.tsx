import Image from 'next/image';

function About() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="/images/IMG_0556.jpg"
            width={320}
            height={320}
            alt="Sameh El Zankalony - Full Stack Developer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-2xl">👋</span>
        </div>
      </div>
    </div>
  );
}
export default About;
