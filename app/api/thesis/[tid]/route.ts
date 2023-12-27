import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from 'next'

import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  return NextResponse.json({ message: "Hello World" });
  
}

// Handles POST requests to /api
export async function POST(request: Request) {
  // ...
  //return NextResponse.json({ message: "Hello World" });
  //const body = await request.json();
  //console.log(body)
  const prisma = new PrismaClient();
  try {
    const thesis = await prisma.metadata.findUnique({
      where: {
        id: 10
      }
    })

    return NextResponse.json(thesis)
    //return Response.json(thesis)
  } finally {
    await prisma.$disconnect();
  }

}


