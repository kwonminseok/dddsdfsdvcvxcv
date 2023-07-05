import { Box, Flex, Skeleton } from "@components/commons"

const SkeletonMakerCard = () => {
  return (
    <Box sx={{ margin: [3, "4px 0px 10px 4px"] }}>
      <Box sx={{ display: "block", backgroundColor: "#f2f2f2", position: "relative", width: "100%", height: "100%", borderRadius: "12px", cursor: "pointer", overlofw: "hidden", transition: "all 0.3s ease 0s", minHeight: "310px" }}>
        <Box sx={{ display: "block", position: "relative" }}>
          <Skeleton height={["210px"]} sx={{ width: ["100%"] }} radius="8px" />
        </Box>
        <Box sx={{ display: "block", position: "relative", pb: 6 }}>
          <Skeleton height={["59px"]} sx={{ boxSizing: "unset", width: ["59px"], position: "absolute", left: "24px", top: "-55px", border: "5px solid #f2f2f2" }} radius="50%" />
        </Box>
        <Box sx={{ px: 6 }}>
          <Skeleton height={"16px"} sx={{ width: "100%", mb: 1 }} radius="4px" />
          <Skeleton height={"16px"} sx={{ width: "50%" }} radius="4px" />
          <Flex
            sx={{
              flex: 1,
              lineHeight: "20px",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Skeleton height={"16px"} radius="4px" sx={{ width: "16px", marginRight: "4px" }} />
            <Skeleton height={"16px"} radius="4px" sx={{ width: "24px" }} />
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
export default SkeletonMakerCard
