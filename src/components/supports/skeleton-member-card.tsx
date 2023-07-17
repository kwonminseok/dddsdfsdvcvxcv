import { Box, Flex, Avatar, Skeleton } from "@components/commons"

interface MemberCardProps {
  sizeType: number
}

const SkeletonMemberCard = ({ sizeType }: MemberCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        mb: 3,
      }}
    >
      <Box
        sx={{
          bg: "black05",
          borderRadius: "6px",
          boxShadow: "floody2",
        }}
      >
        <Flex sx={{ px: 6, py: 4, overflow: "hidden" }}>
          <Flex
            sx={{
              justifyContent: ["inherit", "space-between"],
              width: "100%",
              alignItems: "center",
            }}
          >
            <Flex>
              <Box sx={{ mr: "27px" }}>
                <Skeleton sx={{ width: "48px", height: "48px" }} radius={"50%"} />
              </Box>

              {(sizeType as number) > 0 && (
                <Flex direction="column" justify="center">
                  <Box sx={{ pb: 1 }}>
                    <Skeleton sx={{ height: "16px", width: "87px" }} />
                  </Box>
                  <Box>
                    <Skeleton sx={{ height: "10px", width: "111px" }} />
                  </Box>
                  {/* <Box sx={{ fontWeight: "normal" }}>0X123SD…FHT5769</Box> */}
                </Flex>
              )}
            </Flex>
            {(sizeType as number) > 0 && (
              <Box>
                <Skeleton sx={{ height: "16px", minWidth: "120px" }} />
              </Box>
            )}
            {(sizeType as number) < 1 && (
              <Flex direction="column">
                <Box sx={{ fontSize: 3, fontWeight: "bold", lineHeight: "24px" }}>Dr.Pilates</Box>
                <Box sx={{ fontSize: "12px", fontWeight: "16px" }}>2023.06.18 2:34 pm</Box>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
export default SkeletonMemberCard
