import { useRef, useEffect } from "react"
import { Box, BoxProps } from "../Box"

interface OptionProps extends BoxProps {
  isActive?: boolean
  isChecked?: boolean
  onClick?: () => void
  showChecked?: boolean
  value?: number
}

export const DropOption = (props: OptionProps) => {
  // isActive isChecked onClick showChecked value children

  return (
    <Box
      as="li"
      role="option"
      sx={{ py: "2", px: "4", width: "auto" }}
      // {...props}
    >
      <Box {...props} sx={{ px: 2, py: 2, borderRadius: "6px", ":hover": { backgroundColor: "#123123" } }} />
    </Box>
  )
}
