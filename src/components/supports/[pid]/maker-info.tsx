import { Avatar, Box, Flex, SVG } from "@components/commons"
import { LuNetwork } from "react-icons/lu"
import Link from "next/link"
import MoreContents from "@components/more-contents"
import { formatNumber, formatNumberKo } from "@libs/utils/fotmat-number"
import { useTranslation } from "next-i18next"
import { createIcon } from "@icons/icons"
interface MakerInfoProps {
  maker: {
    _id: string
    name: string
    profileImage: string
    scaAlias?: string
    description: string
    totalSupports: number
    totalSupporters: number
  }
}

const MakerInfo = ({ maker }: MakerInfoProps) => {
  const { t } = useTranslation(["common", "support"])
  const members = maker
    ? t("common:lang") == "en"
      ? formatNumber(maker.totalSupporters)
      : formatNumberKo(maker.totalSupporters)
    : 0
  const supports = maker
    ? t("common:lang") == "en"
      ? formatNumber(maker.totalSupports)
      : formatNumberKo(maker.totalSupports)
    : 0

  return (
    <Box sx={{ mb: 7, width: "100%", mr: [0, 3] }}>
      <Flex sx={{ alignItems: "center", pb: 3 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
          <SVG fill="1a1a1a" size={["18px", "24px"]} viewBox="0 0 222 222">
            {createIcon("fandom")}
          </SVG>
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          {t("support:fandom")}
        </Box>
      </Flex>
      <Box></Box>
      <Box
        sx={{
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "black10",
          pt: 4,
          pb: 2,
          px: 4,
        }}
      >
        <Flex sx={{ justifyContent: "space-between", pb: 3, borderBottom: "1px solid ", borderColor: "black10" }}>
          {maker ? (
            <Link href={`/makers/${maker._id}`} passHref legacyBehavior>
              <Box as="a" sx={{ display: "flex", alignItems: "center" }}>
                <Avatar size={48} src={maker.profileImage} boxSx={{ mr: 2 }} />
                <Box>
                  <Box sx={{ fontSize: 2, fontWeight: "bold" }}>{maker.name}</Box>
                  <Box sx={{ fontSize: 1, color: "black50" }}>
                    <Box as="span" sx={{ pr: 2 }}>
                      {t("support:fandommember", { members })}
                    </Box>
                    <Box as="span">{t("support:fandomsupport", { supports })} </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
          ) : (
            <></>
          )}
        </Flex>
        <Box>
          {maker && (
            <MoreContents
              contents={maker.description}
              line={2}
              boxSx={{
                fontSize: 0,
                lineHeight: "1.25",
                minHeight: "28px",
                color: "black70",
                mt: [4, 4],
                mb: [3, 3],
              }}
              moreSize="0"
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}
export default MakerInfo
