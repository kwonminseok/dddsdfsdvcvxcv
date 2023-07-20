import { getMakerList } from "@libs/api/maker"

export default async function handler(req: any, res: any) {
  try {
    if (req.method === "GET") {
      const query = req.query
      const { page, count, param, sorted, order } = query

      const result = await getMakerList(page, count, param, sorted, order)
      // console.log(result)
      if (result) {
        res.status(200).json({ status: 200, total: result.data.total, data: result.data.list })
      }
    }
  } catch (e) {
    console.log("e")
  }
}
