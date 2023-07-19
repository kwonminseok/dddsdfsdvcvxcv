import Link from "next/link"
import { Box, Flex, Avatar, SVG } from "@components/commons"
import { createIcon } from "@icons/icons"
import { transformedEOA } from "@libs/utils/transformed"
interface MemberCardProps {
  count: number
  name: string[]
  profileImage?: string[]
  eoa: string[][] | string[]
  _id: {
    user: string
  }
}
const MemberCard = ({ count, name, eoa, _id }: MemberCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        mb: 3,
        mr: 2,
      }}
    >
      <Box
        sx={{
          bg: "black05",
          boxShadow: "floody2",
          transition: "all 0.3s ",
          borderRadius: "6px",
          overflow: "hidden",
          ":hover": { bg: "black10", boxShadow: "rgba(0,0,0,0.3) 2px 2px 4px 0", transform: "translateY(-2px)" },
        }}
      >
        <Link href={`/profile/${_id.user}`} passHref legacyBehavior>
          <Box as="a">
            <Flex sx={{ width: "100%", py: 4, px: [0, 10], alignItems: "center", justifyContent: ["", ""] }}>
              <Flex sx={{ alignItems: "center", flex: 1 }}>
                <Avatar
                  src={
                    "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
                  }
                  boxSx={{ mr: "27px" }}
                  size={["48px", "48px"]}
                />
                <Box sx={{ fontSize: "24px", fontWeight: "bold", color: "black90" }}>{name[0]}</Box>
              </Flex>
              <Flex sx={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <SVG fill="1a1a1a" size={["16px"]} viewBox="0 0 222 222">
                  {createIcon("wallet")}
                </SVG>
                <Box sx={{ pl: 3, fontWeight: "18px", fontWieght: "medium", color: "black90" }}>
                  {transformedEOA(eoa[0][0])}
                </Box>
              </Flex>
              <Flex sx={{ alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
                <Box sx={{ fontSize: "24px", fontWeight: "bold", pr: 3 }}>{count}</Box>
                <Box>Badges</Box>
              </Flex>
            </Flex>
          </Box>
        </Link>
      </Box>
    </Box>
  )
}

export default MemberCard
