import type { Education as cert } from '@/utils/education';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap } from 'lucide-react';

function Certificate({ cert }: { cert: cert }) {
  const { title, year, institute, details } = cert;
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-l-4 border-l-green-500">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
            <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              {title}
            </CardTitle>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-green-600 dark:text-green-400 font-semibold">
                {institute}
              </p>
              <Badge variant="secondary">{year}</Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {details}
        </p>
      </CardContent>
    </Card>
  );
}
export default Certificate;
