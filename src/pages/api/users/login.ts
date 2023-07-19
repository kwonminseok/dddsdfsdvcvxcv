import axios from "axios"
import { access } from "fs"
import { Axiosinstance } from "./logincheck"
import { userLogin } from "@libs/api/user"
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

// export type TSocial = "kakao" | "google" | "naver"

// export const userLogin = async (email: string, type: TSocial, access_t: string) => {
//   try {
//     const res = await Axiosinstance.post(`/api/users/login`, {
//       email: email,
//       loginType: type,
//       accessToken: access_t,
//     })

//     return res
//   } catch (error) {
//     console.log("error")

//   }

// }

export default async function handler(req: any, res: any) {
  try {
    console.log("hello")
    if (req.method === "POST") {
      console.log("h")
      const { oauthId, email, loginType, accessToken } = req.body
      // console.log(email, type, access_t)
      //   res.status(200).json({ data: comment })
      //   const query = req.query
      //   const { page, count, param, sorted, order } = query

      const result = await userLogin(oauthId, email, loginType, accessToken)
      console.log(result)
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
