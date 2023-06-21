import { Box, BoxProps } from "./Box"
import { ThemeUICSSObject, ThemeUIStyleObject } from "@libs/css"
import { keyframes, css } from "@emotion/react"
import { CSSProperties, ThemeUICSSProperties } from "@libs/css"
interface SkeletonProps extends BoxProps {
  radius?: ThemeUICSSProperties["borderRadius"]
  height?: ThemeUICSSProperties["height"]
  //   type: "text" | "title" | "avatar"
}

const Skeleton = ({
  radius,
  height,
  __css,
  as = "span",
  ...props
}: SkeletonProps) => {
  const baseStyle: ThemeUICSSObject = {
    borderRadius: radius ? radius : "0",
    paddingBottom: height ? height : "0",
  }
  return (
    <Box
      className="react-loading-skeleton"
      as={as}
      __css={{ ...baseStyle, ...__css }}
      {...props}
    />
  )
}

export default Skeleton
