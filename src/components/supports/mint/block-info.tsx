import React, { memo } from "react"
import { Flex, Box, SVG } from "@components/commons"
import { Folder } from "lucide-react"
import { createIcon } from "@icons/icons"
import { useTranslation } from "next-i18next"
const test_list = [
  { title: "주최", content: "제20회 플러디 산악대회" },
  { title: "코스", content: "소백산 대청봉" },
  { title: "높이", content: "1,287m" },
]

const BlockInfo = memo(({ sizeType }: { sizeType: number }) => {
  const iconSize = sizeType > 0 ? 24 : 18
  const { t } = useTranslation(["common", "support"])
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
          <SVG fill="1a1a1a" size={["24px"]} viewBox="0 0 222 222">
            {createIcon("detail")}
          </SVG>
          {/* <Folder size={iconSize} strokeWidth={3} /> */}
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          {t("support:details")}
        </Box>
      </Flex>
      <Box sx={{ width: "100%", fontSize: [1, 2] }}>{renderItems}</Box>
    </Box>
  )
})

export default BlockInfo
