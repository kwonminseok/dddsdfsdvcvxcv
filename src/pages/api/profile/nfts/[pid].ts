import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const getuserNfts = async (pid: string, page: number, count = 10, param = "", sorted = "createAt", order = -1) => {
  console.log(pid)
  try {
    const res = await instance.get(`/api/users/${pid}/nfts?page=${page}&count=${count}&sorted=${sorted}&order=${order}`)
    // console.log(res.data)
    return res.data
  } catch (error) {
    console.log("error")
    // console.log(error)
  }
}

export default async function handler(req: any, res: any) {
  const query = req.query
  const { pid, page, count, param, sorted, order } = query

  //   console.log(pid)
  try {
    if (req.method === "GET") {
      const result = await getuserNfts(pid, page, count, param, sorted, order)
      console.log(result)
      if (result) {
        res.status(200).json({
          status: 200,
          total: result.data.total,
          data: result.data.list,
        })
      }
    }
  } catch (e) {
    console.log("e")
    // console.log(e)
  }
}

//title
//mainImage
//maker
