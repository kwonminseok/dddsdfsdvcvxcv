import React, { SVGAttributes } from "react"
import { Box, BoxOwnProps } from "./Box"
import { Assign, ForwardRef } from "./types"

export interface SVGProps extends Assign<SVGAttributes<SVGElement>, BoxOwnProps> {
  size?: any
}

export const SVG: ForwardRef<SVGSVGElement, SVGProps> = React.forwardRef(function SVG(
  { size = 24, __css, ...rest },
  ref,
) {
  const svgProps: SVGProps = {
    xmlns: "http://www.w3.org/2000/svg",

    viewBox: "0 0 24 24",
    fill: "currentcolor",
    ...rest,
  }

  return <Box ref={ref} as="svg" {...(svgProps as {})} __css={{ width: size, height: size, ...__css }} />
})
SVG.displayName = "SVG"
