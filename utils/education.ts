import { nanoid } from 'nanoid';

export const education = [
  {
    id: nanoid(),
    title: 'Complete React, Next.js & TypeScript Projects Course 2024',
    institute: 'Udemy',
    year: '2024',
    details:
      'The course covers the following: Comprehensive TypeScript tutorial, Detailed lessons on React with TypeScript, Complete Next.js tutorial with TypeScript, Several complex Next.js projects',
  },
  {
    id: nanoid(),
    title: 'MERN 2024 Edition - MongoDB, Express, React and NodeJS',
    institute: 'Udemy',
    year: '2024',
    details:
      'This course covers the following: Front-End Development with React, Routing with React Router 6.4+, Building a Server Application, Database Management, Full Stack Integration, API Management,',
  },
  {
    id: nanoid(),
    title: 'Javascript Tutorial and Projects Course',
    institute: 'Udemy',
    year: '2024',
    details:
      'This course delves into JavaScript as not only the cornerstone of web scripting, exploring its prototype based structure, single-threaded execution, and support for various programming paradigms including object-oriented, imperative, and functional programming.',
  },
  {
    id: nanoid(),
    title: 'Certified Six Sigma Yellow Belt',
    institute: 'Issued by Six Sigma College Düsseldorf',
    year: '2021',
    details:
      'The (Lean) Six Sigma Yellow Belt is informed about the basic tools in (Lean) Six Sigma. She or he is able to work with Six Sigma Green Belts and knows about the structure of a Six Sigma Project as well as a Six Sigma Company.',
  },
  {
    id: nanoid(),
    title: 'Bachelor of Education',
    institute: 'University of Alexandria',
    year: '2000',
    details: 'Mathematics Department',
  },
];

export type Education = {
  id: string;
  title: string;
  institute: string;
  year: string;
  details: string;
};
