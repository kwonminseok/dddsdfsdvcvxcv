// import axios from "axios"
import { getMakerSupportList } from "@libs/api/maker"
// const instance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// })

// const getMakerSupportList = async (pid: string, page: number, count: number = 10, sorted = "createdAt", order = -1) => {
//   console.log(pid)
//   try {
//     const res = await instance.get(`/api/makers/${pid}?page=${page}&count=${count}&sort=${sorted}&order=${order}`)

//   } catch (error) {
//     console.log("get supportlist error")

//   }

// }

export default async function handler(req: any, res: any) {
  //   const { pid } = req.query
  const { pid, page, count, param, sorted, order } = req.query

  try {
    if (req.method === "GET") {
      const result = await getMakerSupportList(pid, page, count, sorted, order)

      if (result) {
        res.status(200).json({
          status: 200,
          supports: result.data.supports.list,
          total: result.data.supports.total,
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
