// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// data
let num = 0

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body)
  try {
    const response = await 
    fetch('https://jsonplaceholder.typicode.com/posts')

    res.status(200).send({
      data: await response.json(),
      count: num++
    })
  } catch(e) {
    res.status(500).send({
      message: e
    })
  }
}

export default handler
