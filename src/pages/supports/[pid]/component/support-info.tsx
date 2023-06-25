import { Avatar, Box, Button, Flex } from "@components/commons"
import MoreContents from "@components/more-contents"
import { LuInfo } from "react-icons/lu"
const SupportInfo = () => {
  return (
    <Flex
      sx={{
        mb: [4, 6],
        minHeight: ["0px", "467px"],
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Flex
          sx={{ alignItems: "center", justifyContent: "space-between", mb: 2 }}
        >
          <Flex sx={{ alignItems: "center" }}>
            <Avatar
              src={
                "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
              }
              boxSx={{ mr: [2, 4] }}
              border="1px solid "
              size={[32, 40]}
            />
            <Box
              sx={{
                lineHeight: "28px",
                fontSize: [1, 2],
                fontWeight: "medium",
              }}
            >
              LPGA
            </Box>
          </Flex>
        </Flex>
        <Box sx={{ fontSize: [3, 7], fontWeight: "bold", mb: 4 }}>
          소백산 등정 뱃지
        </Box>
        <Flex sx={{ mb: 4 }}>
          <Box
            sx={{
              fontSize: [1, 2],
              fontWeight: "bold",
              lineHeight: "24px",
              mr: 4,
            }}
          >
            발급 기한
          </Box>
          <Box
            sx={{
              fontSize: [1, 2],
              lineHeight: "24px",
              display: ["block", "flex"],
            }}
          >
            <Box as="p">2023.06.01 오전 10:00</Box>
            <Box as="p" sx={{ display: ["none", "block"], mx: 2 }}>
              -
            </Box>
            <Box as="p">2023.06.07 오전 10:00</Box>
          </Box>
        </Flex>
        <MoreContents
          contents={
            "FT는 2023년 6월 30일 서울 잠실에서 열린 플러디 FT는 2023년 6월 30일 서울 잠실에서 열린 플러디FT는 2023년 6월 30일 서울 잠실에서 열린 플러디FT는 2023년 6월 30일 서울 잠실에서 열린 플러디FT는 2023년 6월 30일 서울 잠실에서 열린 플러디FT는 2023년 6월 30일 서울 잠실에서 열린 플러디FT는 2023년 6월 30일 서울 잠실에서 열린 플러디"
          }
          boxSx={{ fontSize: [1, 2], lineHeight: ["20px", "24px"] }}
          line={3}
        />
      </Box>
      <Flex
        sx={{
          position: ["fixed", "static"],
          display: "flex",
          flexDirection: "column",
          padding: ["8px 16px", 0],
          width: ["100%", "auto"],
          //   alignItems: "center",
          bottom: "0px",
          left: "0px",
        }}
      >
        <Button
          sx={{
            width: ["100%", "50%"],
            minWidth: "120px",
            minHeight: "48px",
            backgroundColor: "main50",
            color: "#fff",
            boxShadow: "floody3",
          }}
        >
          뱃지 받기
        </Button>
        <Box
          sx={{
            display: ["none", "flex"],
            bg: "black05",
            padding: "18px 24px",
            borderRadius: "8px",
            mt: 6,
          }}
        >
          <LuInfo size={18} />
          <Box sx={{ lineHeight: "20px", ml: 2 }}>
            발급 코드를 모를 경우 운영자에게 문의해주세요
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default SupportInfo
