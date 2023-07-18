import { getMakerInfo } from "@libs/api/maker"

export default async function handler(req: any, res: any) {
  const { pid } = req.query

  try {
    if (req.method === "GET") {
      const result = await getMakerInfo(pid)

      if (result) {
        res.status(200).json({
          status: 200,
          data: result.data,
          banner: result.data.maker.banner,
          profileImage: result.data.maker.profileImage,
          name: result.data.maker.name,
          description: result.data.maker.description,
          category: result.data.maker.category,
          createdAt: result.data.maker.createdAt,
          totalSupporters: result.data.maker.totalSupporters,
          totalMinted: result.data.maker.totalMinted,
          totalSupports: result.data.maker.totalSupports,
        })
      }
    }
  } catch (e) {
    console.log("e")
  }
}
