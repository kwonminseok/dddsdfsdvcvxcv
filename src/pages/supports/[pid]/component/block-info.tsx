import { Box, Flex } from "@components/commons"
import { LuPackage } from "react-icons/lu"

const test_list = [
  { title: "Chain", content: "Klaytn" },
  { title: "Contract Address", content: "0x523kj234...w45klsdfj", link: "/" },
  { title: "Total Minted", content: "43" },
]

const BlockInfo = ({ sizeType }: { sizeType: number }) => {
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
        <Box
          sx={{
            fontWeight: "medium",
            color: item.link ? "#007aff" : "inherit",
          }}
        >
          {item.content}
        </Box>
      </Flex>
    )
  })
  return (
    <Box sx={{ mb: 7, width: "100%", mr: [0, 3] }}>
      <Flex sx={{ alignItems: "center", pb: 3 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
          <LuPackage size={iconSize} />
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
      <Box>{_renderItmes}</Box>
    </Box>
  )
}

export default BlockInfo
