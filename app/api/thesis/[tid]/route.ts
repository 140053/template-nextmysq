// D:\code\node\template-nextmysq\app\api\thesis\[tid]\route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { tid } = req.query;

  try {
    if (req.method === 'GET') {
      const thesis = await prisma.metadata.findFirst({
        where: {
          id: parseInt(tid as string, 10),
        },
      });

      res.status(200).json(thesis);
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
