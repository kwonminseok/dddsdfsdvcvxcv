import { getMintedSupportInfo } from "@libs/api/support"

export default async function handler(req: any, res: any) {
  const { pid } = req.query
  try {
    if (req.method === "GET") {
      const result = await getMintedSupportInfo(pid)
      console.log(result)
      if (result) {
        res.status(200).json({
          status: 200,
          data: result.data,
          maker: result.data.maker,
          certificate: {
            mainImage: result.data.mainImage,
            title: result.data.title,
            maker: {
              name: result.data.maker.name,
              profileImage: result.data.maker.profileImage,
              _id: result.data.maker._id,
            },
            blockInfo: [
              { key: "totalMinted", value: result.data.support.totalMinted },
              { key: "editionNum", value: result.data.editionNumber },
              { key: "address", value: result.data.maker.address },
              { key: "tokenId", value: parseInt(result.data.nftId, 16) },
              { key: "blockchain", value: "Klaytn" },
            ],
            user: result.data.user,
            // editionNumber: result.data.editionNumber,
            // nftId: parseInt(result.data.nftId, 16),
            // txHash: result.data.txHash,
          },
          support: result.data.support,
          // title: result.data.title,
          // useMintPeriod: result.data.useMintPeriod,
          // startMintDate: result.data.startMintDate,
          // endMintDate: result.data.endMintDate, //? result.data.endMintDate : undefined,
          // totalMinted: result.data.totalMinted,
          // mainImage: result.data.mainImage,
          // description: result.data.description,
          // subImages: result.data.subImages,
          // attributes: result.data.attributes,
          // _id: result.data._id,
          // digit: result.data.passwordType == "MULTIPLE" ? 6 : 4,
          // totalSupporters: result.data.totalSupporters,
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
