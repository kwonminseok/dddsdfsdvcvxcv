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
      sx={{ py: "2", px: "2", width: "auto" }}
      // {...props}
    >
      <Box
        {...props}
        sx={{ fontSize: 1, px: 2, py: 1, borderRadius: "6px", ":hover": { backgroundColor: "rgba(245, 78, 94, 0.6)" } }}
      />
    </Box>
  )
}
