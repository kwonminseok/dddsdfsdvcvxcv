import React from "react"
import { Flex, Box } from "@components/commons"
import { Database } from "lucide-react"
const test_list = [
  { time: "2023.06.01 09:43:34", from: "My Badge", to: "0X123SD…FHT5769" },
  { time: "2023.06.01 09:43:34", from: "My Badge", to: "0X123SD…FHT5769" },
  { time: "2023.06.01 09:43:34", from: "My Badge", to: "0X123SD…FHT5769" },
]
const table_tab = ["Time", "From", "To"]
const SupportExchageInfo = ({ sizeType }: { sizeType: number }) => {
  const iconSize = sizeType > 0 ? 24 : 18
  const ri = () => {
    return (
      <>
        <Box>
          <Flex
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "initial",
              pb: 2,
              borderBottom: "1px solid #EAECEF",
              mb: 3,
            }}
          >
            {table_tab.map((item, idx) => (
              <Flex
                sx={{
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "flex-start",
                }}
                key={idx}
              >
                <Box __css={{ color: "black50" }}>{item}</Box>
              </Flex>
            ))}
          </Flex>
        </Box>
        <Flex direction="column">
          {test_list.map((item, idx) => (
            <Flex key={idx} direction="row" align="center" mb="2">
              <Flex sx={{ flexDirection: ["column", "row", "row"], flex: 1 }}>
                {item.time.split(" ").map((tt, idx) => (
                  <Box key={idx} sx={{ _notFirst: { ml: ["0", "1"] } }}>
                    {tt}
                  </Box>
                ))}
              </Flex>
              <Flex
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  flex: 1,
                }}
              >
                <Box>{item.from}</Box>
              </Flex>
              <Flex
                sx={{
                  flex: 1,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                <Box>{item.to}</Box>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </>
    )
  }

  return (
    <Box sx={{ width: "100%", mb: 7, mr: 3 }}>
      <Flex sx={{ alignItems: "center", pb: 4 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
          <Database size={iconSize} />
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          거래 정보
        </Box>
      </Flex>
      <Box sx={{ width: "100%", fontSize: [1, 2] }}>{ri()}</Box>
    </Box>
  )
}

export default SupportExchageInfo
