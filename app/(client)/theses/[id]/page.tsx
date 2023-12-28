import { PrismaClient } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";



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
        <div className="">
          <h1 className="">Recently Added</h1>
          <div className="ml-50">
            <div key={thesis?.id}>
              <div className="border border-solid m-3 p-2">
                <Badge variant="outline">{thesis?.campus} Campus</Badge>
                <Badge variant="outline">Embargo: {thesis?.embargo}</Badge>

                <h1 className="text-blue-600">
                  <Link href={"/theses/" + thesis?.id}>{thesis?.title}</Link>
                </h1>
                <h4>
                  Author:<u>{thesis?.author}</u> Course: {thesis?.kurso}
                </h4>
                <p>
                  Abstract:{" "}
                  {thesis?.abstract && thesis?.abstract.length > 200
                    ? `${thesis?.abstract.slice(0, 100)}...`
                    : thesis?.abstract}
                  <small className="text-blue-600">
                    <Link href={"/theses/" + thesis?.id}>Read More..</Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    //}
  } finally {
    // Close the Prisma connection when done
    await prisma.$disconnect();
  }
};

export default MetadaList;
