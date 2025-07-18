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
import { ExternalLink, Github } from 'lucide-react';

function SingleProject({ project }: { project: Project }) {
  const { title, description, link, gitHub, image } = project;
  return (
    <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800">
      <div className="relative overflow-hidden">
        <Image
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          src={image.src}
          alt={`${title} project screenshot`}
          width={400}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex gap-3 pt-0">
        <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <a
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github size={16} />
            Source Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SingleProject;
