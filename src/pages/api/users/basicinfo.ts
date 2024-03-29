import axios from "axios"
import { getUserBasicInfo } from "@libs/api/user"
// export const Axiosinstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// })

export function getCookieValue(cookieString: string, cookieName: string) {
  const cookies = cookieString.split("; ")
  for (let i = 0; i < cookies.length; i++) {
    const [name, value] = cookies[i].split("=")
    if (name === cookieName) {
      return value
    }
  }
  return null
}

// export const getUserBasicInfo = async (cookie: string) => {
//   try {
//     // const res = await instance.post(`/api/users/login`, {
//     //   email: email,
//     //   loginType: type,
//     //   accessToken: access_t,
//     // })
//     const res = await Axiosinstance.get(`/api/users`, {
//       headers: {
//         Authorization: `Bearer ${cookie}`,
//       },
//     })
//     return res.data
//   } catch (error) {
//     console.log("error in logincheck")
//     return null
//     // console.log(error)
//     console.log("error")
//     // console.log(error)
//   }
//   // try{
//   //     const res = await instance.get(`/api/makers?`)
//   // }
// }

export default async function handler(req: any, res: any) {
  try {
    if (req.method === "GET") {
      const { cookie } = req.headers
      const wanted = getCookieValue(cookie, "ses_23k_xh")

      const result = await getUserBasicInfo(wanted as string)
      //   console.log(result)
      if (result) {
        res.status(200).json({ status: 200, result })
      } else {
        res.status(200).json({ status: 200 })
      }
    }
  } catch (e) {
    console.log("e")
    // console.log(e)
  }
}
