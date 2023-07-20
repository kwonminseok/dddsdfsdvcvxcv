import { Box, Flex, Avatar, Skeleton } from "@components/commons"
import ImageWrapper from "@components/imageWrapper"
import LogoSmall from "@icons/logo-small"
import { transformedEOA } from "@libs/utils/transformed"

const test_list = [
  { title: "발행량", content: "873" },
  { title: "발행순번", content: "96" },
  { title: "스마트컨트랙트", content: "0x23ks34f0...83klksdfff", link: "/" },
  { title: "토큰 아이디", content: "10273" },
  { title: "블록체인", content: "Klaytn" },
]

interface CertificateProps {
  certificate: {
    mainImage: string
    title: string
    maker: {
      name: string
      profileImage: string
      _id: string
    }
    user: {
      _id: string
      eoa: string
      nickname: string
    }
    blockInfo: any[]
  }

  // editionNumber?: number
  // nftId: number
  // txHash: string
}
const defaultImg =
  "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"

const Certificate = ({ certificate }: CertificateProps) => {
  return (
    <Box sx={{ mx: 1, mb: 2 }}>
      <Flex
        sx={{
          position: "relative",
          maxHeight: ["100%", "600px"],
          borderRadius: "12px",
          boxShadow: "2px 3px 15px 0 rgba(0, 0, 0, 0.4)",
          flexDirection: ["column", "row"],
          alignItems: ["center", "inherit"],
          px: [4, 10],
          py: [4, 10],
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
          {certificate.mainImage ? (
            <ImageWrapper
              src={certificate.mainImage}
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
          ) : (
            <Skeleton sx={{ width: "100%", height: "100%" }} />
          )}
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
                {certificate && false ? (
                  <>
                    <Avatar
                      src={certificate.maker.profileImage}
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
                      {certificate.maker.name}
                    </Box>
                  </>
                ) : (
                  <>
                    <Box sx={{ mr: [2, 2] }}>
                      <Skeleton sx={{ width: "32px", height: "32px" }} radius="50%" />
                    </Box>
                    <Skeleton sx={{ height: "16px", width: "120px" }} radius="4px" />
                  </>
                )}
              </Flex>
            </Flex>
            {certificate && false ? (
              <Box sx={{ fontSize: [3, 7], fontWeight: "bold", mb: 4, mt: [3, 1] }}>{certificate.title}</Box>
            ) : (
              <Box sx={{ mt: [3, 1], mb: 4 }}>
                <Skeleton sx={{ width: "95%", height: ["20px", "28px"] }} radius="4px" />
                <Box sx={{ pt: 2 }}>
                  <Skeleton sx={{ width: "55%", height: ["20px", "28px"] }} radius="4px" />
                </Box>
              </Box>
            )}
            {certificate && false ? (
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
                    <Avatar src={defaultImg} boxSx={{ mr: [2, 2] }} size={[48, 48]} />
                    <Box>
                      <Box
                        sx={{
                          fontSize: [2, "20px"],
                          lineHeight: ["24px", "28px"],
                          fontWeight: "bold",
                        }}
                      >
                        {certificate.user.nickname}
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
                        {transformedEOA(certificate.user.eoa)}
                        {/* owner address */}
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            ) : (
              <Box sx={{ mt: 6, mb: 4 }}>
                <Box sx={{ bg: "black05", borderRadius: "6px", px: 6, py: 4 }}>
                  <Skeleton sx={{ width: "40px", height: "10px" }} />
                  <Flex>
                    <Skeleton sx={{ width: "48px", height: "48px" }} radius="50%" />
                  </Flex>
                </Box>
              </Box>
            )}
            <Box sx={{ mb: 4 }}>
              {certificate.blockInfo.map(item => (
                <Flex
                  key={item.key}
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                    fontSize: [0, 1],
                  }}
                >
                  <Box sx={{ color: "black70", fontWeight: "normal" }}>{item.key}</Box>
                  <Box
                    sx={{
                      fontSize: [0, 1],
                      fontWeight: "normal",
                      color: item.link ? "rgb(32, 129, 226)" : "inherit",
                    }}
                  >
                    {" "}
                    {item.value}
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>
          <Flex sx={{ justifyContent: "flex-end" }}></Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
export default Certificate
