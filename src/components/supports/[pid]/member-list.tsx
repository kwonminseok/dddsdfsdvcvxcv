import { Box, Flex, Skeleton, SVG } from "@components/commons"
import MemberCard from "@components/supports/member-card"
import useWindowSize from "@libs/hooks/use-window-size"
import { Users } from "lucide-react"
import SkeletonMemberCard from "../skeleton-member-card"
import { useTranslation } from "next-i18next"
import { createIcon } from "@icons/icons"
interface MemberListProps {
  total: number
  members?: any[]
}

const MemberList = ({ total, members }: MemberListProps) => {
  const sizetype = useWindowSize()
  const { t } = useTranslation("support")

  return (
    <Box sx={{ mb: 7, width: "100%", mr: 3 }}>
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Flex sx={{ alignItems: "center", pb: 3 }}>
          <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
            <SVG fill="1a1a1a" size={["18px", "24px"]} viewBox="0 0 222 222">
              {createIcon("certificateholder")}
            </SVG>
          </Flex>
          <Box
            sx={{
              fontSize: [2, 5],
              fontWeight: "bold",
              lineHeight: ["24px", "30px"],
            }}
          >
            {t("certificateholders")}
          </Box>
        </Flex>
        {total !== undefined ? (
          <Flex>
            <Box>{t("total")}</Box>
            <Box sx={{ pl: 1, fontWeight: "bold" }}>{total}</Box>
          </Flex>
        ) : (
          <Skeleton height={"23px"} sx={{ width: "76px" }} radius="4px" />
        )}
      </Flex>
      <Flex sx={{ my: 2, flexDirection: "column" }}>
        {members ? (
          members.map((member, key) => <MemberCard key={key} sizeType={sizetype as number} {...member} />)
        ) : (
          <>
            <SkeletonMemberCard sizeType={sizetype as number} />
            <SkeletonMemberCard sizeType={sizetype as number} />
            <SkeletonMemberCard sizeType={sizetype as number} />
            <SkeletonMemberCard sizeType={sizetype as number} />
          </>
        )}
      </Flex>
    </Box>
  )
}

export default MemberList
