import { useMutation } from "@tanstack/react-query"
import { useTranslation } from "next-i18next"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { Box, Flex, Selector, Skeleton } from "@components/commons"
import LogoEmpty from "@icons/logo-empty"
import MemberCard from "./member-card"
import SkeletonMemberCard from "./skeleton-member-card"
const MemberList = ({ pid }: any) => {
  const { t } = useTranslation(["common", "maker"])
  const [filter, setFilter] = useState<string>("latest")
  const [order, setOrder] = useState<number>(-1)
  const [count, setCount] = useState<number>(0)
  const [nowPage, setNowPage] = useState<number>(1)

  const onChangeOrder = (newOrder: string) => {
    if (newOrder !== filter) {
      if (newOrder == "latest") {
        setOrder(-1)
      } else if (newOrder == "oldest") {
        setOrder(1)
      }
      setCount(prev => prev + 1)
      setFilter(newOrder)
    }
  }

  const fetchMemberList = useCallback(async () => {
    const res = await axios.get(`/api/makers/memberlist/${pid}?page=${nowPage}&order=${order}`)
    const result = res.data
    return {
      members: result.members.list,
      total: result.members.totalCount,
    }
  }, [nowPage, order])

  const { mutate, data, isLoading, isError, error, isSuccess } = useMutation(fetchMemberList)

  useEffect(() => {
    mutate()
  }, [pid, nowPage, order])
  console.log(data)

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Flex py="3" align={"center"} justify="space-between">
        <Flex>
          {isSuccess && data.total > 0 && (
            <>
              <Box sx={{ fontWeight: "bold", pr: 1, fontSize: [2] }}>{data?.total.toLocaleString()}</Box>
              <Box>Members</Box>
            </>
          )}
          {isLoading && (
            <>
              <Skeleton sx={{ width: "96px", height: "18px" }} radius="4px" />
            </>
          )}
        </Flex>
        {isSuccess ? (
          data.total > 0 ? (
            <Selector
              options={[
                { content: t("common:latest"), key: "latest" },
                { content: t("common:oldest"), key: "oldest" },
              ]}
              value={filter} //초기값됴
              onChange={onChangeOrder}
              sx={{
                fontSize: [1, 2],
                lineHeight: "26px",
                padding: "6px 12px",
                color: "black90",
                width: ["96px", "120px"],
                height: ["32px", "40px"],
              }}
            />
          ) : (
            <></>
          )
        ) : (
          <>
            <Skeleton sx={{ width: "90px", height: "24px" }} radius="4px" />
          </>
        )}
      </Flex>
      <Flex direction="column" sx={{ pr: 2, pb: "40px" }}>
        {isSuccess &&
          data &&
          data.members.map((item: any, idx: number) => (
            <>
              <MemberCard {...item} key={idx} />
            </>
          ))}
        {isLoading && (
          <>
            <SkeletonMemberCard /> <SkeletonMemberCard />
            <SkeletonMemberCard /> <SkeletonMemberCard /> <SkeletonMemberCard /> <SkeletonMemberCard />
          </>
        )}
      </Flex>
      {isSuccess && data.total == 0 && (
        <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
          <Flex sx={{ alignItems: "center", justifyContent: "center", py: 8, flexDirection: "column" }}>
            <LogoEmpty width="345px" />
            <Box sx={{ pt: 10 }}>
              <Box sx={{ fontSize: "40px", fontWeight: "bold", color: "black10" }}>Meet Here! Soon!</Box>
            </Box>
          </Flex>
        </Flex>
      )}
    </Box>
  )
}
export default MemberList
