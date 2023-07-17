import axios from "axios"

export const Axiosinstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

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

export const userLoginCheck = async (cookie: string) => {
  try {
    // const res = await instance.post(`/api/users/login`, {
    //   email: email,
    //   loginType: type,
    //   accessToken: access_t,
    // })
    const res = await Axiosinstance.get(`/api/users/me`, {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    })
    return res.data
  } catch (error) {
    console.log("error in logincheck")
    return null
    // console.log(error)
    console.log("error")
    // console.log(error)
  }
  // try{
  //     const res = await instance.get(`/api/makers?`)
  // }
}

export default async function handler(req: any, res: any) {
  try {
    if (req.method === "GET") {
      const { cookie } = req.headers
      const wanted = getCookieValue(cookie, "ses_23k_xh")

      //   console.log(wanted)
      //   res.status(200).json({ data: comment })
      //   const query = req.query
      //   const { page, count, param, sorted, order } = query

      const result = await userLoginCheck(wanted as string)

      if (result) {
        res.status(200).json({ status: 200, message: result.message })
      } else {
        res.status(200).json({ status: 200 })
      }
    }
  } catch (e) {
    console.log("e")
    // console.log(e)
  }
}
