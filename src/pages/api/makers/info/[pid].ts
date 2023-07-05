import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const getMakerInfo = async (pid: string) => {
  console.log(pid)
  try {
    const res = await instance.get(`/api/floody/makers/${pid}`)
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
      const result = await getMakerInfo(pid)
      console.log(result)
      if (result) {
        res.status(200).json({
          status: 200,
          data: result.data,
          banner: result.data.banner,
          profileImage: result.data.profileImage,
          name: result.data.name,
          description: result.data.description,
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
