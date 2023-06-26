import React, { useRef, useEffect } from "react"
import { Box, Text, Flex } from "@components/commons"
const SearchDrop = ({ closeDrop }: { closeDrop: any }) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false)
    return () => document.removeEventListener("mousedown", handleClick, false)
  }, [])

  const handleClick = (e: any) => {
    if (dropdownRef.current?.contains(e.target)) {
      return
    }
    closeDrop(false)
  }
  return (
    <Box
      ref={dropdownRef}
      sx={{
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#ffffff",
        paddingBottom: "10px",
        position: "absolute",
        top: 52,
        width: "100%",
        zIndex: "10",
        filter:
          "drop-shadow(rgba(24, 26, 32, 0.1) 0px 0px 1px) drop-shadow(rgba(71, 77, 87, 0.04) 0px 3px 6px) drop-shadow(rgba(24, 26, 32, 0.04) 0px 1px 2px)",
      }}
    >
      <Box
        id="search-drop"
        pb="0"
        pt="0"
        sx={{ maxHeight: "584px", minHeight: "234px", overflowY: "scroll" }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            position: "relative",
            gap: "0",
          }}
        >
          <Box>
            <Flex sx={{ fontSize: 1, my: "10px", px: 4 }}>
              <Text color="black50">Makers</Text>
            </Flex>
            <Flex
              __css={{ p: 2, mx: 2, alignItems: "center" }}
              sx={{ cursor: "pointer", borderRadius: "0", bg: "transparent" }}
            >
              <Flex __css={{ flex: 1 }} align="center">
                <Box>어떤 정보를</Box>
                <Box>아땋게</Box>
                <Box>보여줄까</Box>
              </Flex>
            </Flex>
            {/* Makers */}
          </Box>
          <Box>{/* Badges */}</Box>
          <Box>{/* Users */}</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchDrop
