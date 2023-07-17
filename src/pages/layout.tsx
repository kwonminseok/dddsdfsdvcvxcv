import React, { useEffect, useState } from "react"
import { Box, Flex, Text, Button, Avatar } from "@components/commons"
import useHeaderBorder from "@libs/hooks/use-header-border"
import useWindowSize from "@libs/hooks/use-window-size"
import Link from "next/link"
import LogoSmall from "@icons/logo-small"
import SearchInput from "@components/search-input"
// import LogoMain from "@icons/logo-main"
import axios from "axios"
import Cookies from "js-cookie"
import { useRecoilState } from "recoil"
import { loginStatus } from "@/_states/user/selectors"
import { useRouter } from "next/router"
import { UserCircle2 } from "lucide-react"
import HoverDrop from "@components/layout/hoverdrop"
import { useTranslation } from "next-i18next"
// import { GetServerSideProps } from "next"
// import { serverSideTranslations } from "next-i18next/serverSideTranslations"
export interface LayoutProps {
  children: React.ReactNode
}

const instance = axios.create({
  baseURL: "/",
})

const Header = () => {
  // const { t, i18n } = useTranslation(["header"], {
  //   bindI18n: "languageChanged loaded",
  // })

  // useEffect(() => {
  //   i18n.reloadResources(i18n.resolvedLanguage, ["header"])
  // }, [i18n])

  const isborder = useHeaderBorder()
  const sizeType = useWindowSize()
  const [login, setLogin] = useRecoilState(loginStatus)
  const router = useRouter()
  const isLoginPage = router.pathname === "/login"
  // console.log(window.navigator.language)
  useEffect(() => {
    async function fetchUserMe() {
      const res = await instance.get("api/users/logincheck")
      if (res.data) {
        if (res.data.status === 200) {
          if (res.data.message == "USER_LOGIN") {
            setLogin(old => ({ ...old, isLoggedIn: true }))
            // setIsLoggedIn(true)
          } else if (res.data.message == "TOKEN_INVALID" || res.data.message == "TOKEN_EXPIRED") {
            setLogin(old => ({ ...old, isLoggedIn: false }))
          }
        }
      }
      setLogin(old => ({ ...old, isLoading: false }))
    }
    fetchUserMe()
  }, [])

  const handleLogout = () => {
    Cookies.remove("ses_23k_xh")
    window.location.reload()
  }

  useEffect(() => {
    async function fetchUserInfo() {
      const res = await instance.get("api/users/basicinfo")
      if (res.data) {
        // console.log(res.data)
      }
    }

    if (!login.isLoading) {
      if (login.isLoggedIn && isLoginPage) {
        window.location.href = "/"
      }

      if (login.isLoggedIn) {
        fetchUserInfo()
      }
    }
  }, [login])

  return (
    <>
      <Box
        sx={{
          top: 0,
          position: "fixed",
          width: "100%",
          borderBottom: isborder ? "none" : "none",
          boxShadow: "floody3",
          borderColor: "black10",
          bg: isborder ? "rgba(230,230,230,0.4)" : "rgba(230,230,230,0.4)",
          zIndex: "header",
          backdropFilter: "blur(10px)",
        }}
        __css={{
          "&>header": {
            height: ["56px", "64px"],
          },
        }}
      >
        <Flex
          as="header"
          sx={{
            width: "100%",
            alignItems: "center",
            px: 10,
            userSelect: "none",
            // bg: "#fff",
          }}
          __css={{
            "&>div": {
              height: "100%",
            },
          }}
        >
          <Flex
            sx={{
              alignItems: "center",
              flex: [1, "inherit"],
              maxWidth: "50%",
              mx: ["auto", 0],
            }}
          >
            <Link href="/" passHref legacyBehavior>
              <Box as="a" sx={{ flex: "unset", mr: [4, 4, 5] }}>
                <Flex sx={{ width: ["100%", "235px"] }}>
                  <LogoSmall width="100%" />
                </Flex>
              </Box>
            </Link>
          </Flex>
          {!isLoginPage && (sizeType as number) == 2 && (
            <>
              <Flex
                sx={{
                  flexDirection: "row",
                  overflow: "hidden",
                  flex: "inherit",
                  justifyContent: "center",
                  alignItems: "center",
                  visibility: ["hidden", "visible"],
                  pointerEvents: ["none", "auto"],
                }}
              >
                <Link href="/makers" passHref legacyBehavior>
                  <Box
                    as="a"
                    sx={{
                      mx: 5,
                      height: "100%",
                      display: "inline-flex",
                      alignItems: "center",
                      ":hover": { color: "text-link-hover" },
                    }}
                  >
                    <Text sx={{ whiteSpace: "nowrap" }}>메이커</Text>
                  </Box>
                </Link>
                <Link href="/supports" passHref legacyBehavior>
                  <Box
                    as="a"
                    sx={{
                      mx: 5,
                      height: "100%",
                      display: "inline-flex",
                      alignItems: "center",
                      ":hover": { color: "text-link-hover" },
                    }}
                  >
                    <Text sx={{ whiteSpace: "nowrap" }}>서포터</Text>
                  </Box>
                </Link>
                <Link href="/" passHref legacyBehavior>
                  <Box
                    as="a"
                    sx={{
                      mx: 5,
                      height: "100%",
                      display: "inline-flex",
                      alignItems: "center",
                      ":hover": { color: "text-link-hover" },
                    }}
                  >
                    <Text sx={{ whiteSpace: "nowrap" }}>소개</Text>
                  </Box>
                </Link>
              </Flex>
            </>
          )}
          {!isLoginPage && (sizeType as number) > 0 && (
            <Flex sx={{ alignItems: "center", flex: 1 }}>
              <SearchInput />
            </Flex>
          )}
          <Flex sx={{ px: 2, position: "relative" }}>
            <HoverDrop />
          </Flex>

          {!isLoginPage && (sizeType as number) == 2 && (
            <Flex align="center">
              {login.isLoading ? (
                <></>
              ) : login.isLoggedIn ? (
                <Button
                  type="button"
                  onClick={handleLogout}
                  sx={{
                    minHeight: "40px",
                    bg: "main50",
                    // boxShadow: "floody3",
                    color: "#fff",
                    px: 5,
                  }}
                >
                  로그아웃
                </Button>
              ) : (
                <Link href="/login" passHref legacyBehavior>
                  <Button
                    as="a"
                    sx={{
                      minHeight: "40px",
                      bg: "main50",
                      // boxShadow: "floody3",
                      color: "#fff",
                      px: 5,
                    }}
                  >
                    로그인
                  </Button>
                </Link>
              )}
            </Flex>
          )}
          {/* {(sizeType as number) == 0 && <SearchDrawer />}
          {(sizeType as number) < 2 && <Hamburger />} */}
        </Flex>
      </Box>
    </>
  )
}

const Footer = () => {
  return (
    <Box as="footer" sx={{ width: "100%", bg: "black30" }}>
      <Flex
        py={[4, 8]}
        sx={{
          flexDirection: ["column", "row"],
          alignItems: "center",
          maxWidth: "1200px",
          mx: "auto",
          borderBottom: "1px solid",
          borderColor: "black05",
        }}
      >
        <Flex direction="column" sx={{ alignItems: ["center", "baseline"] }}>
          <Flex sx={{ flexDirection: ["row", "row"] }}>
            <Box pr="4">
              <Text sx={{ fontSize: [1, 2], fontWeight: "bold", color: "black05", cursor: "pointer" }}>
                Terms and conditions
              </Text>
            </Box>
            <Box pr="4">
              <Text sx={{ fontSize: [1, 2], fontWeight: "bold", color: "black05", cursor: "pointer" }}>
                Privacy policy
              </Text>
            </Box>
            <Box pr="4" sx={{ display: ["none", "block"] }}>
              <Text sx={{ fontSize: [1, 2], fontWeight: "bold", color: "black05" }}>info@floody.kr</Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        align={"center"}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          py: [4, 8],
          borderTop: "1px",
          borderColor: "black10",
        }}
      >
        <Flex sx={{ width: ["235px"] }}>
          <LogoSmall color="#f2f2f2" width="100%" />
        </Flex>
        <Text sx={{ pl: 4, color: "black05", fontSize: 2 }}>© 2023 Floody. All rights reserved.</Text>
      </Flex>
    </Box>
  )
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box sx={{ position: "relative", height: ["56px", "64px"] }}>
        <Header />
      </Box>
      <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>{children}</Flex>
      <Box>
        <Footer />
      </Box>
    </>
  )
}

export default DefaultLayout

// export const getServerSideProps: GetServerSideProps = async ({ query, locale, locales }) => {
//   console.log("server side")
//   const { pid } = query
//   return {
//     props: {
//       pid,
//       ...(await serverSideTranslations(locale ?? "en", ["common", "header"])),
//       locales,
//     },
//   }
// }
