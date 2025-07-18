import type { WorkExperience } from '@/utils/work';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

function SingleJob({ job }: { job: WorkExperience }) {
  const { title, company, date, duration, details } = job;
  return (
    <Card className="overflow-hidden border-l-4 border-l-blue-600 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </CardTitle>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              {company}
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <Badge variant="secondary" className="w-fit">
              {date}
            </Badge>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {duration}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div
          className="prose prose-gray dark:prose-invert max-w-none
                     [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-2 
                     [&_p]:text-gray-600 [&_p]:dark:text-gray-300 [&_p]:leading-relaxed
                     [&_ul]:text-gray-600 [&_ul]:dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: details }}
        />
      </CardContent>
    </Card>
  );
}
export default SingleJob;
