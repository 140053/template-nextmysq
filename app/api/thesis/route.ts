//import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse} from "next";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(request: Request, context: any){
    const keyword = context
    
    //const data = await request.json()

    
    return NextResponse.json({
        status: "success"
    })
}

export async function POST(req: Request, res: Response){
    const data  = await req.json()
    const prisma = new PrismaClient();
    //console.log(data.keywords)
    try{
        const datas2 = await prisma.metadata.findFirst({
            where: {
                title: {
                    contains: data.keywords,
                },
            },
        }); 

        const datas = await prisma.metadata.findMany({
            where: {
                /*
                raw_data: {
                    contains: data.keywords
                }
                */
                OR: [
                    { title: { contains: data.keywords } },
                    { author: { contains: data.keywords } },
                    { subjek: { contains: data.keywords } },                    
                    // Add more fields you want to search here
                  ],
            }
        })


        //console.log(datas)
        return NextResponse.json(datas)
        //res.json(datas)
    }catch( error ){
        console.error(error);
    }finally{
        
        await prisma.$disconnect
    }    
    
}