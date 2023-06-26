import { Box, Flex } from "@components/commons"
import ImageWrapper from "@components/imageWrapper"
import { LuBookOpen } from "react-icons/lu"
const SupportStory = ({ sizeType }: { sizeType: number }) => {
  const iconSize = sizeType > 0 ? 24 : 18

  return (
    <Box sx={{ mb: 7, width: "100%", mr: [0, 3] }}>
      <Flex sx={{ alignItems: "center", pb: 3 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
          <LuBookOpen size={sizeType} />
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          서포터 스토리
        </Box>
      </Flex>
      <Box
        sx={{ width: "100%", fontSize: [1, 2], lineHeight: ["20px", "24px"] }}
      >
        본 NFT는 2023년 6월 30일 서울 잠실에서 열린 플러디 국제 마라톤 대회에서
        하프코스를 완주한 참가자들에게 지급하는 디지털 증서입니다. 본 NFT는
        2023년 6월 30일 서울 잠실에서 열린 플러디 국제 마라톤 대회에서
        하프코스를 완주한 참가자들에게 지급하는 디지털 증서입니다. 본 NFT는
        2023.
      </Box>
      <Flex sx={{ mt: 4 }}>
        <Box sx={{ flex: 1, mr: "9px" }}>
          <ImageWrapper
            brProps="8px"
            src={
              "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
            }
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
        <Box sx={{ flex: 1, mr: "9px" }}>
          <ImageWrapper
            brProps="8px"
            src={
              "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
            }
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
        <Box sx={{ flex: 1, mr: "9px" }}>
          <ImageWrapper
            brProps="8px"
            src={
              "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
            }
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
        <Box sx={{ flex: 1 }}>
          <ImageWrapper
            brProps="8px"
            src={
              "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
            }
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
      </Flex>
    </Box>
  )
}

export default SupportStory
