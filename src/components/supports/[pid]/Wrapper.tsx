import { ChildrenProps } from "@/types/types"
import { Box, Flex } from "@components/commons"

const Wrapper = ({ children }: ChildrenProps) => {
  return (
    <Flex
      as="main"
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ backgroundColor: "" }}>
        <Box
          sx={{
            maxWidth: "1260px",
            pt: 6,
            px: [6, "30px"],
            mx: "auto",
            pb: 5,
          }}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  )
}
export default Wrapper
