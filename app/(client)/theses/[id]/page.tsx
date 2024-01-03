"use client"
import PdfView from "@/components/customd/pdfview";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

async function getdata(id: any) {
  const response = await fetch(`http://localhost:3000/api/thesis/${id}`);
  //if (response.ok) {
  //throw new Error('failed to api Request')
  //}

  const data = await response.json()
  return data

}



const thesesPage = async ({ params: { id = 'defaultId' } }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
      router.push("/sign-in")
  }
  const thesis = await getdata(id)
  //console.log(thesis)

  return (
    <>
      <div className="container">
        <Card className="pt-4 pl-4">
          <Badge variant="outline">{thesis['thesis'].filename}</Badge>
          <Badge variant="outline">{thesis['thesis'].embargo}</Badge>
          <CardHeader>
            <CardTitle>{thesis['thesis'].title}</CardTitle>
            <CardDescription>
              <h2>{thesis['thesis'].author}</h2>
              <h4>{thesis['thesis'].kurso}</h4>
              <h5>{thesis['thesis'].subjek}</h5>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 ">
            <p className="text-justify">{thesis['thesis'].abstract}</p>
            <hr></hr>
            <PdfView thesis={thesis['thesis'].glinkView} />
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full bg-green-900 text-white hover:bg-yellow-500">
              Full Text
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default thesesPage;