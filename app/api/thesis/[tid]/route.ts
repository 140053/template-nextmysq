//import { PrismaClient } from "@prisma/client"
//import type { NextApiRequest, NextApiResponse } from 'next'
//import { NextResponse } from "next/server";

// Handles POST requests to /api
/*
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // ...
  //return NextResponse.json({ message: "Hello World" });

  const prisma = new PrismaClient();
  try {
    const thesis = await prisma.metadata.findUnique({
      where: {
        id: 1 // parseInt(tid as string, 10)
      }
    })

    return NextResponse.json(thesis)
    //return Response.json(thesis)
  } catch (error) {
    console.error("Error fetching thesis:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }

}



// Handles GET requests to /api
export async function GET(request: Request, context: any) {
  const { params } = context
  //console.log(params.tid)
  const tid = params.tid;
  const prisma = new PrismaClient();

  try {
    const thesis = await prisma.metadata.findUnique({
      where: {
        id: tid
      }
    })
    return NextResponse.json({
      thesis
    })

  } catch (error) {
    console.error("Error fetching thesis:", error);
    //res.status(500).json({ error: "Internal Server Error" });
    return NextResponse.json({
      status: error
    })
  } finally {
    await prisma.$disconnect()
  }

}
*/

import { NextResponse } from "next/server";

export async function GET(request: Request, context: any){
  const { params } = context
 
  const tid = params.tid;
    //const data = await request.json()
    return NextResponse.json({
        status: "success"
    })
}