import React, { useState } from "react"
import { Box, Flex, Text, Button } from "@components/commons"
import useHeaderBorder from "@libs/hooks/use-header-border"
import useWindowSize from "@libs/hooks/use-window-size"
import Link from "next/link"
import LogoSmall from "@icons/logo-small"
import SearchInput from "@components/search-input"
import LogoMain from "@icons/logo-main"
export interface LayoutProps {
  children: React.ReactNode
}

const Header = () => {
  const isborder = useHeaderBorder()
  const sizeType = useWindowSize()

  return (
    <>
      <Box
        sx={{
          top: 0,
          position: "fixed",
          width: "100%",
          borderBottom: isborder ? "1px solid" : "none",
          borderColor: "black10",
          bg: isborder ? "black05" : "transparent",
          zIndex: "header",
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
            pl: [2, 4],
            pr: [2, 4],
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
              <Box as="a" sx={{ flex: "unset", ml: [4, 4, 5], mr: [4, 4, 5] }}>
                <Flex sx={{ width: ["100%", "235px"] }}>
                  <LogoSmall width="100%" />
                </Flex>
              </Box>
            </Link>
          </Flex>
          {(sizeType as number) == 2 && (
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
                      ml: 2,
                      mr: 2,
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
                      ml: 2,
                      mr: 2,
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
                      ml: 2,
                      mr: 2,
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
          {(sizeType as number) > 0 && (
            <Flex sx={{ alignItems: "center", flex: 1 }}>
              <SearchInput />
            </Flex>
          )}
          {(sizeType as number) == 2 && (
            <Flex align="center">
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
    <Box as="footer" sx={{ pt: 8, px: [4, 6, "96px"], width: "100%" }}>
      <Flex
        pb={[4, 8]}
        sx={{ flexDirection: ["column", "row"], alignItems: "center" }}
      >
        <Flex>
          <LogoMain
            width="227px"
            // sx={{height:"50px", width: '200px'}}
          />
        </Flex>
        <Flex
          pl="32px"
          direction="column"
          sx={{ alignItems: ["center", "baseline"], pt: [6, 0] }}
        >
          <Flex sx={{ flexDirection: ["row", "row"] }} pb="3">
            <Box pr="4">
              <Text sx={{ fontSize: [1, 2], fontWeight: "bold" }}>
                이용약관
              </Text>
            </Box>
            <Box pr="4">
              <Text sx={{ fontSize: [1, 2], fontWeight: "bold" }}>
                개인정보처리지침
              </Text>
            </Box>
            <Box pr="4" sx={{ display: ["none", "block"] }}>
              <Text sx={{ fontSize: [1, 2], fontWeight: "bold" }}>
                info@floody.kr
              </Text>
            </Box>
          </Flex>
          <Flex sx={{ flexDirection: ["column", "row"], fontSize: [0, 1] }}>
            <Text sx={{ display: "inline-flex" }}>
              <Box as="p">주식회사 플러디(368-88-01432)</Box>
              <Box
                as="p"
                sx={{
                  ":before": {
                    content: `''`,
                    display: "inline-block",
                    width: "1px",
                    height: "12px",
                    backgroundColor: "black50",
                    verticalAlign: "-1px",
                    margin: "0 8px",
                  },
                }}
              >
                대표자 조재혁
              </Box>
              <Box
                as="p"
                sx={{
                  ":before": {
                    content: `''`,
                    display: "inline-block",
                    width: "1px",
                    height: "12px",
                    backgroundColor: "black50",
                    verticalAlign: "-1px",
                    margin: "0 8px",
                  },
                }}
              >
                개인정보관리책임자 남기원
              </Box>
              <Box
                as="p"
                sx={{
                  ":before": {
                    content: `''`,
                    display: "inline-block",
                    width: "1px",
                    height: "12px",
                    backgroundColor: "black50",
                    verticalAlign: "-1px",
                    margin: "0 8px",
                  },
                }}
              >
                서울시 마포구 동교로 38길 33-9 2층 202호(연남동)
              </Box>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        align={"center"}
        sx={{
          justifyContent: ["center", "center"],
          py: [4, 8],
          borderTop: "1px",
          borderColor: "black10",
        }}
      >
        <Text>© 2023 Floody. All rights reserved.</Text>
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
      <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
        {children}
      </Flex>
      <Box>
        <Footer />
      </Box>
    </>
  )
}

export default DefaultLayout
