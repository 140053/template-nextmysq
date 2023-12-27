// ThesisDisplay.tsx

import { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ThesisDisplayProps {
  thesis: any; // Define the type of the thesis data
}

const ThesisDisplay: FC<ThesisDisplayProps> = ({ thesis }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{thesis.title}</CardTitle>
        <CardDescription>
          <h3>{thesis.author}</h3>
          <h4>{thesis.kurso}</h4>
          <h5>{thesis.subject}</h5>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>{thesis.abstract}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full bg-green-900 text-white hover:bg-yellow-500">
          Full Text
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThesisDisplay;
