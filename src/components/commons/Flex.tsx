import { forwardRef } from "react"
import { Box, BoxOwnProps, BoxProps } from "./Box"
import { ForwardRef } from "./types"
import { CSSProperties } from "@libs/css"

export interface FlexProps extends BoxProps {
  align?: CSSProperties["alignItems"]
  justify?: CSSProperties["justifyContent"]
  wrap?: CSSProperties["flexWrap"]
  direction?: CSSProperties["flexDirection"]
  basis?: CSSProperties["flexBasis"]
  grow?: CSSProperties["flexGrow"]
  shrink?: CSSProperties["flexShrink"]
}

export const Flex: ForwardRef<HTMLElement, FlexProps> = forwardRef(
  function Flex(props: FlexProps, ref) {
    const {
      direction,
      align,
      justify,
      wrap,
      basis,
      grow,
      shrink,
      __css,
      ...rest
    } = props as FlexProps

    const baseStyle = {
      display: "flex",
      ...(direction && { flexDirection: direction }),
      ...(align && { alignItems: align }),
      ...(justify && { justifyContent: justify }),
      ...(wrap && { flexWrap: wrap }),
      ...(basis && { flexBasis: basis }),
      ...(grow && { flexGrow: grow }),
      ...(shrink && { flexShrink: shrink }),
    }

    return <Box ref={ref} __css={{ ...baseStyle, ...__css }} {...rest} />
  },
)
