import React from "react"

import { Box, Flex } from "@components/commons"
import { Network } from "lucide-react"

const MakerInfo = ({ sizeType }: { sizeType: number }) => {
  const iconSize = sizeType > 0 ? 24 : 18

  return (
    <Box sx={{ width: "100%", mb: 7, mr: 3 }}>
      <Flex sx={{ alignItems: "center", pb: 3 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
          <Network size={iconSize} />
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          팬덤 소개
        </Box>
      </Flex>
      <Box sx={{ width: "full", fontSize: [1, 2], wordBreak: "keep-all" }}>
        플러디 국제산악회는 1997년부터 강원도 원주를 기반으로 시작된 전통 있는
        산악회입니다. 매주 1회 전국 각지의 산을 오르며, 연 1회는 해외 유명 산을
        방문합니다. 초보자도 함께 정상에 올라 뿌듯함을 만끽할 수 있는
        산악회입니다.
      </Box>
    </Box>
  )
}
export default MakerInfo
