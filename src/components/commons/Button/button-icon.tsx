import { Box, BoxProps, BoxOwnProps } from "../Box"
import { Assign } from "../types"

interface ButtonIconProps extends Assign<React.ComponentPropsWithRef<"span">, BoxOwnProps> {}

export function ButtonIcon(props: ButtonIconProps) {
  const { children, ...rest } = props

  return (
    <Box as="span" __css={{ display: "inline-flex", alignSelf: "center", flexShrink: 0 }} {...rest}>
      {children}
    </Box>
  )
}
