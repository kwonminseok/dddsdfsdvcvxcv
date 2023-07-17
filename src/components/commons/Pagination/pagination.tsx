import { Box } from "../Box"
import { Flex } from "../Flex"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
// nowpage 가 1이 아니면 < 보이게.
// nowpage 가 맥시멈이 아니면 > 보이게

// 보이는건  최대 7개
// 맨앞과 맨뒤는 보여야한다
// nowpage를 기준으로 앞뒤 2개씩 보여야한다.
// 거기에 1또는 맥시멈이 포함될 수 있다.

interface PaginationProps {
  nowPage: number
  maxPage: number
}

const Pagination = ({ nowPage, maxPage }: PaginationProps) => {
  const previus = () => {
    // nowPage !== 1
    return (
      <Box as="li">
        <ChevronLeft />
      </Box>
    )
  }
  const next = () => {
    //nowPage !== maxPage
    return (
      <Box as="li">
        <ChevronRight />
      </Box>
    )
  }

  const moreBreak = () => {
    // leftMore는 nowPage>4 보다 작을때
    // rightMore는 noewPage<maxpage-4?
    return (
      <Box as="li">
        <MoreHorizontal />
      </Box>
    )
  }
  const checkLeft = () => {
    if ((nowPage + 1 == maxPage && nowPage - 4 > 2) || (nowPage + 2 == maxPage && nowPage - 3 > 2) || nowPage - 2 > 2) {
      return true
    } else {
      return false
    }
  }

  const checkRight = () => {
    if (
      (nowPage - 2 == 1 && nowPage + 4 < maxPage) ||
      (nowPage - 1 == 1 && nowPage + 5 < maxPage) ||
      nowPage + 3 < maxPage
    ) {
      return true
    } else {
      return false
    }
  }

  return (
    <Box sx={{ whiteSpace: "nowrap" }}>
      <Flex as="ul" sx={{ alignItems: "center", gap: "4px" }}>
        {nowPage > 1 && <>{previus()}</>}
        {/* 무조건 1 */}
        {checkLeft() && <>{moreBreak()}</>}
        {/* 여기 최대 5개 */}
        {checkRight() && <>{moreBreak()}</>}
        {/* 무조건 max */}
        {nowPage < maxPage && <>{next()}</>}
        <Box></Box>
      </Flex>
    </Box>
  )
}

export default Pagination
