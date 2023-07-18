import { getSupportInfo } from "@libs/api/support"

export default async function handler(req: any, res: any) {
  const { pid } = req.query

  try {
    if (req.method === "GET") {
      const result = await getSupportInfo(pid)

      if (result) {
        res.status(200).json({
          status: 200,
          data: result.data.support,
          maker: result.data.support.maker,
          title: result.data.support.title,
          useMintPeriod: result.data.support.useMintPeriod,
          startMintDate: result.data.support.startMintDate,
          endMintDate: result.data.support.endMintDate, //? result.data.endMintDate : undefined,
          totalMinted: result.data.support.totalMinted,
          mainImage: result.data.support.mainImage,
          description: result.data.support.description,
          subImages: result.data.support.subImages,
          attributes: result.data.support.attributes,
          _id: result.data.support._id,
          digit: result.data.support.passwordType == "MULTIPLE" ? 6 : 4,
          totalSupporters: result.data.support.totalSupporters,
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
