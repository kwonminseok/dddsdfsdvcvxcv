import { Box, Flex } from "@components/commons"
interface WrapBoxProps {
  name: string
  value: string
}

const WrapBox = ({ name, value }: WrapBoxProps) => {
  return (
    <Box>
      <Flex sx={{ alignItems: "flex-start", flexDirection: "row" }}>
        <Box
          sx={{
            fontSize: [0, 1],
            fontWeight: "bold",
            color: "black90",
            lineHeight: "32px",
            pr: 2,
          }}
        >
          {value}
        </Box>
        <Box
          sx={{
            fontSize: [0, 1],
            fontWeight: "normal",
            lineHeight: "32px",
            color: "black70",
          }}
        >
          {name}
        </Box>
      </Flex>
    </Box>
  )
}
export default WrapBox

{
  /* <Box>
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
      fontSize: 2,
      fontWeight: "bold",
      color: "black90",
      lineHeight: "32px",
    }}
  >
    {value}
  </Box>
</Flex>
</Box> */
}
