import Link from "next/link"
import { Box, BoxOwnProps, BoxProps } from "../Box"
import type { Assign, ForwardRef } from "../types"
import { __internalProps } from "../util"
import { forwardRef } from "react"

export interface LinkProps extends Assign<React.ComponentPropsWithRef<"a">, BoxOwnProps> {}

export const Flink: ForwardRef<HTMLAnchorElement, LinkProps> = forwardRef(function Flink({ href = "/", ...rest }, ref) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Box ref={ref} as="a" {...(rest as BoxProps)} {...__internalProps({ __themeKey: "links" })} />
    </Link>
  )
})
