import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const getSupportList = async (pid: string) => {
  console.log(pid)
  try {
    const res = await instance.get(`/api/supports/${pid}`)
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
      const result = await getSupportList(pid)
      console.log(result)
      if (result) {
        res.status(200).json({
          status: 200,
          data: result.data,
          maker: result.data.maker,
          title: result.data.title,
          useMintPeriod: result.data.useMintPeriod,
          startMintDate: result.data.startMintDate,
          endMintDate: result.data.endMintDate, //? result.data.endMintDate : undefined,
          totalMinted: result.data.totalMinted,
          mainImage: result.data.mainImage,
          description: result.data.description,
          subImages: result.data.subImages,
          attributes: result.data.attributes,
          _id: result.data._id,
          digit: result.data.passwordType == "MULTIPLE" ? 6 : 4,
          totalSupporters: result.data.totalSupporters,
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
