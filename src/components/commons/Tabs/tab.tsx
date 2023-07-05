import React, { createContext, useContext, useState } from "react"
import { Box } from "../Box"
import { ThemeUIStyleObject } from "@libs/css"
// tab context 생성
export const TabContext = createContext<any>(null)

interface TabsContainerProps {
  defaultActiveKey?: string | null
  children: React.ReactNode
}

export const TabsContainer = ({ children, defaultActiveKey = null }: TabsContainerProps) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey)

  return <TabContext.Provider value={{ activeKey, setActiveKey }}>{children}</TabContext.Provider>
}

interface TabsListProps {
  //   defaultActiveKey: string | number
  children: any[] // React.ReactNode[]
  tabsSx?: ThemeUIStyleObject
  tabSx?: ThemeUIStyleObject
  variant?: string
}
export const TabList = ({ tabsSx, tabSx, variant, children }: TabsListProps) => {
  return (
    <Box sx={tabsSx} variant={variant ? variant + ".tabs" : ""} __themeKey="tabs">
      <Box sx={{ position: "relative", width: "100%" }}>
        {/* tabs __css 받는곳 즉 variant */}
        <Box
          __css={{
            display: "flex",
            flexDirection: "row",
            msOverflowStyle: "none",
            overflow: "scroll",
            scrollbarWidth: "none",
            whiteSpace: "nowrap",
            width: "100%",
            gap: [0, "24px"],
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {React.Children.map(children, (child: any, index) => {
            return React.cloneElement(child, { key: index, sx: tabSx, variant: variant }) // key 속성 추가
          })}
        </Box>
      </Box>
    </Box>
  )
}

interface TabProps {
  tabKey: string
  children: React.ReactNode
  sx?: ThemeUIStyleObject
  variant?: string
}

export const Tab = ({ tabKey, children, sx, variant }: TabProps) => {
  const { activeKey, setActiveKey } = useContext(TabContext)
  const hadleClick = () => {
    setActiveKey(tabKey)
  }
  const selected = activeKey === tabKey

  console.log(selected)
  return (
    <Box __css={{ cursor: "pointer", minWidth: "auto", flex: [1, 0] }}>
      <Box
        onClick={hadleClick}
        sx={sx}
        __themeKey="tabs"
        variant={variant ? variant + ".tab" : ""}
        className={selected ? " active " : ""}
      >
        {children}
      </Box>
    </Box>
  )
}

interface PanelProps {
  tabKey: string
  children: React.ReactNode
}

export const Panel = ({ tabKey, children }: PanelProps) => {
  const { activeKey } = useContext(TabContext)

  return activeKey === tabKey ? <>{children}</> : <></>
}
