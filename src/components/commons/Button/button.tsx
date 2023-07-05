import React from "react"
import { BoxOwnProps, BoxProps } from "../Box"
import { Assign, ForwardRef } from "../types"
import { Box } from "../Box"
import { ThemeUICSSObject } from "@libs/css"
import { ButtonIcon } from "./button-icon"
export interface ButtonProps extends Assign<React.ComponentPropsWithRef<"button">, BoxOwnProps> {
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  iconSx?: ThemeUICSSObject
}

type ButtonContentProps = Pick<ButtonProps, "leftIcon" | "rightIcon" | "children" | "iconSx">

function ButtonContent(props: ButtonContentProps) {
  const { leftIcon, rightIcon, iconSx, children } = props

  return (
    <>
      {leftIcon && <ButtonIcon sx={iconSx}>{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && <ButtonIcon sx={iconSx}>{leftIcon}</ButtonIcon>}
    </>
  )
}

export const Button: ForwardRef<HTMLButtonElement, ButtonProps> = React.forwardRef(function Button(
  { __css, rightIcon, leftIcon, iconSx, children, ...props },
  ref,
) {
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
    borderRadius: "6px",
  }
  const contentProps = { rightIcon, leftIcon, iconSx, children }
  return (
    <Box
      ref={ref as React.Ref<HTMLButtonElement>}
      as="button"
      __themeKey="button"
      {...(props as BoxProps)}
      __css={{ ...buttonBaseStyle, ...__css }}
    >
      <ButtonContent {...contentProps} />
    </Box>
  )
})
