import Link from "next/link"
import { Box, Flex, Avatar } from "@components/commons"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Award } from "lucide-react"
import { forwardRef } from "react"

interface MakerProps {
  _id: string
  banner: string //배너 이미지
  profileImage: string
  name: string
  description: string
  totalSupports: number

  category: string
}

const MakerCard = forwardRef(({ _id, banner, profileImage, name, description, totalSupports }: MakerProps, ref) => {
  return (
    <Box ref={ref} sx={{ width: "100%", bg: "", mb: 3 }}>
      <Link href={`/makers/${_id}`} passHref legacyBehavior>
        <Box as="a" sx={{}}>
          <Box
            sx={{
              borderRadius: "24px",
              boxShadow: "shadow3",
              cursor: "pointer",
              overflow: "hidden",
              transition: "all 0.3s ease 0s",
              ":hover": {
                boxShadow: "rgba(0, 0, 0, 0.5) 2px 2px 8px;",
                transform: "translateY(-2px)",
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
                  src={banner}
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
                    src={profileImage}
                    size={[60, 64]}
                    style={{
                      boxShadow: "2px 2px 5px 0 rgba(0, 0, 0, 0.4), 2px 2px 5px 0 rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Flex
              sx={{
                mt: 5,
                px: 6,
                pb: 3,
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
                    pb: 1,
                  }}
                >
                  {name}
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
                  {description}
                </Box>
              </Box>
              <Flex sx={{ justifyContent: "flex-end", pt: 4 }}>
                <Flex sx={{ alignItems: "center" }}>
                  <Award size={16} />
                  <Box sx={{ fontSize: "16px", pl: 1, fontWeight: "medium" }}>{totalSupports}</Box>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Link>
    </Box>
  )
})

export default MakerCard
