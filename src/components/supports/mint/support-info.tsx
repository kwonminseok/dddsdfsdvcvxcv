import React from "react"

import { Box, Flex } from "@components/commons"
import { Folder } from "lucide-react"

const BadgeIntro = ({ sizeType }: { sizeType: number }) => {
  const iconSize = sizeType > 0 ? 24 : 18

  return (
    <Box sx={{ width: "100%", mb: 7, mr: 3 }}>
      <Flex sx={{ alignItems: "center", pb: 3 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
          <Folder size={iconSize} />
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          서포트 설명
        </Box>
      </Flex>
      <Box sx={{ width: "full", fontSize: [1, 2], wordBreak: "keep-all" }}>
        본 NFT는 2023년 6월 30일 서울 잠실에서 열린 플러디 국제 마라톤 대회에서
        하프코스를 완주한 참가자들에게 지급하는 디지털 증서입니다. 본 NFT는
        2023년 6월 30일 서울 잠실에서 열린 플러디 국제 마라톤 대회에서
        하프코스를 완주한 참가자들에게 지급하는 디지털 증서입니다. 본 NFT는
        2023.
      </Box>
    </Box>
  )
}
export default BadgeIntro
