import { Flex, FlexProps } from "../Flex"
import { ForwardRef } from "../types"
import { forwardRef } from "react"
import { __internalProps } from "../util"
import { Input, InputProps } from "../Input"
import { Box } from "../Box"
import { ThemeUICSSObject } from "@libs/css"

type Tsize = "sm" | "md" | "lg"

export interface TextFieldProps extends Omit<InputProps, "size"> {
  boxProps?: FlexProps
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  error?: boolean
  size?: Tsize
}

const defaultBase: ThemeUICSSObject = {
  display: "inline-flex",
  position: "relative",
  alignItems: "center",
  my: 0,
  borderBottom: "1px solid transparent",

  "& .input-prefix": {
    flexShrink: 0,
    fontSize: 1,
    mr: 1,
  },
  "& .input-suffix": {
    flexShrink: 0,
    fontSize: 1,
    mr: 1,
    ml: 1,
  },
  "& input": {
    fontSize: [0, 1],
    // px: 3,
    // color: 'text-primary',
    // '&:-webkit-autofill' : {

    // }
  },
  "&.input-status-error": {
    // borderColor: 'error'
  },
  "&.input-status-focus": {
    // borderColor: 'primary'
  },
}

export const TextField: ForwardRef<HTMLInputElement, TextFieldProps> = forwardRef(function TextField(props, ref) {
  const { boxProps, prefixIcon, suffixIcon, error, __css, size, variant, ...rest } = props

  const getsize = () => {
    if (size == "sm") {
      return { height: "32px", lineHeight: 1.6 }
    } else if (size == "lg") {
      return { height: "48px", lineHeight: 1.6 }
    } else {
      return { height: "40px", lineHeight: 1.6 }
    }
  }

  return (
    <Flex
      __css={{ ...defaultBase, ...getsize(), ...__css }}
      {...boxProps}
      variant={variant}
      {...__internalProps({ __themeKey: "textField" })}
    >
      {prefixIcon && <Box className="input-prefix">{prefixIcon}</Box>}
      <Input {...rest} ref={ref} />
      {<Box className="input-suffix">{suffixIcon && suffixIcon}</Box>}
    </Flex>
  )
})
