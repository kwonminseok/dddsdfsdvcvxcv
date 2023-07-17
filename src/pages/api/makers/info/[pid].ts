// import axios from "axios"
import { getMakerInfo } from "@libs/api/maker"

// const instance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// })

// const getMakerInfo = async (pid: string) => {
//   try {
//     const res = await instance.get(`/api/makers/${pid}?page=1&count=10&sort=createdAt&order=-1`)
//     // console.log(res.data)
//     return res.data
//   } catch (error) {
//     console.log("error")
//   }
// }

export default async function handler(req: any, res: any) {
  const { pid } = req.query

  try {
    if (req.method === "GET") {
      const result = await getMakerInfo(pid)

      if (result) {
        res.status(200).json({
          status: 200,
          data: result.data,
          banner: result.data.maker.banner,
          profileImage: result.data.maker.profileImage,
          name: result.data.maker.name,
          description: result.data.maker.description,
          category: result.data.maker.category,
          createdAt: result.data.maker.createdAt,
          totalSupporters: result.data.maker.totalSupporters,
          totalMinted: result.data.maker.totalMinted,
          totalSupports: result.data.maker.totalSupports,
        })
      }
    }
  } catch (e) {
    console.log("e")
  }
}
