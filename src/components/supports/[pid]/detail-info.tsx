import { Box, Flex, Skeleton } from "@components/commons"
import { LuNewspaper } from "react-icons/lu"

const SKELETON_LIST = [
  { trait_value: 0, value: "" },
  { trait_value: 1, value: "" },
  { trait_value: 2, value: "" },
  { trait_value: 3, value: "" },
]

const DetailInfo = ({ sizeType, attributes }: { sizeType: number; attributes: any[] }) => {
  const iconSize = sizeType > 0 ? 24 : 18

  const _renderSkeleton = SKELETON_LIST.map((item, idx) => {
    return (
      <Flex
        key={item.trait_value}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
          fontSize: [1, 2],
        }}
      >
        <Skeleton sx={{ width: `${40 - 10 * idx}%`, height: "16px" }}></Skeleton>
        <Skeleton sx={{ width: `${40 - 10 * idx}%`, height: "16px" }}></Skeleton>
      </Flex>
    )
  })
  return (
    <Box sx={{ mb: 7, width: "100%", mr: [0, 3] }}>
      <Flex sx={{ alignItems: "center", pb: 3 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
          <LuNewspaper size={iconSize} />
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          상세 정보
        </Box>
      </Flex>
      <Box>
        {attributes ? (
          <>
            {attributes.map(item => (
              <Flex
                key={item.trait_value}
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                  fontSize: [1, 2],
                }}
              >
                <Box sx={{ color: "black50", fontWeight: "normal" }}>{item.trait_value}</Box>
                <Box sx={{ fontWeight: "medium" }}>{item.value}</Box>
              </Flex>
            ))}
          </>
        ) : (
          <>{_renderSkeleton}</>
        )}
      </Box>
    </Box>
  )
}

export default DetailInfo
