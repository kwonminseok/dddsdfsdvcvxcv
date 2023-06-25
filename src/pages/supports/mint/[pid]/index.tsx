import { Box, Flex, Avatar } from "@components/commons"
import ImageWrapper from "@components/imageWrapper"
import Certificate from "@components/supports/mint/certificate"
import LogoSmall from "@icons/logo-small"

const test_list = [
  { title: "발행량", content: "873" },
  { title: "Edition No", content: "96" },
  { title: "Contract adress", content: "0x23ks34f0...83klksdfff", link: "/" },
  { title: "Token ID", content: "10273" },
  { title: "BlockChain", content: "Klaytn" },
]

export default function Support() {
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
          <Certificate />
        </Box>
        <Flex
          __css={{ pb: [6, 8, 10] }}
          //   direction={["column", "row", "row"]}
          mx={[2, 0, 0]}
          sx={{
            borderBottom: "1px solid",
            borderColor: "black90",
            flexDirection: ["column", "row", "row"],
          }}
        ></Flex>
      </Box>
    </Flex>
  )
}
