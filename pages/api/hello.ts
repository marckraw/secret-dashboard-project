// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import betterLogging from 'better-logging'
betterLogging(console) // Superpowering console.logs and otherrs

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("This is superpowered console.log from hello.ts serverless function")
  res.status(200).json({ name: 'John Doe' })
}
