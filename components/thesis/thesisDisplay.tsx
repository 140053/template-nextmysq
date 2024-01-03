
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PrismaClient } from "@prisma/client";



const MetadaList = async ({ params }: { params: { id: string } }) => {
  //console.log(params.id);
  
  const prisma = new PrismaClient();

  try {
    //if (isNaN(params.id)) {
    const tid = parseInt(params.id, 10);

    const thesis = await prisma.metadata.findUnique({
      where: {
        id: tid,
      },
    });

    return (
      <div className="container text-center">
        <Card>
          <CardHeader>
            <CardTitle>{thesis?.title}</CardTitle>
            <CardDescription>
              <h3>{thesis?.author}</h3>
              <h4>{thesis?.kurso}</h4>
              <h5>{thesis?.subjek}</h5>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>{thesis?.abstract}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full bg-green-900 text-white hover:bg-yellow-500">
              Full Text
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
    //}
  } finally {
    // Close the Prisma connection when done
    await prisma.$disconnect();
  }
};

export default MetadaList;
