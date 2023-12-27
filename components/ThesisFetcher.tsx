// ThesisFetcher.tsx

import { useEffect, useState } from 'react';
import ThesisDisplay from './ThesisDisplay';

const ThesisFetcher = ({ tid }: { tid: string }) => {
  const [thesisData, setThesisData] = useState<any>(null);

  useEffect(() => {
    const fetchThesisData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/thesis/${tid}`, {
          method: 'POST',
        });
        if (response.ok) {
          const thesis = await response.json();
          setThesisData(thesis);
        } else {
          console.error('Failed to fetch thesis data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchThesisData();
  }, [tid]);

  return <>{thesisData && <ThesisDisplay thesis={thesisData} />}</>;
};

export default ThesisFetcher;
