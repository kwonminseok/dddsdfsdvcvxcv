import axios from "axios"

// export const Axiosinstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// })
import { issueSupport } from "@libs/api/support"
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

// export const issueNFT = async (cookie: string, supportId: string, password: string) => {
//   try {
//     const res = await Axiosinstance.get(`/api/mints?supportId=${supportId}&password=${password}`, {
//       headers: {
//         Authorization: `Bearer ${cookie}`,
//       },
//     })
//     console.log(res)
//     return res.data
//   } catch (error) {
//     console.log(error)
//     console.log("error in issuedNFT")
//     // console.log(error)
//     return null
//   }
// }

export default async function handler(req: any, res: any) {
  try {
    if (req.method === "GET") {
      const { cookie } = req.headers
      const wanted = getCookieValue(cookie, "ses_23k_xh")

      const { supportId, password } = req.query

      const result = await issueSupport(wanted as string, supportId, password)
      console.log(result)
      if (result) {
        res.status(200).json({ status: 200, message: result.message })
      } else {
        res.status(200).json({ status: 200, data: result })
      }
    }
  } catch (e) {
    console.log("e")
    // console.log(e)
  }
}
