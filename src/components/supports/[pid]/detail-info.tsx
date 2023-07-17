import { Box, Flex, Skeleton, SVG } from "@components/commons"
import { LuNewspaper } from "react-icons/lu"
import { useTranslation } from "next-i18next"
import { createIcon } from "@icons/icons"
const SKELETON_LIST = [
  { trait_value: 0, value: "" },
  { trait_value: 1, value: "" },
  { trait_value: 2, value: "" },
  { trait_value: 3, value: "" },
]

const DetailInfo = ({ attributes }: { attributes: any[] }) => {
  const { t } = useTranslation("support")
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
          <SVG fill="1a1a1a" size={["18px", "24px"]} viewBox="0 0 222 222">
            {createIcon("detail")}
          </SVG>
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          {t("details")}
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
