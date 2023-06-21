import { Box, Flex } from "@components/commons"
import { LuNewspaper } from "react-icons/lu"

const test_list = [
  { title: "주최", content: "제20회 플러디 산악대회" },
  { title: "코스", content: "소백산 대청봉" },
  { title: "높이", content: "1,287m" },
]

const DetailInfo = ({ sizeType }: { sizeType: number }) => {
  const iconSize = sizeType > 0 ? 24 : 18
  const _renderItmes = test_list.map(item => {
    return (
      <Flex
        key={item.title}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
          fontSize: [1, 2],
        }}
      >
        <Box sx={{ color: "black50", fontWeight: "normal" }}>{item.title}</Box>
        <Box sx={{ fontWeight: "medium" }}>{item.content}</Box>
      </Flex>
    )
  })
  return (
    <Box sx={{ mb: 7, width: "100%", mr: [0, 3] }}>
      <Flex sx={{ alignItems: "center", pb: 3 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
          <LuNewspaper size={iconSize} />
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          상세 정보
        </Box>
      </Flex>
      <Box>{_renderItmes}</Box>
    </Box>
  )
}

export default DetailInfo
