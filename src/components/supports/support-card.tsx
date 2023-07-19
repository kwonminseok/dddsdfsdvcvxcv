import CardImageWrapper from "./card-image-wrapper"
import Link from "next/link"
import { Box, Flex } from "@components/commons"
import { LuUser, LuHeart } from "react-icons/lu"
import useWindowSize from "@libs/hooks/use-window-size"
import { forwardRef } from "react"
import { useRouter } from "next/router"
interface IMaker {
  name: string
  profileImage: string
}

interface SupportCardProps {
  _id: string
  mainImage: string
  maker?: IMaker
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

const SupportCard = forwardRef(
  ({ _id, mainImage, category, maker, title, totalMinted, startSupportDate }: SupportCardProps, ref) => {
    const sizeType = useWindowSize()
    const iconSize = (sizeType as number) > 0 ? 16 : 12
    const router = useRouter()
    const { pathname } = router
    //sx={{ width: "100%", bg: "" }}
    return (
      <Box ref={ref} sx={{ width: "100%" }}>
        <Link href={`/supports/${_id}`} passHref legacyBehavior>
          <Box
            as="a"
            sx={{
              display: "block",
              position: "relative",
              width: "100%",

              borderRadius: "8px",
              cursor: "pointer",
              overflow: "hidden",
              transition: "all 0.3s ease 0s",
              minHeight: "120px",
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
            <CardImageWrapper
              src={mainImage}
              boxSx={{
                transition: "transform 0.3s ease 0s",
                ":hover": {
                  transform: "scale(1.05)",
                },
                width: ["120px", "100%"],
              }}
            />
            <Box sx={{ padding: 2, color: "t.primary", paddingLeft: ["136px", 2] }}>
              {maker && (
                <Box
                  sx={{
                    fontSize: [0],
                    fontWeight: "normal",
                    lineHeight: "18px",
                  }}
                >
                  {maker.name}
                </Box>
              )}

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
              {pathname !== "/supports" ? (
                <Flex sx={{ fontSize: 0, lineHeight: "18px" }}>@ Bali, Indonesia</Flex>
              ) : null}
              <Flex
                __css={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  pb: 1,
                  pt: 2,
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
                    alignItems: "center",
                  }}
                >
                  <LuUser />
                  <Box sx={{ fontSize: [1, 2], fontWeight: "medium", pl: 1 }}>{totalMinted}</Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Link>
        <Box></Box>
      </Box>
    )
  },
)

export default SupportCard
