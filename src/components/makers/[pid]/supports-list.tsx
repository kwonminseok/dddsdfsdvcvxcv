import { useMutation } from "@tanstack/react-query"
import { useTranslation } from "next-i18next"
import { useState, useCallback, useEffect } from "react"
import axios from "axios"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useInView } from "react-intersection-observer"

import { SupportCard, SkeletonSupportCard } from "@components/supports"
import { Box, Flex, Selector } from "@components/commons"
const SupportList = ({ pid }: any) => {
  const [ref, isView] = useInView()
  const { t } = useTranslation(["common", "maker"])
  const [filter, setFilter] = useState<string>("latest")
  const [order, setOrder] = useState<number>(-1)
  const [count, setCount] = useState<number>(0)

  const fetchSupportList = useCallback(
    async ({ pageParam = 1 }) => {
      if (pid) {
        const res = await axios.get(`/api/makers/supportlist/${pid}?page=${pageParam}&order=${order}`)
        const result = res.data
        console.log(result)
        return {
          supports: result.supports,
          nextPage: pageParam + 1,
          isLast: result.supports.length < 10,
        }
      }
    },
    [order],
  )

  const { data, hasNextPage, fetchNextPage, isSuccess, isFetching } = useInfiniteQuery({
    queryKey: [`${pid}`, "getsupportlists", count],
    queryFn: fetchSupportList,
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage!.isLast) return lastPage!.nextPage
      return undefined
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 1,
  })

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

  useEffect(() => {
    //감지 및 fetch
    if (isView && hasNextPage) fetchNextPage()
  }, [isView])

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Flex direction={"row-reverse"} py="3">
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
      </Flex>
      <Box
        sx={{
          width: "100%",
          display: ["flex", "grid"],
          flexDirection: "column",
          gap: ["8px", "24px"],
          gridTemplateColumns: "repeat(4, calc(25% - 18px))",
          pt: 3,
        }}
      >
        {isSuccess && data.pages
          ? data.pages.map((datas, page_num) => {
              const support = datas!.supports
              return support.map((sup: any, idx: number) => {
                if (page_num == data.pages.length - 1 && support.length - 1 == idx) {
                  return <SupportCard ref={ref} key={support._id} {...sup} />
                } else {
                  return <SupportCard key={support._id} {...sup} />
                }
              })
            })
          : null}
        {isFetching && (
          <>
            <SkeletonSupportCard />
            <SkeletonSupportCard />
            <SkeletonSupportCard />
            <SkeletonSupportCard />
          </>
        )}
      </Box>
    </Box>
  )
}
export default SupportList
