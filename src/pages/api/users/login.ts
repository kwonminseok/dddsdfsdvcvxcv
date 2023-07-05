import axios from "axios"
import { access } from "fs"
import { Axiosinstance } from "./logincheck"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export type TSocial = "kakao" | "google" | "naver"

export const userLogin = async (email: string, type: TSocial, access_t: string) => {
  try {
    const res = await Axiosinstance.post(`/api/users/login`, {
      email: email,
      loginType: type,
      accessToken: access_t,
    })
    // console.log(res)
    return res
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
    console.log("hello")
    if (req.method === "POST") {
      console.log("h")
      const { email, type, access_t } = req.body
      console.log(email, type, access_t)
      //   res.status(200).json({ data: comment })
      //   const query = req.query
      //   const { page, count, param, sorted, order } = query

      const result = await userLogin(email, type, access_t)
      // console.log(result)
      //   console.log(result)
      if (result) {
        res.status(200).json({ status: 200 })
      }
    }
  } catch (e) {
    console.log("e")
    // console.log(e)
  }
}
