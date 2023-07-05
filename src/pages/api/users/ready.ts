import axios from "axios"
import { Axiosinstance } from "./logincheck"
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const userReady = async (token: string) => {
  try {
    const res = await Axiosinstance.get(`api/users/ready/${token}`)
    return res
  } catch (error) {
    console.log(error)
  }
}

export default async function handler(req: any, res: any) {
  try {
    if (req.method === "GET") {
      const query = req.query
      const { token } = query
      const result = await userReady(token)
      if (result) {
        res.status(200).json({ status: 200, data: result })
      }
    }
  } catch (e) {
    console.log("e")
  }
}
