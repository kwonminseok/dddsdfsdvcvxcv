import { Flex, Box, Skeleton } from "@components/commons"

interface InfoBoxProps {
  title?: string
  content?: string
}

export const InfoBox = ({ title, content }: InfoBoxProps) => {
  return (
    <Flex sx={{ mb: 2 }}>
      <Box
        sx={{
          fontSize: [1, 2],
          fontWeight: "bold",
          lineHeight: "24px",
          mr: 4,
          minWidth: "100px",
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          fontSize: [1, 2],
          lineHeight: "24px",
          display: ["block", "flex"],
        }}
      >
        {content}
      </Box>
    </Flex>
  )
}

export const InfoBOxLoading = () => {
  return (
    <Flex sx={{ mb: 2 }}>
      <Box
        sx={{
          fontSize: [1, 2],
          fontWeight: "bold",
          lineHeight: "24px",
          mr: 4,
        }}
      >
        <Skeleton height={"16px"} sx={{ minWidth: "63px", my: 1 }} radius="4px" />
      </Box>
      <Box
        sx={{
          fontSize: [1, 2],
          lineHeight: "24px",
          display: ["block", "flex"],
        }}
      >
        <Skeleton sx={{ minWidth: "250px", my: 1, height: "16px" }} radius="4px" />
      </Box>
    </Flex>
  )
}
