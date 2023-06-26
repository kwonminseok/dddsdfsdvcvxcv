import { Box, Flex } from "@components/commons"
import MemberCard from "@components/supports/member-card"
import useWindowSize from "@libs/hooks/use-window-size"
import { Users } from "lucide-react"
const MemberList = () => {
  const sizetype = useWindowSize()
  const iconSize = (sizetype as number) > 0 ? 24 : 18
  return (
    <Box sx={{ mb: 7, width: "100%", mr: 3 }}>
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Flex sx={{ alignItems: "center", pb: 3 }}>
          <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
            <Users size={iconSize} />
          </Flex>
          <Box
            sx={{
              fontSize: [2, 5],
              fontWeight: "bold",
              lineHeight: ["24px", "30px"],
            }}
          >
            서포터 리스트
          </Box>
        </Flex>
        <Box>총 78명</Box>
      </Flex>
      <Flex sx={{ my: 2 }}>
        <MemberCard sizeType={sizetype as number} />
      </Flex>
    </Box>
  )
}

export default MemberList
