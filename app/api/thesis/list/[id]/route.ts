import { NextResponse } from "next/server";

export async function GET(request: Request, context: any){
    const { params } = context
    console.log(params.id)
    //const data = await request.json()
    return NextResponse.json({
        status: params.id
    })
}