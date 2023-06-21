import { Box, Flex, Skeleton } from "@components/commons"
import LogoSmall from "@icons/logo-small"
const SkeletonSupportCard = () => {
  return (
    <Box sx={{ margin: ["12px", "4px 0px 10px 4px"] }}>
      <Box
        sx={{
          display: "block",
          backgroundColor: "#f2f2f2",
          padding: 4,
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          cursor: "pointer",
          overlofw: "hidden",
          transition: "all 0.3s ease 0s",
          minHeight: "120px",
        }}
      >
        <Box sx={{ display: "block", pb: 2 }}>
          <Skeleton height={["100%"]} sx={{ width: ["100%"] }} radius="8px" />
        </Box>
        <Box
          sx={{
            padding: 2,
            width: "100%",
          }}
        >
          <Skeleton
            height={"14px"}
            radius="4px"
            sx={{ width: "33.33%", marginBottom: "8px" }}
          />

          <Skeleton height={"16px"} sx={{ width: "100%" }} radius="4px" />
          <Skeleton height={"16px"} sx={{ width: "50%" }} radius="4px" />
          <Flex
            __css={{
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              pb: 1,
              pt: 4,
            }}
          >
            <Flex sx={{ flex: 1 }}>
              <Skeleton height={"13px"} radius="4px" sx={{ maxWidth: "20%" }} />
            </Flex>
            <Flex
              sx={{
                flex: 1,
                lineHeight: "20px",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <LogoSmall width={"100%"} color="#e6e6e6" />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default SkeletonSupportCard
