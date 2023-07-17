import { Box, Flex, SVG } from "@components/commons"
import Link from "next/link"
import { LuPackage } from "react-icons/lu"
import { useTranslation } from "next-i18next"
import { createIcon } from "@icons/icons"

interface BlockInfoProps {
  totalMinted: number
  contractAddress?: string
}

const BlockInfo = ({ totalMinted, contractAddress }: BlockInfoProps) => {
  const { t } = useTranslation("support")

  return (
    <Box sx={{ mb: 7, width: "100%", mr: [0, 3] }}>
      <Flex sx={{ alignItems: "center", pb: 3 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
          {/* <LuPackage size={iconSize} /> */}
          <SVG fill="1a1a1a" size={["18px", "24px"]} viewBox="0 0 222 222">
            {createIcon("blockchian")}
          </SVG>
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          {t("blockinfo")}
        </Box>
      </Flex>
      <Box>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            fontSize: [1, 2],
          }}
        >
          <Box sx={{ color: "black50", fontWeight: "normal" }}>Chain</Box>
          <Box
            sx={{
              fontWeight: "medium",
              //"#007aff" : "inherit",
            }}
          >
            Klaytn
          </Box>
        </Flex>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            fontSize: [1, 2],
          }}
        >
          <Box sx={{ color: "black50", fontWeight: "normal" }}>Contract Address</Box>
          <Link
            href="https://baobab.klaytnscope.com/tx/0x1773befc8b059afb0d152e2b13a51240bcb7323ce915a2bd416bd82d42b025a2?tabId=internalTx"
            passHref
            legacyBehavior
          >
            <Box
              as="a"
              // target="_blank"
              sx={{
                fontWeight: "medium",
                color: "#007aff",
                //"#007aff" : "inherit",
              }}
            >
              Klaytn
            </Box>
          </Link>
        </Flex>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            fontSize: [1, 2],
          }}
        >
          <Box sx={{ color: "black50", fontWeight: "normal" }}>Total Minted</Box>
          <Box
            sx={{
              fontWeight: "medium",
              //"#007aff" : "inherit",
            }}
          >
            {totalMinted}
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default BlockInfo
