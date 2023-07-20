import { Avatar, Box, Flex, SVG, Link, Skeleton } from "@components/commons"
import { LuNetwork } from "react-icons/lu"
// import Link from "next/link"
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
      ? maker.totalSupporters > 1
        ? formatNumber(maker.totalSupporters) + " members"
        : formatNumber(maker.totalSupporters) + " member"
      : "맴버 " + formatNumberKo(maker.totalSupporters) + "명"
    : 0
  const supports = maker
    ? t("common:lang") == "en"
      ? maker.totalSupports > 1
        ? formatNumber(maker.totalSupports) + " supports"
        : formatNumber(maker.totalSupports) + " support"
      : "서포터 " + formatNumberKo(maker.totalSupports) + "개"
    : 0

  return (
    <Box sx={{ mb: 7, width: "100%", mr: [0, 3] }}>
      {/* header */}
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
      <Box
        sx={{
          borderRadius: "8px",
          // border: "1px solid",
          // borderColor: "black10",
          pt: 4,
          pb: 2,
          // px: 4,
        }}
      >
        <Flex sx={{ justifyContent: "space-between", pb: 3, borderBottom: "1px solid ", borderColor: "black10" }}>
          {maker ? (
            <Link href={`/makers/${maker._id}`} sx={{ display: "flex", alignItems: "center" }}>
              <Avatar size={48} src={maker.profileImage} boxSx={{ mr: 2 }} />

              <Box>
                <Box sx={{ fontSize: 2, fontWeight: "bold" }}>{maker.name}</Box>

                <Box sx={{ fontSize: 1, color: "black50" }}>
                  <>
                    <Box as="span" sx={{ pr: 2 }}>
                      {members}
                      {/* {t("support:fandommember", { members })} */}
                    </Box>
                    <Box as="span">
                      {supports}
                      {/* {t("support:fandomsupport", { supports })} */}
                    </Box>
                  </>
                </Box>
              </Box>
            </Link>
          ) : (
            <Flex sx={{ display: "flex", alignItems: "center" }}>
              <Skeleton radius="50%" sx={{ width: "48px", height: "48px" }} />
              <Flex sx={{ flexDirection: "column", pl: 2 }}>
                <Box pb="2">
                  <Skeleton sx={{ height: "14px", width: "96px" }} radius="4px" />
                </Box>
                <Skeleton sx={{ height: "14px", width: "120px" }} radius="4px" />
              </Flex>
            </Flex>
          )}
        </Flex>
        <Box>
          {maker ? (
            <Box
              __css={{
                py: 2,
                position: "relative",
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordWrap: "break-word",
                wordBreak: "break-all",
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                fontSize: 0,
                lineHeight: "16px",
              }}
            >
              {maker.description}
            </Box>
          ) : (
            <Flex sx={{ gap: "8px", flexDirection: "column", pt: 2 }}>
              <Skeleton sx={{ height: "14px", width: "80%" }} radius="4px" />
              <Skeleton sx={{ height: "14px", width: "60%" }} radius="4px" />
            </Flex>
          )}
        </Box>
      </Box>
    </Box>
  )
}
export default MakerInfo
