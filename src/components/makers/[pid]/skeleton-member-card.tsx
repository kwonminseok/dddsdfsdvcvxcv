import { Box, Flex, Skeleton } from "@components/commons"

const SkeletonMemberCard = () => {
  return (
    <Box sx={{ width: "100%", mb: 3, mx: 2 }}>
      <Box sx={{ bg: "black05", borderRadius: "6px", overflow: "hidden" }}>
        <Flex sx={{ width: "100%", py: 4, px: [0, 10], alignItems: "center", justifyContent: ["", ""] }}>
          <Flex sx={{ alignItems: "center", flex: 1 }}>
            <Skeleton radius="50%" sx={{ width: "48px", height: "48px" }} />
            <Box sx={{ ml: "27px" }}>
              <Skeleton sx={{ minWidth: "240px", height: "22px" }} radius="4px" />
            </Box>
          </Flex>
          <Flex sx={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <Skeleton radius="4px" sx={{ width: "22px", height: "22px" }} />
            <Box sx={{ pl: 3 }}>
              <Skeleton radius="4px" sx={{ minWidth: "160px", height: "22px" }} />
            </Box>
          </Flex>
          <Flex sx={{ alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
            <Skeleton radius="4px" sx={{ width: "24px", height: "22px" }} />
            <Box sx={{ pl: 4 }}>
              <Skeleton radius="4px" sx={{ minWidth: "54px", height: "22px" }} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default SkeletonMemberCard
