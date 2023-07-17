// import { Box } from "@chakra-ui/react";
import { Box, Flex, Text, Button } from "@components/commons"
// import LogoMain from "@assets/icons/LogoMain";
import { useSession, signIn, signOut, getSession } from "next-auth/react"
// import Google from "@assets/icons/Google";
import GoogleLogo from "@icons/logo-google"
import LogoSmall from "@icons/logo-small"
import LogoMain from "@icons/logo-main"
import Image from "next/image"
const Login = () => {
  return (
    <>
      <Flex
        py="6"
        px="6"
        sx={{ width: "100%", height: ["100vh", "100%"] }}
        direction="column"
        align="center"
        justify="center"
      >
        {/* header */}
        <Flex pt="4" pb="6" align="center">
          <Box ml={[16, 16, 20]} mr={[16, 16, 20]} sx={{ flex: "unset" }}>
            <Flex sx={{ width: "240px" }}>
              <LogoMain width="100%" />
            </Flex>
          </Box>
        </Flex>
        <Box sx={{ width: "100%" }}>
          {/*  login text */}
          <Flex direction="column" align="center" justify="center" mb="10">
            <Text sx={{ fontSize: 2, lineHeight: "24px", color: "black90", fontWeight: "medium" }}>
              간편 로그인으로 1초만에 얻는
            </Text>
            <Text sx={{ fontSize: 2, lineHeight: "24px", color: "black90", fontWeight: "medium" }}>
              나만의 영원한 디지털 뱃지
            </Text>
          </Flex>

          <Flex direction="column" align="center" mb="6">
            <Box mb="3">
              <Button
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  border: "1px solid",
                  fontWeight: "medium",
                  bg: "#fff",
                  minWidth: "300px",
                  px: 3,
                  pt: 3,
                  color: "black90",
                }}
                leftIcon={<GoogleLogo width={"18px"} />}
                iconSx={{ position: "absolute", left: "32px", top: 0, bottom: 0 }}
                // px='3'
                // pt='3'
                // iconVariants="left"
                // sx={{ position: "relative" }}
                onClick={e => {
                  e.preventDefault()
                  signIn("google")
                }}
              >
                구글로 시작하기
              </Button>
              {/* google */}
            </Box>
            <Box mb="3">
              <Button
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  border: "1px solid",
                  fontWeight: "medium",
                  bg: "#03c75a",
                  minWidth: "300px",
                  px: 3,
                  pt: 3,
                  color: "#fff",
                }}
                leftIcon={<Image src="/logo-naver.png" width={32} height={32} alt="naver" />}
                iconSx={{ position: "absolute", left: "24px", top: "4px" }}
                onClick={e => {
                  e.preventDefault()
                  signIn("naver")
                }}
              >
                네이버로 시작하기
              </Button>
            </Box>
            <Box mb="3">
              <Button
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  border: "1px solid",
                  fontWeight: "medium",
                  bg: "#03c75a",
                  minWidth: "300px",
                  px: 3,
                  pt: 3,
                  color: "#fff",
                }}
                leftIcon={<Image src="/logo-naver.png" width={32} height={32} alt="naver" />}
                iconSx={{ position: "absolute", left: "24px", top: "4px" }}
                onClick={e => {
                  e.preventDefault()
                  signIn("twitter")
                }}
              >
                트위터로 시작하기
              </Button>
            </Box>
          </Flex>
          {/* mini - footer */}
          <Flex
            sx={{
              borderTop: "1px",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Flex mt="5" mb="3">
              <Text mx="2" variant={"h6"} onClick={() => signOut()}>
                이용약관
              </Text>
              <Text mx="2" variant={"h6"}>
                개인정보처리지침
              </Text>
            </Flex>
            <Flex>
              <Text variant={"s"}>© 2023 Floody. All rights reserved.</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default Login
