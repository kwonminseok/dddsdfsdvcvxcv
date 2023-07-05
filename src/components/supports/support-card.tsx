import CardImageWrapper from "./card-image-wrapper"
import Link from "next/link"
import { Box, Flex } from "@components/commons"
import { LuUser, LuHeart } from "react-icons/lu"
import useWindowSize from "@libs/hooks/use-window-size"
import { forwardRef } from "react"
interface IMaker {
  name: string
  profileImage: string
}

interface SupportCardProps {
  _id: string
  mainImage: string
  maker: IMaker
  title: string
  startSupportDate: number
  totalMinted: number

  category?: string
}

function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp)
  const options = { year: "numeric", month: "short", day: "numeric" } as const
  const formattedDate = date.toLocaleDateString("en-US", options)
  return formattedDate
}

const defualt =
  "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
const SupportCard = forwardRef(
  ({ _id, mainImage, category, maker, title, totalMinted, startSupportDate }: SupportCardProps, ref) => {
    const sizeType = useWindowSize()
    const iconSize = (sizeType as number) > 0 ? 16 : 12

    return (
      <Box ref={ref} sx={{ width: "100%", bg: "" }}>
        <Link href={`/supports/${_id}`} passHref legacyBehavior>
          <Box
            as="a"
            sx={{
              display: "block",
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              cursor: "pointer",
              overlofw: "hidden",
              transition: "all 0.3s ease 0s",
              // boxShadow: "scard",
              minHeight: "120px",
              ":hover": {
                transform: "translateY(-4px)",
                boxShadow: "scardhover",
                //         transform: translateY(-4px);
                // box-shadow: rgba(24, 26, 32, 0.1) 0px 0px 1px, rgba(71, 77, 87, 0.08) 0px 7px 14px, rgba(24, 26, 32, 0.08) 0px 3px 6px;
              },
            }}
          >
            {/* <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            backdropFilter: "blur(10px)",
            justifyContent: "center",
            bg: "rgba(0,0,0,0.1)",
            position: "absolute",
            zIndex: "2",
            top: [1, 2],
            left: [1, 2],
            borderRadius: "4px",
            px: ["2px", 2],
            py: ["2px", 1],
            color: "#fff",
          }}
        >
          <LuHeart size={iconSize} />
          <Box sx={{ pl: 1, fontSize: [0, 2], lineHeight: ["16px", "20px"] }}>
            42
          </Box>
        </Box> */}
            <CardImageWrapper src={mainImage} />
            <Box sx={{ padding: 2, color: "t.primary", paddingLeft: ["136px", 2] }}>
              <Box
                sx={{
                  fontSize: [0, 1],
                  fontWeight: "normal",
                  lineHeight: "20px",
                }}
              >
                메이커 네임
                {/* {maker.name ? maker.name : "shq"} */}
              </Box>
              <Box
                sx={{
                  fontSize: [1, 2],
                  lineHeight: ["20px", "24px"],
                  fontWeight: "bold",
                  minHeight: ["40px", "48px"],
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  display: "-webkit-box",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </Box>
              <Flex
                __css={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  pb: 1,
                  pt: 4,
                }}
              >
                <Flex sx={{ flex: 1, lineHeight: "20px", fontSize: 0 }}>
                  {/* @{maker} */}
                  {formatTimestamp(startSupportDate)}
                </Flex>
                <Flex
                  sx={{
                    flex: 1,
                    lineHeight: "20px",
                    justifyContent: "flex-end",
                  }}
                >
                  <LuUser />
                  <Box sx={{ fontSize: [1, 2], fontWeight: "medium", pl: 1 }}>{totalMinted}</Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Link>
      </Box>
    )
  },
)

export default SupportCard
