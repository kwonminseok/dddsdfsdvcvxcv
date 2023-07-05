import CardImageWrapper from "./card-image-wrapper"
import Link from "next/link"
import { Box, Flex } from "@components/commons"
import LogoSmall from "@icons/logo-small"
interface SupportCardProps {
  href?: string
  imgSrc?: string
  maker: string
  name: string
  timestamp?: number
}
const defualt =
  "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
const SupportCard = ({ href = "/", imgSrc = defualt, maker, name }: SupportCardProps) => {
  return (
    <Box sx={{ margin: ["12px", "4px 0px 10px 4px"] }}>
      <Link href={href} passHref legacyBehavior>
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
            <CardImageWrapper src={imgSrc} />
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
                {maker}
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
                {name}
              </Box>
              <Flex
                __css={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                  pb: 1,
                  pt: 8,
                }}
              >
                <Flex sx={{ flex: 1, lineHeight: "20px", fontSize: 0 }}>Aug 24 2021</Flex>
                <Flex
                  sx={{
                    flex: 1,
                    lineHeight: "20px",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <LogoSmall width={"100%"} />
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  )
}

export default SupportCard
