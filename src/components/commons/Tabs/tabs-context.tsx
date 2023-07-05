import { ThemeUIStyleObject } from "@libs/css"
import React, { ReactComponentElement, useContext, useState } from "react"
import { Box } from "../Box"
import { Flex } from "../Flex"
import { Text } from "../Text/text"

export const TabsContext = React.createContext<any>(null)

// export const withTabs =
//   Component =>
//   ({ children, ...props }) => {
//     const [currentTab, setCurrentTab] = useState()

//     return (
//       <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
//         <Component {...props}>{children}</Component>
//       </TabsContext.Provider>
//     )
//   }

// export const useTabs = () => {
//   const { currentTab, setCurrentTab } = useContext(TabsContext)

//   if (!TabsContext) {
//     throw new Error("useTabs should be used inside TabsProvider")
//   }

//   return {
//     currentTab,
//     setCurrentTab,
//   }
// }

// export const useTabState = () => {
//   const { activeKey, setActvieKey } = useContext(TabsContext)
// }

interface TabsListProps {
  defaultActiveKey: string | number
  children: any[] // React.ReactNode[]
  TabsSx?: ThemeUIStyleObject
  TabSx?: ThemeUIStyleObject
  variant?: string
}

export const TabsList = ({ defaultActiveKey, children, TabsSx, TabSx, variant }: TabsListProps) => {
  const [activeKey, setActiveKey] = useState<string | number>(defaultActiveKey)

  return (
    <Box sx={{ position: "relative" }}>
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
        sx={TabsSx}
        variant={variant}
        __themeKey="tabs"
      >
        {React.Children.map(children, (child: any, index) => {
          return React.cloneElement(child, { key: index, activeKey: activeKey, onClick: setActiveKey }) // key 속성 추가
        })}
      </Box>
    </Box>
  )
}
interface TabProps {
  tabKey: string
  sx?: ThemeUIStyleObject
  activeKey?: string | number
  onClick?: any
  children: React.ReactNode
}

export const Tab = ({ sx, tabKey, activeKey, onClick, children }: TabProps) => {
  const selected = activeKey === tabKey ? true : false

  console.log(tabKey, selected)
  return (
    <Box __css={{ cursor: "pointer", minWidth: "auto" }} sx={sx}>
      <Box onClick={() => onClick(tabKey)} className={tabKey == activeKey ? "active" : undefined}>
        {children}
      </Box>
    </Box>
  )
}
