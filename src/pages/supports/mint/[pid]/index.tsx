import { Box, Flex, Avatar, SVG } from "@components/commons"
import Certificate from "@components/supports/mint/certificate"
// import SupportStory from "@components/supports/mint/support-story"
import { GetServerSideProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { DetailInfo } from "@components/supports/[pid]"
import { MakerInfo } from "@components/supports/[pid]"
import { SupportStory } from "@components/supports/[pid]"
export default function Support({ pid }: any) {
  const fetchNftInfo = async () => {
    if (pid) {
      const res = await axios.get(`/api/supports/mint/info/${pid}`)
      const result = res.data
      return result
    }
  }

  const { data, isLoading, error, isSuccess } = useQuery({
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
          <Box my={10}>{isSuccess && <Certificate certificate={data && data.certificate} />}</Box>
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
              <DetailInfo attributes={data && data.support.attributes} />
              <MakerInfo maker={data && data.maker} />

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
              <SupportStory description={data && data.support.description} subImages={data && data.support.subImages} />
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
