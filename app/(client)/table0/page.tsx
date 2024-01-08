import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { PrismaClient } from "@prisma/client";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    const prisma = new PrismaClient();
    const metadata = await prisma.metadata.findMany({
        take: 10,

        select: {
            id:true,
            title: true,
            author: true,
            kurso: true,
            abstract:true,
            subjek: true,
            campus: true,
            embargo:true,            
        },
        orderBy: [
            {
                id: 'desc',
            }
        ]
    });
    console.log(metadata)
    return [
        {
            "id": "728ed524",
            "amount": 100,
            "status": "pending",
            "email": "a@example.com"
        },
        {
            "id": "728ed52b",
            "amount": 101,
            "status": "pending",
            "email": "b@example.com"
        },
        {
            "id": "728ed52c",
            "amount": 102,
            "status": "pending",
            "email": "c@example.com"
        },
        {
            "id": "728ed52d",
            "amount": 103,
            "status": "pending",
            "email": "d@example.com"
        },
        {
            "id": "728ed52e",
            "amount": 104,
            "status": "pending",
            "email": "e@example.com"
        },
        {
            "id": "728ed52f",
            "amount": 105,
            "status": "pending",
            "email": "f@example.com"
        },
        {
            "id": "728ed530",
            "amount": 106,
            "status": "pending",
            "email": "g@example.com"
        },
        {
            "id": "728ed531",
            "amount": 107,
            "status": "pending",
            "email": "h@example.com"
        },
        {
            "id": "728ed532",
            "amount": 108,
            "status": "pending",
            "email": "i@example.com"
        },
        {
            "id": "728ed533",
            "amount": 109,
            "status": "pending",
            "email": "j@example.com"
        },
        {
            "id": "728ed534",
            "amount": 110,
            "status": "pending",
            "email": "k@example.com"
        },
        {
            "id": "728ed535",
            "amount": 111,
            "status": "pending",
            "email": "l@example.com"
        },
        {
            "id": "728ed536",
            "amount": 112,
            "status": "pending",
            "email": "m@example.com"
        },
        {
            "id": "728ed537",
            "amount": 113,
            "status": "pending",
            "email": "n@example.com"
        },
        {
            "id": "728ed538",
            "amount": 114,
            "status": "pending",
            "email": "o@example.com"
        },
        {
            "id": "728ed539",
            "amount": 115,
            "status": "pending",
            "email": "p@example.com"
        },
        {
            "id": "728ed53a",
            "amount": 116,
            "status": "pending",
            "email": "q@example.com"
        },
        {
            "id": "728ed53b",
            "amount": 117,
            "status": "pending",
            "email": "r@example.com"
        },
        {
            "id": "728ed53c",
            "amount": 118,
            "status": "pending",
            "email": "s@example.com"
        },
        {
            "id": "728ed53d",
            "amount": 119,
            "status": "pending",
            "email": "t@example.com"
        },
        {
            "id": "728ed53e",
            "amount": 120,
            "status": "pending",
            "email": "u@example.com"
        },
        {
            "id": "728ed53f",
            "amount": 121,
            "status": "pending",
            "email": "v@example.com"
        },
        {
            "id": "728ed540",
            "amount": 122,
            "status": "pending",
            "email": "w@example.com"
        },
        {
            "id": "728ed541",
            "amount": 123,
            "status": "pending",
            "email": "x@example.com"
        },
        {
            "id": "728ed542",
            "amount": 124,
            "status": "pending",
            "email": "y@example.com"
        },
        {
            "id": "728ed543",
            "amount": 125,
            "status": "pending",
            "email": "z@example.com"
        },
        {
            "id": "728ed544",
            "amount": 126,
            "status": "pending",
            "email": "aa@example.com"
        },
        {
            "id": "728ed545",
            "amount": 127,
            "status": "pending",
            "email": "ab@example.com"
        },
        {
            "id": "728ed546",
            "amount": 128,
            "status": "pending",
            "email": "ac@example.com"
        },
        {
            "id": "728ed547",
            "amount": 129,
            "status": "pending",
            "email": "ad@example.com"
        },
        {
            "id": "728ed548",
            "amount": 130,
            "status": "pending",
            "email": "ae@example.com"
        },
        {
            "id": "728ed549",
            "amount": 131,
            "status": "pending",
            "email": "af@example.com"
        },
        {
            "id": "728ed54a",
            "amount": 132,
            "status": "pending",
            "email": "ag@example.com"
        },
        {
            "id": "728ed54b",
            "amount": 133,
            "status": "pending",
            "email": "ah@example.com"
        },
        {
            "id": "728ed54c",
            "amount": 134,
            "status": "pending",
            "email": "ai@example.com"
        },
        {
            "id": "728ed54d",
            "amount": 135,
            "status": "pending",
            "email": "aj@example.com"
        },
        {
            "id": "728ed54e",
            "amount": 136,
            "status": "pending",
            "email": "ak@example.com"
        },
        {
            "id": "728ed54f",
            "amount": 137,
            "status": "pending",
            "email": "al@example.com"
        },
        {
            "id": "728ed550",
            "amount": 138,
            "status": "pending",
            "email": "am@example.com"
        },
        {
            "id": "728ed551",
            "amount": 139,
            "status": "pending",
            "email": "an@example.com"
        },
        {
            "id": "728ed552",
            "amount": 140,
            "status": "pending",
            "email": "ao@example.com"
        },
        // ...
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
