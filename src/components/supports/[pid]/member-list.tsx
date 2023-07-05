import { Box, Flex, Skeleton } from "@components/commons"
import MemberCard from "@components/supports/member-card"
import useWindowSize from "@libs/hooks/use-window-size"
import { Users } from "lucide-react"

interface MemberListProps {
  totalMinted: number
}
const MemberList = ({ totalMinted }: MemberListProps) => {
  console.log(totalMinted)
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
        {totalMinted !== undefined ? (
          <Box>총 {totalMinted}명</Box>
        ) : (
          <Skeleton height={"23px"} sx={{ width: "76px" }} radius="4px" />
        )}
      </Flex>
      <Flex sx={{ my: 2, flexDirection: "column" }}>
        <MemberCard sizeType={sizetype as number} />
        <MemberCard sizeType={sizetype as number} />
        <MemberCard sizeType={sizetype as number} />
      </Flex>
    </Box>
  )
}

export default MemberList
