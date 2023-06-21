import React from "react"
import { Box, Flex } from "@components/commons"

export interface LayoutProps {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box sx={{ position: "relative", height: ["56px", "64px"] }}></Box>
      <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
        {children}
      </Flex>
      <Box></Box>
    </>
  )
}

export default DefaultLayout
