import axios from "axios"
import { access } from "fs"
import { Axiosinstance } from "./logincheck"
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export type TSocial = "kakao" | "google" | "naver"

interface IRegisterProps {
  loginType: TSocial
  email: string
  nickName: string
  token: string
}

export const userRegister = async (data: IRegisterProps) => {
  try {
    const res = await Axiosinstance.post(`/api/users/signup`, data)
    console.log(res)
    return res.data
  } catch (error) {
    console.log("error")
    console.log(error)
  }
  // try{
  //     const res = await instance.get(`/api/makers?`)
  // }
}

// export const userRegister =

export default async function handler(req: any, res: any) {
  try {
    console.log("hello")
    if (req.method === "POST") {
      const { loginType, email, nickname, token } = req.body
      //   res.status(200).json({ data: comment })
      //   const query = req.query
      //   const { page, count, param, sorted, order } = query

      const result = await userRegister({ loginType: loginType, email: email, nickName: nickname, token: token })

      console.log("결과 : ", result)
      //   console.log(result)
      if (result) {
        res.status(200).json({ status: 200, data: result })
      }
    }
  } catch (e) {
    console.log("e")
    // console.log(e)
  }
}
