import { Box, BoxProps } from "../Box"
import { Flex } from "../Flex"

interface PageBoxProps extends BoxProps {
  disabled?: boolean
}

const PageBox = ({ __css, children, disabled, onClick, ...props }: PageBoxProps) => {
  return (
    <Box
      as="li"
      __css={{
        display: "block",
        minWidth: "32px",
        height: "32px",
        outline: "none",
        cursor: "pointer",
        fontWeight: "bold",
        userSelect: "none",
        color: disabled ? "black10" : "black90",
        ...__css,
      }}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      <Flex sx={{ alignItems: "center", width: "100%", height: "100%", justifyContent: "center" }}>{children}</Flex>
    </Box>
  )
}

export default PageBox
