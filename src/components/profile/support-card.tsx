import CardImageWrapper from "./card-image-wrapper"
import Link from "next/link"
import { Box, Flex } from "@components/commons"
import { forwardRef } from "react"
interface SupportCardProps {
  maker: {
    name: string
  }
  _id: string
  title: string
  mainImage: string
  createdAt: string
  supporter: string
}
function formatTimestamp(str: string) {
  const date = new Date(str)
  const options = { year: "numeric", month: "short", day: "numeric" } as const
  const formattedDate = date.toLocaleDateString("en-US", options)
  return formattedDate
}

const SupportCard = forwardRef(({ maker, _id, title, mainImage, createdAt, supporter }: SupportCardProps, ref) => {
  return (
    <Box sx={{ margin: ["12px", "4px 0px 10px 4px"] }} ref={ref}>
      <Link href={`/supports/mint/${_id}`} passHref legacyBehavior>
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
            boxShadow: "myscard",
            minHeight: "120px",
          }}
        >
          <Box sx={{}}>
            <CardImageWrapper src={mainImage} />
            <Box
              sx={{
                pr: 4,
                pb: 1,
                color: "t.primary",
                paddingLeft: 4,
              }}
            >
              <Box
                sx={{
                  fontSize: 0,
                  fontWeight: "medium",
                  lineHeight: "20px",
                }}
              >
                {maker.name}
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
              <Flex __css={{ pt: 8, fontSize: 0 }}>Supporter</Flex>
              <Flex
                __css={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  pb: 1,
                }}
              >
                <Flex
                  sx={{
                    flex: 1,
                    fontSize: 1,
                    fontWeight: "bold",
                  }}
                >
                  <Box>{supporter}</Box>
                </Flex>
                <Flex sx={{ flex: 1, lineHeight: "20px", fontSize: 0, justifyContent: "flex-end" }}>
                  {formatTimestamp(createdAt)}
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  )
})

export default SupportCard
