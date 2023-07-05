import { Flex } from "@components/commons"
import React from "react"

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      sx={{
        width: "100%",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        bg: ["black05", "black20"],
      }}
    >
      <Flex sx={{ width: ["100%", "376px"] }}>{children}</Flex>
    </Flex>
  )
}

export default LoginLayout
