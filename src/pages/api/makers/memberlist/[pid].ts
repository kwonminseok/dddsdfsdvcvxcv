import { getMakerMemberlist } from "@libs/api/maker"

export default async function handler(req: any, res: any) {
  //   const { pid } = req.query
  const { pid, page, count, param, sorted, order } = req.query

  try {
    if (req.method === "GET") {
      const result = await getMakerMemberlist(pid, page, count, sorted, order)

      if (result) {
        res.status(200).json({
          status: 200,
          members: result.data,
          //   total: result.data.supports.total,
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
