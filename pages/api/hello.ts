import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query
  const msg = typeof name === 'string' ? `Hi, ${name}` : 'Hello there'
  res.status(200).json({ message: msg })
}
