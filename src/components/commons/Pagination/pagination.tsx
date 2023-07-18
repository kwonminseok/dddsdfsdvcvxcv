import { Box } from "../Box"
import { Flex } from "../Flex"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import PageBox from "./page-box"

interface PaginationProps {
  nowPage: number
  lastPage: number
  setPage: any
}

const Pagination = ({ nowPage, lastPage, setPage }: PaginationProps) => {
  const getPageRange = () => {
    let prev = nowPage === 1 ? null : nowPage - 1
    let next = nowPage === lastPage ? null : nowPage + 1
    let items: (number | "...")[] = [1]

    if (nowPage === 1 && lastPage === 1) return { nowPage, prev, next, items }
    if (nowPage > 4) items.push("...")
    let r = 2,
      r1 = nowPage - r,
      r2 = nowPage + r
    for (let i = r1 > 2 ? r1 : 2; i <= Math.min(lastPage, r2); i++) items.push(i)
    if (r2 + 1 < lastPage) items.push("...")
    if (r2 < lastPage) items.push(lastPage)
    return { nowPage, prev, next, items }
  }

  const pageRange = getPageRange()

  // const previus = () => {
  //   // nowPage !== 1
  //   return (
  //     <PageBox onClick={() => setPage(pageRange.prev)}>
  //       <ChevronLeft />
  //     </PageBox>
  //   )
  // }
  // const next = () => {
  //   //nowPage !== maxPage
  //   return (
  //     <PageBox onClick={() => setPage(pageRange.next)}>
  //       <ChevronRight />
  //     </PageBox>
  //   )
  // }

  const moreBreak = () => {
    // leftMore는 nowPage>4 보다 작을때
    // rightMore는 noewPage<maxpage-4?
    return (
      <PageBox>
        <MoreHorizontal />
      </PageBox>
    )
  }

  return (
    <Box sx={{ whiteSpace: "nowrap" }}>
      <Flex as="ul" sx={{ alignItems: "center", gap: "4px" }}>
        <PageBox onClick={() => setPage(pageRange.prev)} disabled={nowPage == 1}>
          <ChevronLeft />
        </PageBox>
        {pageRange.items.map(item => {
          if (item === "...") {
            return <>{moreBreak()}</>
          } else if (item == nowPage) {
            return <PageBox sx={{ bg: "main50", color: "black05", borderRadius: "6px" }}>{item}</PageBox>
          } else {
            return <PageBox onClick={() => setPage(item)}>{item}</PageBox>
          }
        })}
        <PageBox onClick={() => setPage(pageRange.next)} disabled={nowPage == lastPage}>
          <ChevronRight />
        </PageBox>
      </Flex>
    </Box>
  )
}

export default Pagination
