import { Box, Flex, SVG } from "@components/commons"
import { createIcon } from "@icons/icons"
import { useTranslation } from "next-i18next"

const Caution = () => {
  const { t } = useTranslation("support")
  return (
    <Box sx={{ mb: 7, width: "100%", mr: [0, 3] }}>
      {/* header */}
      <Flex sx={{ alignItems: "center", pb: 3 }}>
        <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
          <SVG fill="1a1a1a" size={["18px", "24px"]} viewBox="0 0 222 222">
            {createIcon("caution")}
          </SVG>
        </Flex>
        <Box
          sx={{
            fontSize: [2, 5],
            fontWeight: "bold",
            lineHeight: ["24px", "30px"],
          }}
        >
          {t("notice")}
        </Box>
      </Flex>
      <Box as="ul" sx={{ width: "100%", fontSize: [1, 2], lineHeight: ["20px", "24px"] }}>
        <Box as="li">- {t("noticecontent1")}</Box>
        <Box as="li">- {t("noticecontent2")}</Box>
        <Box as="li">- {t("noticecontent3")}</Box>
        <Box as="li">- {t("noticecontent4")}</Box>
      </Box>
    </Box>
  )
}

export default Caution
