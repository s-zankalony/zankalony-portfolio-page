import type { Project } from '@/utils/projects';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

function SingleProject({ project }: { project: Project }) {
  const { id, title, description, link, gitHub, image } = project;
  return (
    <>
      <Card
        key={id}
        className="m-8 gap-6 p-4 bg-white/40 backdrop-blur-sm hover:bg-white/50 dark:bg-black/40 dark:hover:bg-black/50 transition-all duration-300"
      >
        <CardHeader className="text-2xl font-bold tracking-tight sm:text-3xl mb-4 items-center md:items-start">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-full max-w-72 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-102 lg:col-span-4">
            <Image
              className="h-full w-full object-cover object-center"
              src={image.src}
              alt={`${title} project screenshot`}
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col items-start space-y-4 py-4 lg:col-span-8">
            <p className="text-base leading-relaxed sm:text-lg mb-8">
              {description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="default"
            size="default"
            className="p-2 m-2 cursor-pointer"
          >
            <a
              href={link}
              className="items-center rounded-md px-6 py-3 text-base font-semibold transition-all duration-300"
            >
              View Project
            </a>
          </Button>
          <Button
            variant="outline"
            size="default"
            className="p-2 m-2 cursor-pointer"
          >
            <a
              href={gitHub}
              className="items-center rounded-md px-6 py-3 text-base font-semibold transition-all duration-300"
            >
              Github Link
            </a>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default SingleProject;
