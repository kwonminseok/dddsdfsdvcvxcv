import axios from "axios"
import { access } from "fs"
import { Axiosinstance } from "./logincheck"
import { userRegister } from "@libs/api/user"
// const instance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// })

// export type TSocial = "kakao" | "google" | "naver"

// interface IRegisterProps {
//   loginType: TSocial
//   email: string
//   nickname: string
//   token: string
// }

// export const userRegister = async (data: IRegisterProps) => {
//   try {
//     const res = await Axiosinstance.post(`/api/users/signup`, data)

//     return res.data
//   } catch (error) {
//     console.log(error)
//     console.log("error")
//   }
//   // try{
//   //     const res = await instance.get(`/api/makers?`)
//   // }
// }

// // export const userRegister =

export default async function handler(req: any, res: any) {
  try {
    if (req.method === "POST") {
      const { loginType, email, nickname, token, oauthId } = req.body

      const result = await userRegister({
        loginType: loginType,
        email: email,
        nickname: nickname,
        token: token,
        oauthId: oauthId,
      })

      if (result) {
        res.status(200).json({ status: 200, result })
      }
    }
  } catch (e) {
    console.log("e")
    // console.log(e)
  }
}
