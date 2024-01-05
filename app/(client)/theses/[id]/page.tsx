"use client"
import  AlertDialogDemo  from "@/components/pdfjs/view";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Correct import
import { useEffect, useState } from "react";

interface Thesis {
  campus: string;
  embargo: string;
  title: string;
  author: string;
  kurso: string;
  subjek: string;
  abstract: string;
  glinkView: string;
  taon: string;
  filename: string;
}

interface AlertDialogDemoProps {
  thesisID: string | null;
}


async function getdata(id: any) {
  const response = await fetch(`/api/thesis/${id}`);
  const data = await response.json();
  return data;
}

const  getFileID = (url: string) => {  
  const match = url.match(/\/file\/d\/([^/]+)/);
  return match ? match[1] : null;
}

const ThesesPage = ({ params: { id = 'defaultId' } }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [thesis, setThesis] = useState<Thesis>({
    campus: '',
    embargo: '',
    title: '',
    author: '',
    kurso: '',
    subjek: '',
    abstract: '',
    glinkView: '',
    taon: '',
    filename: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!session) {
        router.push("/sign-in");
        return;
      }

      try {
        const thesisData = await getdata(id);       
        setThesis(thesisData["thesis"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, session, router]);

  return (
    <>
      <div className="container">
        <Card className="pt-4 pl-4">
        <Badge variant="outline">{thesis.filename }</Badge>
          <Badge variant="outline">{thesis.campus} Campus</Badge>
          <Badge variant="outline">Embargo: {thesis.embargo}</Badge>
          <CardHeader>
            <CardTitle className="lg:text-5xl">{thesis.title}</CardTitle>
            <CardDescription>
              <h2 className="lg:text-3xl">Author: {thesis.author}</h2>
              <h4>Course: {thesis.kurso} @ {thesis.taon}</h4>
              <h5>Subject: {thesis.subjek}</h5>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-justify">{thesis.abstract}</p>
            <hr></hr>
          </CardContent>
          <CardFooter>
            <AlertDialogDemo thesisID={getFileID(thesis.glinkView)!} />
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ThesesPage;
