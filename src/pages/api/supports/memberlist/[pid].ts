import { getMemberlist } from "@libs/api/support"

export default async function handler(req: any, res: any) {
  const { pid, page, count, param, sorted, order } = req.query

  try {
    if (req.method === "GET") {
      const result = await getMemberlist(pid, page, count, param, sorted, order)
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
  }
}
