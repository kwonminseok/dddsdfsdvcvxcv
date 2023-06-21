import React from "react"
import { BoxOwnProps, BoxProps } from "../Box"
import { Assign, ForwardRef } from "../types"
import { Box } from "../Box"
import { ThemeUICSSObject } from "@libs/css"

export interface ButtonProps
  extends Assign<React.ComponentPropsWithRef<"button">, BoxOwnProps> {}

export const Button: ForwardRef<HTMLButtonElement, ButtonProps> =
  React.forwardRef(function Button({ __css, ...props }, ref) {
    const buttonBaseStyle: ThemeUICSSObject = {
      position: "relative",
      display: "inline-flex",
      boxSizing: "border-box",
      appearnace: "none",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: "inherit",
      userSelect: "none",
      cursor: "pointer",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      textDecoration: "none",
      fontSize: "inherit",
      px: 3,
      py: 2,
      border: 0,
      borderRadius: "8px",
    }
    return (
      <Box
        ref={ref as React.Ref<HTMLButtonElement>}
        as="button"
        __themeKey="button"
        {...(props as BoxProps)}
        __css={{ ...buttonBaseStyle, ...__css }}
      />
    )
  })
