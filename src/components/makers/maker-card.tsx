import Link from "next/link"
import { Box, Flex, Avatar } from "@components/commons"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Award } from "lucide-react"

const MakerCard = () => {
  return (
    <Box sx={{ width: "100%", bg: "", mb: 3 }}>
      <Link href="/makers/1" passHref legacyBehavior>
        <Box as="a" sx={{}}>
          <Box
            sx={{
              borderRadius: "12px",
              boxShadow: "shadow3",
              cursor: "pointer",
              overflow: "hidden",
              transition: "all 0.3s ease 0s",
              ":hover": {
                boxShadow: "rgba(0, 0, 0, 0.7) 2px 2px 12px;",
                transform: "translateY(-4px)",
              },
            }}
          >
            <Box sx={{ height: ["194px", "210px"], position: "relative" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 1,
                }}
              >
                <LazyLoadImage
                  src="https://public.nftstatic.com/static/nft/webp/a477bcb26a134af0a2a50266f0270f8e_600x600.webp"
                  wrapperClassName="lazy-load-image-wrapper"
                  effect="blur"
                  wrapperProps={{
                    style: {
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      border: "0px solid",
                      objectFit: "cover",
                      opacity: 1,
                    },
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: "18px",
                  overflow: "hidden",
                  bottom: ["-17px", "-17px"],
                }}
              >
                <Box
                  sx={{
                    width: ["60px", "64px"],
                    height: ["60px", "64px"],
                    margin: "5px",
                  }}
                >
                  <Avatar
                    src={
                      "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
                    }
                    size={[60, 64]}
                    style={{
                      boxShadow:
                        "2px 2px 5px 0 rgba(0, 0, 0, 0.4), 2px 2px 5px 0 rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Flex
              sx={{
                mt: 5,
                px: 6,
                pb: 2,
                flexDirection: "column",
                // justifyContent: "space-between",
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontSize: ["20px"],
                    fontWeight: "bold",
                    lineHeight: ["24px"],
                  }}
                >
                  NIKE NRC
                </Box>
                <Box
                  __css={{
                    position: "relative",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    wordWrap: "break-word",
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    fontSize: 0,
                    lineHeight: "16px",
                  }}
                >
                  러닝의 새로운 기술, 퍼포먼스를 위한 최상의 스타일을
                  확인해보시라구요오오오오오오옹
                </Box>
              </Box>
              <Flex sx={{ justifyContent: "flex-end", pt: 4 }}>
                <Flex sx={{ alignItems: "center" }}>
                  <Award size={16} />
                  <Box sx={{ fontSize: "14px", pl: 1 }}>127</Box>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Link>
    </Box>
  )
}

export default MakerCard
