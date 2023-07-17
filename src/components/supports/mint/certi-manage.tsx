import React from "react"
import { Box, Button, Flex } from "@components/commons"
import { Cog } from "lucide-react"
const BadgeManage = ({ sizeType }: { sizeType: number }) => {
  const iconSize = sizeType > 0 ? 24 : 18
  return (
    <Box sx={{ width: "100%", mb: 7, mr: 3 }}>
      <Flex sx={{ alignItems: "center", pb: 4 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
          <Cog size={iconSize} />
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          인증서 관리
        </Box>
      </Flex>
      <Box sx={{ width: "100%", fontSize: [1, 2], lineHeight: ["20px", "24px"], wordBreak: "keep-all", mb: 6 }}>
        뱃지를 다른 지갑으로 전송 하거나 삭제 할 수 있습니다. 뱃지를 다른 지갑으로 전송 하거나 삭제 할 수
        있습니다.뱃지를 다른 지갑으로 전송 하거나 삭제 할 수 있습니다.
      </Box>
      <Button
        sx={{
          mr: 4,
          boxShadow: "floody3",
          minWidth: "176px",
          minHeight: "40px",
          bg: "black70",
          color: "#fff",
        }}
      >
        <Box>삭제하기</Box>
      </Button>
    </Box>
  )
}
export default BadgeManage
