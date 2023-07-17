import Head from "next/head"
import { Box, Flex, Selector, Button, Skeleton } from "@components/commons"
import ImageWrapper from "@components/imageWrapper"
import { Instagram, Twitter, Chrome, MoreVertical } from "lucide-react"
import MoreContents from "@components/more-contents"
import { SkeletonSupportCard, SupportCard } from "@components/supports"
import { GetServerSideProps } from "next"
import axios from "axios"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { Tab, TabsContainer, TabList, Panel } from "@components/commons/Tabs/tab"
import { useInView } from "react-intersection-observer"
import WrapBox from "@components/makers/wrap-box"
import { formatNumber } from "@libs/utils/fotmat-number"
import { transformedMY } from "@libs/utils/transformed"
import { useCallback, useState, useEffect } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
export default function Maker({ pid }: any) {
  const [filter, setFilter] = useState<string>("latest")
  const [order, setOrder] = useState<number>(-1)
  const [count, setCount] = useState<number>(0)
  const { t } = useTranslation(["common", "maker"])
  const onChangeOrder = (newOrder: string) => {
    if (newOrder !== filter) {
      if (newOrder == "latest") {
        setOrder(-1)
      } else if (newOrder == "oldest") {
        setOrder(1)
      }
      setCount(prev => prev + 1)
      setFilter(newOrder)
    }
  }

  const [ref, isView] = useInView()
  const fetchMaker = async () => {
    if (pid) {
      const res = await axios.get(`/api/makers/info/${pid}`)
      const result = res.data

      return result
      //
    }
  }

  const fetchSupportList = useCallback(
    async ({ pageParam = 1 }) => {
      if (pid) {
        const res = await axios.get(`/api/makers/supportlist/${pid}?page=${pageParam}&order=${order}`)
        const result = res.data
        return {
          supports: result.supports,
          nextPage: pageParam + 1,
          isLast: result.supports.length < 10,
        }
      }
    },
    [order],
  )
  const { data, isLoading, error } = useQuery({
    queryKey: ["maker", pid],
    queryFn: fetchMaker,
  })
  const supports = useInfiniteQuery({
    queryKey: [`${pid}`, "getsupportlists", order],
    queryFn: fetchSupportList,
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage!.isLast) return lastPage!.nextPage
      return undefined
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 1,
  })

  useEffect(() => {
    //감지 및 fetch
    if (isView && supports.hasNextPage) supports.fetchNextPage()
  }, [isView])

  return (
    <>
      {/* <Head>
        <title>Makers</title>
        <meta name="description" content="Generated by create next app" />
      </Head> */}
      <Flex
        as="main"
        sx={{
          flexDirection: "column",
          minHeight: "100vh",
          alignItems: "center",
          marginTop: [0, "-64px"],
        }}
      >
        <Box sx={{ pb: "64px", width: "100%" }}>
          <Box
            sx={{
              position: "relative",
              maxHeight: "434px",
              overflow: "hidden",
            }}
          >
            <ImageWrapper
              pb={["40%", "30%"]}
              src={data && data.banner}
              // src="https://i.seadn.io/gcs/files/cf29f66e5492c40bd190d6e858521e4f.jpg?auto=format&dpr=1&w=3840"
              wrapperClassName="lazy-load-image-wrapper"
              effect="blur"
              wrapperProps={{
                style: {
                  width: "100%",
                  height: "100%",
                },
              }}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Box sx={{ width: "100%", pl: 4, maxWidth: "1200px", mx: "auto" }}>
            <Box sx={{ mt: "-80px", mb: 5 }}>
              <Box
                sx={{
                  width: ["104px", "200px"],
                  height: ["104px", "200px"],
                  position: "relative",
                  border: "8px solid #fff",
                  boxShadow: "shadow3",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <ImageWrapper
                  pb={100}
                  src={data && data.profileImage}
                  wrapperClassName="lazy-load-image-wrapper"
                  effect="blur"
                  wrapperProps={{
                    style: {
                      width: "100%",
                      height: "100%",
                    },
                  }}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
          </Box>
          {/* <Flex sx={{ pt: 2 }}>
              <Flex
                sx={{
                  bg: "#6c707b",
                  px: 2,
                  pb: "6px",
                  pt: 1,
                  borderRadius: "12px",
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 1,
                }}
              >
                <Box sx={{ lineHeight: "20px", pl: 1 }}>#</Box>
                <Box sx={{ px: 1, lineHeight: "20px" }}>임영웅</Box>
              </Flex>
            </Flex> */}
          <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", px: 3 }}>
            <Flex sx={{ justifyContent: "space-between" }}>
              <Flex sx={{ pt: 2, pb: 1 }}>
                {data && data.category ? (
                  <Flex
                    sx={{
                      bg: "transparent", //"#6c707b",
                      // px: 2,
                      pb: "6px",
                      pt: 1,
                      borderRadius: "12px",
                      color: "black90", //"#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 1,
                    }}
                  >
                    {/* <Box sx={{ lineHeight: "20px", pl: 1 }}>#</Box> */}
                    <Box sx={{ lineHeight: "20px" }}>{data.category}</Box>
                  </Flex>
                ) : (
                  <></>
                )}
              </Flex>
              <Flex sx={{ alignItems: "center", display: ["none", "block"] }}>
                <Flex sx={{ alignItems: "center" }}>
                  <Button sx={{ bg: "transparent", border: "none" }}>
                    <Twitter size={24} />
                  </Button>
                  <Button sx={{ bg: "transparent", border: "none" }}>
                    <Instagram size={24} />
                  </Button>
                  <Button sx={{ bg: "transparent", border: "none" }}>
                    <Chrome size={24} />
                  </Button>
                </Flex>
              </Flex>
              <Flex sx={{ alignItems: "center", display: ["block", "none"] }}>
                <Button sx={{ bg: "transparent", border: "none", py: [1, 3] }}>
                  <MoreVertical size={20} />
                </Button>
              </Flex>
            </Flex>
            <Box
              sx={{
                fontSize: ["20px", "32px"],
                lineHeight: ["28px", "40px"],
                fontWeight: "bold",
              }}
            >
              {data ? <>{data.name}</> : <Skeleton sx={{ height: ["28px", "40px"], minWidth: "276px" }} radius="4px" />}
            </Box>
            <Flex sx={{ maxWidth: "776px" }}>
              {data ? (
                <MoreContents
                  contents={data.description}
                  line={3}
                  boxSx={{
                    fontSize: 1,
                    lineHeight: "1.5",
                    minHeight: "36px",
                    color: "black70",
                  }}
                />
              ) : (
                <Box
                  sx={{
                    pt: 4,
                    width: "100%",
                    gap: "14px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Skeleton sx={{ height: "15px", width: "70%" }} />
                  <Skeleton sx={{ height: "15px", width: "90%" }} />
                </Box>
              )}
            </Flex>
            <Flex
              sx={{
                flexWrap: "wrap",
                pt: 5,
                gap: "40px",
                flexDirection: "row",
              }}
            >
              {data ? (
                <>
                  <WrapBox name={"Members"} value={formatNumber(data.totalSupporters)} />
                  <WrapBox name={"Supports"} value={formatNumber(data.totalSupports)} />
                  <WrapBox name={"Badges"} value={formatNumber(data.totalMinted)} />
                  <WrapBox name={"Created"} value={transformedMY(data.createdAt)} />
                </>
              ) : (
                <></>
              )}
            </Flex>
            <TabsContainer defaultActiveKey={"supports"}>
              <TabList tabsSx={{ mt: 8 }} variant="standard">
                <Tab tabKey="supports">{t("maker:supporttab")}</Tab>
                <Tab tabKey="members">{t("maker:membertab")}</Tab>
              </TabList>

              <Panel tabKey="supports">
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Flex direction={"row-reverse"} py="3">
                    <Selector
                      options={[
                        { content: t("common:latest"), key: "latest" },
                        { content: t("common:oldest"), key: "oldest" },
                      ]}
                      value={filter} //초기값됴
                      onChange={onChangeOrder}
                      sx={{
                        fontSize: [1, 2],
                        lineHeight: "26px",
                        padding: "6px 12px",
                        color: "black90",
                        width: ["96px", "120px"],
                        height: ["32px", "40px"],
                      }}
                    />
                  </Flex>
                  <Box
                    sx={{
                      width: "100%",
                      display: ["flex", "grid"],
                      flexDirection: "column",
                      gap: ["8px", "24px"],
                      gridTemplateColumns: "repeat(4, calc(25% - 18px))",
                      pt: 3,
                    }}
                  >
                    {supports.isSuccess && supports.data.pages
                      ? supports.data.pages.map((datas, page_num) => {
                          const support = datas!.supports
                          return support.map((sup: any, idx: number) => {
                            if (page_num == supports.data.pages.length - 1 && support.length - 1 == idx) {
                              return <SupportCard ref={ref} key={support._id} {...sup} />
                            } else {
                              return <SupportCard key={support._id} {...sup} />
                            }
                          })
                        })
                      : null}
                    {supports.isFetching && (
                      <>
                        <SkeletonSupportCard />
                        <SkeletonSupportCard />
                        <SkeletonSupportCard />
                        <SkeletonSupportCard />
                      </>
                    )}
                  </Box>
                </Box>
              </Panel>
            </TabsContainer>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, locale, locales }) => {
  const { pid } = query
  if (locale == "default") {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      pid,
      ...(await serverSideTranslations(locale!, ["common", "maker"])),
    },
  }
}
