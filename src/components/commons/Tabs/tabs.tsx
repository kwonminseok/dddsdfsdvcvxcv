import { ThemeUICSSObject } from "@libs/css"
import React, { Children, useState } from "react"
import { Box } from "../Box"
import { Flex } from "../Flex"
interface TabsProps {
  defaultActiveKey: string
  variant?: string
  children: React.ReactNode
}

const Tabs = ({ defaultActiveKey, variant = "", children }: TabsProps) => {
  const [activeKey, setActiveKey] = useState<string>(defaultActiveKey)
  const baseStyle: ThemeUICSSObject = {
    "&::-webkit-scrollbar": {
      display: "none",
    },
    display: "flex",
    flexDirection: "row",
    msOverflowStyle: "none",
    overflow: "scroll",
    scrollbarWidth: "none",
    whiteSpace: "nowrap",
    width: "100%",
    gap: 6,
  }
  return (
    <Box __css={{ position: "relative" }}>
      <Box __css={baseStyle} __themeKey="tabs" variant={variant}>
        {children}
      </Box>
    </Box>
  )
}

export default Tabs
