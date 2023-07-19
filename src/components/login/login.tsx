// import { Box } from "@chakra-ui/react";
import { Box, Flex, Text, Button, TextField, Link } from "@components/commons"
// import LogoMain from "@assets/icons/LogoMain";
import { useSession, signIn, signOut, getSession } from "next-auth/react"
// import Google from "@assets/icons/Google";
import GoogleLogo from "@icons/logo-google"
import LogoSmall from "@icons/logo-small"
import LogoMain from "@icons/logo-main"
import Image from "next/image"
import { useTranslation } from "next-i18next"

const Login = () => {
  const { t } = useTranslation("common")
  return (
    <>
      <Flex
        sx={{ width: "100%", height: ["100vh", "100%"], py: ["48px"], px: [8] }}
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
          <Flex direction="column" py="4">
            <Box pb="2">
              <TextField variant="line" size="lg" boxProps={{ sx: { width: "100%" } }} placeholder="이메일 입력" />
            </Box>

            <Button
              sx={{
                position: "relative",
                borderRadius: "6px",
                fontWeight: "medium",
                bg: "main50",
                minWidth: "300px",
                minHeight: "42px",
                px: 3,
                pt: 3,
                color: "black05",
              }}
              onClick={e => {
                e.preventDefault()
              }}
            >
              이메일로 시작하기
            </Button>
          </Flex>
          <Flex sx={{ pb: 4, borderTop: "1px solid", borderColor: "black30" }}></Flex>
          <Flex
            direction="column"
            align="center"
            mb="6"
            pb="4"
            sx={{ borderBottom: "1px solid", borderColor: "black10" }}
          >
            <Box mb="3" sx={{ width: "100%" }}>
              <Button
                sx={{
                  position: "relative",
                  borderRadius: "6px",
                  border: "1px solid",
                  borderColor: "black10",
                  fontWeight: "medium",
                  bg: "#fff",
                  minWidth: "300px",
                  minHeight: "42px",
                  width: "100%",
                  px: 3,
                  pt: 3,
                  color: "black90",
                }}
                leftIcon={<GoogleLogo width={"18px"} />}
                iconSx={{ position: "absolute", left: "32px", top: 0, bottom: 0 }}
                onClick={e => {
                  e.preventDefault()
                  signIn("google")
                }}
              >
                구글로 시작하기
              </Button>
              {/* google */}
            </Box>
            <Box mb="3" sx={{ width: "100%" }}>
              <Button
                sx={{
                  position: "relative",
                  borderRadius: "6px",
                  border: "1px solid",
                  width: "100%",
                  fontWeight: "medium",
                  bg: "#03c75a",
                  minWidth: "300px",
                  minHeight: "42px",
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
            <Box mb="3" sx={{ width: "100%" }}>
              <Button
                sx={{
                  position: "relative",
                  borderRadius: "6px",
                  border: "1px solid",
                  fontWeight: "medium",
                  bg: "#03c75a",
                  minWidth: "300px",
                  width: "100%",
                  minHeight: "42px",
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
              <Link target="_blank" mx="2" sx={{ fontWeight: "medium", color: "black90", fontSize: 2 }}>
                이용약관
              </Link>
              <Link target="_blank" mx="2" sx={{ fontWeight: "medium", color: "black90", fontSize: 2 }}>
                개인정보처리지침
              </Link>
            </Flex>
            <Flex>
              <Text sx={{ fontSize: 0 }}>© 2023 Floody. All rights reserved.</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default Login
