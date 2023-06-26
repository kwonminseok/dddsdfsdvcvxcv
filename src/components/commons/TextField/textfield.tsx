import { Flex, FlexProps } from "../Flex"
import { ForwardRef } from "../types"
import { forwardRef } from "react"
import { __internalProps } from "../util"
import { Input, InputProps } from "../Input"
import { Box } from "../Box"
export interface TextFieldProps extends InputProps {
  boxProps?: FlexProps
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  error?: boolean
}

const defaultBase = {
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

export const TextField: ForwardRef<HTMLInputElement, TextFieldProps> =
  forwardRef(function TextField(props, ref) {
    const { boxProps, prefixIcon, suffixIcon, error, __css, ...rest } = props
    return (
      <Flex
        __css={{ ...defaultBase, ...__css }}
        {...boxProps}
        {...__internalProps({ __themeKey: "textField" })}
      >
        {prefixIcon && <Box className="input-prefix">{prefixIcon}</Box>}
        <Input {...rest} ref={ref} />
        {<Box className="input-suffix">{suffixIcon && suffixIcon}</Box>}
      </Flex>
    )
  })
