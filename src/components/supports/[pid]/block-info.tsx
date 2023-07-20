import { Box, Flex, Skeleton, SVG, Link } from "@components/commons"
// import Link from "next/link"
import { LuPackage } from "react-icons/lu"
import { useTranslation } from "next-i18next"
import { createIcon } from "@icons/icons"
import { transformedEOA } from "@libs/utils/transformed"
interface BlockInfoProps {
  totalMinted: number
  contractAddress: string
}

const BlockInfo = ({ totalMinted, contractAddress }: BlockInfoProps) => {
  const { t } = useTranslation("support")
  console.log(process.env.NEXT_PUBLIC_CONTRCT_URL + `${contractAddress}`)
  return (
    <Box sx={{ mb: 7, width: "100%", mr: [0, 3] }}>
      {/* header */}
      <Flex sx={{ alignItems: "center", pb: 3 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
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
          {totalMinted ? (
            <>
              <Box sx={{ color: "black50", fontWeight: "normal" }}>Chain</Box>
              <Box
                sx={{
                  fontWeight: "medium",
                  //"#007aff" : "inherit",
                }}
              >
                Klaytn
              </Box>
            </>
          ) : (
            <>
              <Skeleton sx={{ height: "15px", width: "23%" }} radius="4px" />
              <Skeleton sx={{ height: "15px", width: "30%" }} radius="4px" />
            </>
          )}
        </Flex>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            fontSize: [1, 2],
          }}
        >
          {contractAddress ? (
            <>
              <Box sx={{ color: "black50", fontWeight: "normal" }}>Contract Address</Box>
              <Link
                href={process.env.NEXT_PUBLIC_CONTRCT_URL + `${contractAddress}`}
                target="_blank"
                sx={{
                  fontWeight: "medium",
                  color: "#007aff",
                  //"#007aff" : "inherit",
                }}
              >
                {transformedEOA(contractAddress)}
              </Link>
            </>
          ) : (
            <>
              <Skeleton sx={{ height: "15px", width: "23%" }} radius="4px" />
              <Skeleton sx={{ height: "15px", width: "30%" }} radius="4px" />
            </>
          )}
        </Flex>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            fontSize: [1, 2],
          }}
        >
          {totalMinted ? (
            <>
              <Box sx={{ color: "black50", fontWeight: "normal" }}>Total Minted</Box>
              <Box
                sx={{
                  fontWeight: "medium",
                  //"#007aff" : "inherit",
                }}
              >
                {totalMinted}
              </Box>
            </>
          ) : (
            <>
              <Skeleton sx={{ height: "15px", width: "23%" }} radius="4px" />
              <Skeleton sx={{ height: "15px", width: "30%" }} radius="4px" />
            </>
          )}
        </Flex>
      </Box>
    </Box>
  )
}

export default BlockInfo
