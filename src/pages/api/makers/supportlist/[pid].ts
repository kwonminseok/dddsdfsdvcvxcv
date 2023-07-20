import { getMakerSupportList } from "@libs/api/maker"

export default async function handler(req: any, res: any) {
  const { pid, page, count, sorted, order } = req.query

  try {
    if (req.method === "GET") {
      const result = await getMakerSupportList(pid, page, count, sorted, order)

      if (result) {
        res.status(200).json({
          status: 200,
          supports: result.data.list,
          total: result.data.total,
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
