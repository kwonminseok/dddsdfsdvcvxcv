import React from "react"
import { Box, BoxOwnProps } from "../Box"
import type { Assign, ForwardRef } from "../types"
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component"
import {
  StandardCSSProperties,
  ThemeUIStyleObject,
  ThemeUICSSProperties,
} from "@libs/css"
type OmitedProps = "wrapperClassName" | "wrapperProps"

export interface AvatarProps extends Omit<LazyLoadImageProps, OmitedProps> {
  size?: ThemeUICSSProperties["width"]
  border?: StandardCSSProperties["border"]
  boxSx?: ThemeUIStyleObject
}

export const Avatar: ForwardRef<HTMLImageElement, AvatarProps> =
  React.forwardRef(function Avatar(
    { size = 48, src, style, border = "opx solid", boxSx, ...props },
    ref,
  ) {
    return (
      <Box
        __css={{ width: size, height: size, position: "relative" }}
        sx={boxSx}
      >
        <LazyLoadImage
          ref={ref}
          src={src}
          wrapperClassName="lazy-load-image-wrapper "
          wrapperProps={{
            style: {
              display: "flex",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: border,
            },
          }}
          style={{
            borderRadius: "50%",
            objectFit: "contain",
            ...style,
          }}
          {...props}
        />
      </Box>
    )
  })
