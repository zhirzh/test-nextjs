import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg: string
}

export default function hello(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { name } = req.query

  let msg = 'Hi stranger'
  if (typeof name === 'string') {
    msg = `Hi ${name}`
  }

  res.status(200).json({ msg })
}
