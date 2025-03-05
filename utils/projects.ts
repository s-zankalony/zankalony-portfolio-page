import tafseerImage from '@/public/images/Tafseer-app.png';
import weatherAppImage from '@/public/images/weather-app.png';
import sunsetClock from '@/public/images/sunsetClock.png';
import aquaTrail from '@/public/images/aqua-trail-shipping-img.png';
import { StaticImageData } from 'next/image';
import { nanoid } from 'nanoid';

export const projects = [
  {
    id: nanoid(),
    title: 'Aqua Trail Shipping Company',
    description:
      'This project is a web application for shipping company demonstrating user registration & Seafreight booking feature, using Next.js Postgresql via Prisma/Subabase',
    link: 'https://aqua-trail-shipping.vercel.app/',
    gitHub: 'https://github.com/s-zankalony/aqua-trail-shipping.git',
    image: aquaTrail,
  },
  {
    id: nanoid(),
    title: 'Tafseer Al Quran - by Sheikh YassinRoushdy',
    description:
      'This project is a web application for Tafseer Al-Quran Al-Kareem by Sheikh Yassin Roushdy showing video from dedicated Youtube channel https://www.youtube.com/@HMohamedA. It is built using React and Vite, with Tailwind CSS for styling.',
    link: 'https://tafseer-yaseen-roshdy.netlify.app/',
    gitHub: 'https://github.com/s-zankalony/tafseer-app',
    image: tafseerImage,
  },
  {
    id: nanoid(),
    title: 'Sunset Clock',
    description:
      'This project implements the old Arabic time calculation system which considers sunset is midnight and day starts from there',
    link: 'https://sunsetclock.onrender.com/',
    gitHub: 'https://github.com/s-zankalony/sunsetClock',
    image: sunsetClock,
  },
  {
    id: nanoid(),
    title: 'weather-app',
    description:
      'Weather App v2 is a web application providing real-time weather updates using JavaScript, CSS, and HTML. Key features include: Real-time weather data for global locations. Responsive UI with CSS templates. Integration with weather APIs for accurate data.',
    link: 'https://weather-app-v2-qmoq.onrender.com/',
    gitHub: 'https://github.com/s-zankalony/weather-app-v2',
    image: weatherAppImage,
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  gitHub: string;
  image: StaticImageData;
};
