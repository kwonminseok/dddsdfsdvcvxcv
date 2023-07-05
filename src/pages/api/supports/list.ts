import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const getSupportList = async (page: number, count = 10, param = "", sorted = "createAt", order = -1) => {
  console.log(page, count, param, sorted, order)
  try {
    const res = await instance.get(`/api/floody/supports?page=${page}&count=${count}&sorted=${sorted}&order=${order}`)
    // console.log(res)
    return res.data
  } catch (error) {
    console.log("error")
    // console.log(error)
  }
  // try{
  //     const res = await instance.get(`/api/makers?`)
  // }
}

export default async function handler(req: any, res: any) {
  try {
    if (req.method === "GET") {
      const query = req.query
      const { page, count, param, sorted, order } = query

      const result = await getSupportList(page, count, param, sorted, order)
      // console.log(result)
      if (result) {
        res.status(200).json({ status: 200, total: result.data.total, data: result.data.list })
      }
    }
  } catch (e) {
    console.log("e")
    // console.log(e)
  }
}
