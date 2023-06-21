import { Box, Flex } from "@components/commons"

const MemberList = () => {
  return (
    <Box sx={{ mb: 7, width: "100%", mr: 3 }}>
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Box
            sx={{
              fontSize: [2, 5],
              fontWeight: "bold",
              lineHeight: ["24px", "30px"],
            }}
          >
            서포트 리스트
          </Box>
        </Box>
        <Box>총 78명</Box>
      </Flex>
    </Box>
  )
}

export default MemberList
