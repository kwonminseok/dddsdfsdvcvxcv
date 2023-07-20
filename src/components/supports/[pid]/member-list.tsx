import { Box, Flex, Skeleton, SVG, Pagination } from "@components/commons"
import MemberCard from "@components/supports/member-card"
import useWindowSize from "@libs/hooks/use-window-size"
import { Users } from "lucide-react"
import SkeletonMemberCard from "../skeleton-member-card"
import { useTranslation } from "next-i18next"
import { createIcon } from "@icons/icons"
import { useMutation } from "@tanstack/react-query"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"

interface MemberListProps {
  pid: string
}
const COUNT = 10

const MemberList = ({ pid }: MemberListProps) => {
  const sizetype = useWindowSize()
  const { t } = useTranslation("support")
  const [nowPage, setNowPage] = useState<number>(1)
  const [lastPage, setLastPage] = useState<number>(1)
  const fetchMemberList = useCallback(async () => {
    if (pid) {
      const res = await axios.get(`/api/supports/memberlist/${pid}?page=${nowPage}&count=${COUNT}`)
      const result = res.data

      return result
    }
  }, [nowPage])

  const { data, mutate, isLoading, isError, error, isSuccess } = useMutation(fetchMemberList)
  useEffect(() => {
    mutate()
    window.scrollTo(0, 0)
  }, [nowPage])

  useEffect(() => {
    if (isSuccess) {
      setLastPage(Math.ceil(data.data.total / COUNT))
    }
  }, [isSuccess])

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
        {data !== undefined && isSuccess ? (
          <Flex>
            <Box>{t("total")}</Box>
            <Box sx={{ pl: 1, fontWeight: "bold" }}>{data.data.total}</Box>
          </Flex>
        ) : (
          <Skeleton height={"23px"} sx={{ width: "76px" }} radius="4px" />
        )}
      </Flex>
      <Flex sx={{ my: 2, flexDirection: "column" }}>
        {isSuccess &&
          data &&
          data.data.list.map((member: any, key: number) => (
            <MemberCard key={key} sizeType={sizetype as number} {...member} />
          ))}

        {isLoading && (
          <>
            <SkeletonMemberCard sizeType={sizetype as number} />
            <SkeletonMemberCard sizeType={sizetype as number} />
            <SkeletonMemberCard sizeType={sizetype as number} />
            <SkeletonMemberCard sizeType={sizetype as number} />
            <SkeletonMemberCard sizeType={sizetype as number} />
            <SkeletonMemberCard sizeType={sizetype as number} />
            <SkeletonMemberCard sizeType={sizetype as number} />
            <SkeletonMemberCard sizeType={sizetype as number} />
          </>
        )}
      </Flex>
      {lastPage > 1 && (
        <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
          <Pagination nowPage={nowPage} lastPage={lastPage} setPage={setNowPage} />
        </Flex>
      )}
    </Box>
  )
}

export default MemberList
