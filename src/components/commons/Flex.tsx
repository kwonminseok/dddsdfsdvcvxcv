import { forwardRef } from "react"
import { Box, BoxOwnProps, BoxProps } from "./Box"
import { ForwardRef } from "./types"
import { CSSProperties } from "@libs/css"

interface FlexProps extends BoxProps {
  //   align?: CSSProperties["alignItems"]
  //   justify?: CSSProperties["justifyContent"]
  //   wrap?: CSSProperties["flexWrap"]
  //   direction?: CSSProperties["flexDirection"]
  //   basis?: CSSProperties["flexBasis"]
  //   grow?: CSSProperties["flexGrow"]
  //   shrink?: CSSProperties["flexShrink"]
}

export const Flex: ForwardRef<HTMLElement, FlexProps> = forwardRef(
  function Flex(props: FlexProps, ref) {
    const {
      //   direction,
      //   align,
      //   justify,
      //   wrap,
      //   basis,
      //   grow,
      //   shrink,
      __css,
      ...rest
    } = props as FlexProps

    const baseStyle = {
      display: "flex",
      //   direction && flexDirection: direction,
      //   alignItems: align,
      //   justifyContent: justify,
      //   flexWrap: wrap,
      //   flexBasis: basis,
      //   flexGrow: grow,
      //   flexShrink: shrink,
    }

    return <Box ref={ref} __css={{ ...baseStyle, ...__css }} {...rest} />
  },
)
