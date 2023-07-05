import { Avatar, Box, Button, Flex, Skeleton } from "@components/commons"
import MoreContents from "@components/more-contents"
import { LuInfo } from "react-icons/lu"
import { Share2, MoreVertical } from "lucide-react"

interface TMaker {
  _id: string
  name: string
  profileImage: string
}

interface SupportInfo {
  maker: TMaker
  title: string
  useMintPeriod: boolean
  startMintDate: number
  endMintDate?: number | undefined
}

const SupportInfo = ({ maker, title, useMintPeriod, startMintDate, endMintDate }: SupportInfo) => {
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
        <Flex sx={{ alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          {/* maker */}
          <Flex sx={{ alignItems: "center" }}>
            {maker ? (
              <Avatar src={maker.profileImage} boxSx={{ mr: [2, 4] }} border="1px solid " size={[32, 40]} />
            ) : (
              <Skeleton height={["32px", "40px"]} sx={{ width: ["32px", "40px"], mr: [2, 4] }} radius="50%" />
            )}

            <Box
              sx={{
                lineHeight: "28px",
                fontSize: [1, 2],
                fontWeight: "medium",
              }}
            >
              {maker ? <>{maker.name}</> : <Skeleton height={"16px"} sx={{ minWidth: "80px" }} radius="4px" />}
            </Box>
          </Flex>

          <Flex sx={{ alignItems: "center" }}>
            <Button sx={{ bg: "transparent", border: "none" }}>
              <Share2 size={20} />
            </Button>
            <Button sx={{ bg: "transparent", border: "none" }}>
              <MoreVertical size={20} />
            </Button>
          </Flex>
        </Flex>
        {/* <Box sx={{ fontSize: [3, 7], fontWeight: "bold", mb: 4 }}> */}
        {/* <Skeleton height={"40px"} sx={{ width: "80%", mb: 4 }} radius="4px" /> */}

        {title ? (
          <Box sx={{ fontSize: [3, 7], fontWeight: "bold", mb: 4 }}>{title}</Box>
        ) : (
          <Skeleton height={"40px"} sx={{ width: "80%", mb: 4 }} radius="4px" />
        )}
        {/* </Box> */}
        <Flex sx={{ mb: 4 }}>
          <Box
            sx={{
              fontSize: [1, 2],
              fontWeight: "bold",
              lineHeight: "24px",
              mr: 4,
            }}
          >
            {useMintPeriod !== undefined ? (
              <>발급 기한</>
            ) : (
              <Skeleton height={"16px"} sx={{ minWidth: "63px", my: 1 }} radius="4px" />
            )}
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
          zIndex: "1",
          bottom: "0px",
          left: "0px",
          bg: ["#fff", "inherit"],
        }}
      >
        {useMintPeriod !== undefined ? (
          <Button
            sx={{
              width: ["100%", "50%"],
              minWidth: "120px",
              minHeight: "48px",
              backgroundColor: "main50",
              color: "black05",
              boxShadow: ["none", "floody3"],
            }}
          >
            뱃지 받기
          </Button>
        ) : (
          <Skeleton
            height={"48px"}
            sx={{ minWidth: "120px", width: ["100%", "50%"], minHeight: "48px" }}
            radius="4px"
          />
        )}

        <Box
          sx={{
            display: ["none", "flex"],
            bg: "black05",
            padding: "18px 24px",
            borderRadius: "8px",
            mt: 6,
            alignItems: "center",
          }}
        >
          <LuInfo size={18} />
          <Box sx={{ lineHeight: "18px", ml: 2, fontSize: 1 }}>발급 코드를 모를 경우 운영자에게 문의해주세요</Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default SupportInfo
