import { Box, Flex, Avatar } from "@components/commons"
import ImageWrapper from "@components/imageWrapper"
import SupportExchageInfo from "@components/supports/mint/badge-exchange-info"
import BlockInfo from "@components/supports/mint/block-info"
import BadgeManage from "@components/supports/mint/certi-manage"
import Certificate from "@components/supports/mint/certificate"
import MakerInfo from "@components/supports/mint/maker-info"
import BadgeIntro from "@components/supports/mint/support-info"
import SupportStory from "@components/supports/mint/support-story"
import LogoSmall from "@icons/logo-small"
import useWindowSize from "@libs/hooks/use-window-size"
const test_list = [
  { title: "발행량", content: "873" },
  { title: "Edition No", content: "96" },
  { title: "Contract adress", content: "0x23ks34f0...83klksdfff", link: "/" },
  { title: "Token ID", content: "10273" },
  { title: "BlockChain", content: "Klaytn" },
]

export default function Support() {
  const sizeType = useWindowSize()
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      __css={{ minHeight: "100vh" }}
    >
      <Box sx={{ pb: "64px", width: "100%" }}>
        <Box sx={{ width: "100%", maxWidth: "1260px", px: "30px", mx: "auto" }}>
          {/* 인증서 */}
          <Box mt={8}>
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
              <SupportExchageInfo sizeType={sizeType as number} />
              <BadgeManage sizeType={sizeType as number} />
            </Flex>
            <Flex
              __css={{
                flexDirection: "column",
                flex: 1,
                ml: [0, 3],
                // order: [0, 1, 1],
              }}
            >
              <BadgeIntro sizeType={sizeType as number} />
              <SupportStory sizeType={sizeType as number} />
              <MakerInfo sizeType={sizeType as number} />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}
