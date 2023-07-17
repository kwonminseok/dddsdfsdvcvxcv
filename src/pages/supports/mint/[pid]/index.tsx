import { Box, Flex, Avatar, SVG } from "@components/commons"
import ImageWrapper from "@components/imageWrapper"
import SupportExchageInfo from "@components/supports/mint/badge-exchange-info"
import BlockInfo from "@components/supports/mint/block-info"
import BadgeManage from "@components/supports/mint/certi-manage"
import Certificate from "@components/supports/mint/certificate"
import MakerInfo from "@components/supports/mint/maker-info"
import BadgeIntro from "@components/supports/mint/support-info"
import SupportStory from "@components/supports/mint/support-story"
import useWindowSize from "@libs/hooks/use-window-size"
import { GetServerSideProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
export default function Support({ pid }: any) {
  const sizeType = useWindowSize()

  const fetchNftInfo = async () => {
    if (pid) {
      const res = await axios.get(`/api/supports/mint/info/${pid}`)
      const result = res.data
      return result
    }
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["mintsupport", pid],
    queryFn: fetchNftInfo,
    refetchOnReconnect: true,
    retry: 1,
  })

  return (
    <Flex as="main" direction="column" align="center" __css={{ minHeight: "100vh" }}>
      <Box sx={{ pb: "64px", width: "100%" }}>
        <Box sx={{ width: "100%", maxWidth: "1260px", px: "30px", mx: "auto" }}>
          {/* 인증서 */}
          <Box my={10}>
            <Certificate />
          </Box>
          <Flex
            __css={{ pb: [6, 8, 10], mt: 10 }}
            sx={{
              borderBottom: "1px solid",
              borderColor: "black90",
              flexDirection: ["column-reverse", "row", "row"],
              mx: [2, 0, 0],
            }}
          >
            <Flex
              __css={{
                flexDirection: ["column"],
                flex: 1,
                ml: [0, 3],
                // order: [0, 1, 1],
              }}
            >
              <BlockInfo sizeType={sizeType as number} />
              <MakerInfo sizeType={sizeType as number} />
              {/* <SupportExchageInfo sizeType={sizeType as number} />
              <BadgeManage sizeType={sizeType as number} /> */}
            </Flex>
            <Flex
              __css={{
                flexDirection: "column",
                flex: 1,
                ml: [0, 10],
                // order: [0, 1, 1],
              }}
            >
              <BadgeIntro sizeType={sizeType as number} />
              <SupportStory sizeType={sizeType as number} />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, locale, locales }) => {
  if (locale == "default") {
    return {
      notFound: true,
    }
  }
  const { pid } = query
  return {
    props: {
      pid,
      ...(await serverSideTranslations(locale!, ["common", "support"])),
    },
  }
}
