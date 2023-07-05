import { Box, Flex } from "@components/commons"
interface WrapBoxProps {
  name: string
  value: string
}

const WrapBox = ({ name, value }: WrapBoxProps) => {
  return (
    <Box>
      <Flex sx={{ alignItems: "flex-start", flexDirection: "column" }}>
        <Box
          sx={{
            fontSize: 1,
            fontWeight: "medium",
            lineHeight: "20px",
            color: "black30",
          }}
        >
          {name}
        </Box>
        <Box
          sx={{
            fontSize: 4,
            fontWeight: "bold",
            color: "black90",
            lineHeight: "32px",
          }}
        >
          {value}
        </Box>
      </Flex>
    </Box>
  )
}
export default WrapBox
