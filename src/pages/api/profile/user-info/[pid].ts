import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const getuserProfile = async (pid: string) => {
  console.log(pid)
  try {
    const res = await instance.get(`/api/users/${pid}`)
    // console.log(res.data)
    return res.data
  } catch (error) {
    console.log("error")
    // console.log(error)
  }
  // try{
  //     const res = await instance.get(`/api/makers?`)
  // }
}

export default async function handler(req: any, res: any) {
  const { pid } = req.query
  //   console.log(pid)
  try {
    if (req.method === "GET") {
      const result = await getuserProfile(pid)
      console.log(result)
      if (result) {
        res.status(200).json({
          status: 200,
          data: result.data,
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
