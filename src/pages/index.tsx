import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import { Box, Flex } from "@components/commons"
import ImageWrapper from "@components/imageWrapper"
import Link from "next/link"
import CardImageWrapper from "@components/profile/card-image-wrapper"
import { LuUser } from "react-icons/lu"
import { SupportCard } from "@components/profile"
import Skeleton from "@components/commons/Skeleton"
import SkeletonSupportCard from "@components/profile/skeleton-support-card"
import LogoSmall from "@/assets/icons/logo-small"
import Logo from "../../public/logosmall.svg"
import { TabsContainer, TabList, Tab } from "@components/commons/Tabs/tab"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { GetServerSideProps } from "next"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const { t } = useTranslation()
  console.log(t("title"))
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div>
        <Box>gkdl</Box>
        <TabsContainer defaultActiveKey={"namba1"}>
          <TabList tabsSx={{ mt: 8 }} variant="standard">
            <Tab tabKey="namba1">남바완</Tab>
            <Tab tabKey="namba2">남바투</Tab>
          </TabList>
        </TabsContainer>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, req, locale }) => {
  console.log("server side")
  // const cookies = req.headers.cookie
  // const cookieArray = cookies?.split(";").find(cookie => cookie.trim().startsWith("lang="))
  // const acceptLang = req.headers["accept-language"]?.split(",")?.[0].split("-")?.[0].toLowerCase()
  // let cookie
  // if (cookieArray) {
  //   cookie = cookieArray.split("=")[1]
  // }

  // const locales = cookie || acceptLang || "en"
  // const available = ["ko", "en"]
  // let locale = "en"
  // if (available.includes(locales)) {
  //   locale = locales
  // }
  //console.log(locale, locales)
  //console.log(req.headers.cookie)
  //console.log(req.headers["accept-language"]?.split(",")?.[0].split("-")?.[0].toLowerCase())
  console.log(locale)
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "header"])),
      // locales,
    },
  }
}
