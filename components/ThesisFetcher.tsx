// ThesisFetcher.tsx

import { useEffect, useState } from 'react';
import ThesisDisplay from './ThesisDisplay';

const ThesisFetcher = ({ tid }: { tid: string }) => {
  const [thesisData, setThesisData] = useState<any>(null);
  //console.log(tid)

  useEffect(() => {
    const fetchThesisData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/theses/${tid}`, {
          method: 'GET',
        });
        if (response.ok) {
          const thesis = response.json();
          //console.log(thesis)
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

  return <>
    
    {
      thesisData && <ThesisDisplay thesis={thesisData} />
    }
  </>;
};

export default ThesisFetcher;
