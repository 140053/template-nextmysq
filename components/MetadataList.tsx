import { PrismaClient } from "@prisma/client";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";


const prisma = new PrismaClient();

const MetadaList = async () => {
    try {
        const metadata = await prisma.metadata.findMany({take: 10,});
        

        return (
            <div className="">
                <h1 className="">Recently Added</h1>
                {/* You can use the 'allAusers' array to render the data in your component */}
                <div className="ml-50">

                    {metadata.map((thesis) => (
                        <div key={thesis.id}>
                            <div className="border border-solid m-3 p-2">
                                <Badge variant="outline">{thesis.campus} Campus</Badge>
                                <Badge variant="outline">Embargo:  {thesis.embargo}</Badge>
                                {/* Render individual auser data here */}

                                <h1 className="text-blue-600">
                                    <Link href="thesis">
                                        {thesis.title}
                                    </Link>
                                </h1>
                                <h4>
                                    Author:<u>{thesis.author}</u> Course: {thesis.kurso}
                                </h4>
                                <p>
                                    Abstract: {thesis.abstract && thesis.abstract.length > 200 ? `${thesis.abstract.slice(0, 100)}...` : thesis.abstract}
                                    <small className="text-blue-600"><Link href="/thesis">Read More..</Link></small>
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        )
    } finally {
        // Close the Prisma connection when done
        await prisma.$disconnect();
    }

}

export default MetadaList;