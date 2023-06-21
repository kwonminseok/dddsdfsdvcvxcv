import { Box, Flex, Skeleton } from "@components/commons"

const SkeletonSupportCard = () => {
  return (
    <Box
      sx={{
        display: ["-webkit-box", "block"],
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        cursor: "pointer",
        overlofw: "hidden",
        transition: "all 0.3s ease 0s",
        boxShadow: "scard",
        minHeight: "120px",
      }}
    >
      <Box sx={{ display: "block" }}>
        <Skeleton
          height={["120px", "100%"]}
          sx={{ width: ["120px", "100%"] }}
          radius="8px"
        />
      </Box>
      <Box
        sx={{
          padding: 2,
          width: ["calc(100% - 120px)", "100%"],
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
          <Skeleton height={"13px"} radius="4px" sx={{ maxWidth: "20%" }} />
          <Flex
            sx={{
              flex: 1,
              lineHeight: "20px",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Skeleton
              height={"16px"}
              radius="4px"
              sx={{ width: "16px", marginRight: "4px" }}
            />
            <Skeleton height={"16px"} radius="4px" sx={{ width: "16px" }} />
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default SkeletonSupportCard
