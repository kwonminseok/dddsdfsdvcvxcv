import React, { memo } from "react"
import { Flex, Box } from "@components/commons"
import { Folder } from "lucide-react"
const test_list = [
  { title: "주최", content: "제20회 플러디 산악대회" },
  { title: "코스", content: "소백산 대청봉" },
  { title: "높이", content: "1,287m" },
]

const BlockInfo = memo(({ sizeType }: { sizeType: number }) => {
  const iconSize = sizeType > 0 ? 24 : 18
  const renderItems = test_list.map(item => {
    return (
      <Flex key={item.title} align="center" justify="space-between" mb="2">
        <Box
          sx={{
            color: "black50",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontSize: [0, 1],
          }}
        >
          {item.title}
        </Box>
        <Box
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontWeight: "medium",
            fontSize: [1, 2],
          }}
        >
          {item.content}
        </Box>
      </Flex>
    )
  })

  return (
    <Box sx={{ width: "100%", mb: 7, mr: 3 }}>
      <Flex sx={{ alignItems: "center", pb: 4 }}>
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
          블록체인 정보
        </Box>
      </Flex>
      <Box sx={{ width: "100%", fontSize: [1, 2] }}>{renderItems}</Box>
    </Box>
  )
})

export default BlockInfo
