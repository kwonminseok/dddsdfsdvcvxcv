import { Box, Flex, Avatar } from "@components/commons"
import ImageWrapper from "@components/imageWrapper"
import LogoSmall from "@icons/logo-small"

const test_list = [
  { title: "발행량", content: "873" },
  { title: "발행순번", content: "96" },
  { title: "스마트컨트랙트", content: "0x23ks34f0...83klksdfff", link: "/" },
  { title: "토큰 아이디", content: "10273" },
  { title: "블록체인", content: "Klaytn" },
]

interface CertificateProps {
  imgSrc?: string
  makerimgSrc?: string
  ownerimgSrc?: string
}
const defaultImg =
  "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"

const Certificate = ({
  imgSrc = defaultImg,
  makerimgSrc = defaultImg,
  ownerimgSrc = defaultImg,
}: CertificateProps) => {
  return (
    <Box sx={{ mx: 1, mb: 2 }}>
      <Flex
        sx={{
          position: "relative",
          maxHeight: ["100%", "600px"],
          borderRadius: "12px",
          boxShadow: "shadow3",
          flexDirection: ["column", "row"],
          alignItems: ["center", "inherit"],
          px: [4, 6],
          py: [4, 6],
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: "100%",
            height: "100%",
            position: "relative",
            maxWidth: ["100%", "520px"],
            my: "auto",
          }}
        >
          <ImageWrapper
            src={imgSrc}
            wrapperClassName="lazy-load-image-wrapper"
            effect="blur"
            wrapperProps={{
              style: {
                display: "flex",
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                border: "0px solid",
              },
            }}
            style={{
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        </Box>
        <Flex
          sx={{
            flex: 1,
            ml: [0, 6],
            mt: [4, 0],
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Box sx={{}}>
            <Flex
              __css={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Flex sx={{ alignItems: "center" }}>
                <Avatar
                  src={makerimgSrc}
                  boxSx={{ mr: [2, 2] }}
                  border="1px solid "
                  size={[32, 32]}
                />
                <Box
                  sx={{
                    lineHeight: "28px",
                    fontSize: [0, 1],
                    fontWeight: "medium",
                  }}
                >
                  LPGA
                </Box>
              </Flex>
            </Flex>
            <Box
              sx={{ fontSize: [3, 7], fontWeight: "bold", mb: 4, mt: [3, 1] }}
            >
              동아마라톤 하프코스 완주 뱃지 동아마라톤 하프코스 완주 뱃지
            </Box>
            <Box sx={{ mt: 6, mb: 4 }}>
              <Box sx={{ bg: "black05", borderRadius: "6px", px: 6, py: 4 }}>
                <Box
                  sx={{
                    fontSize: 0,
                    lineHeight: "16px",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  Owner
                </Box>
                <Flex>
                  <Avatar
                    src={ownerimgSrc}
                    boxSx={{ mr: [2, 2] }}
                    size={[48, 48]}
                  />
                  <Box>
                    <Box
                      sx={{
                        fontSize: [2, "20px"],
                        lineHeight: ["24px", "28px"],
                        fontWeight: "bold",
                      }}
                    >
                      산이너무너무좋아 1745559
                      {/* ower name */}
                    </Box>
                    <Box
                      sx={{
                        fontSize: 0,
                        fontWeight: "normal",
                        lineHeight: "16px",
                        color: "black50",
                      }}
                    >
                      0X123SD…FHT5769
                      {/* owner address */}
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box sx={{ mb: 4 }}>
              {test_list.map(item => (
                <Flex
                  key={item.title}
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                    fontSize: [0, 1],
                  }}
                >
                  <Box sx={{ color: "black70", fontWeight: "normal" }}>
                    {item.title}
                  </Box>
                  <Box
                    sx={{
                      fontSize: [0, 1],
                      fontWeight: "normal",
                      color: item.link ? "rgb(32, 129, 226)" : "inherit",
                    }}
                  >
                    {" "}
                    {item.content}
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>
          <Flex sx={{ justifyContent: "flex-end" }}>
            <LogoSmall width={"129px"} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
export default Certificate
