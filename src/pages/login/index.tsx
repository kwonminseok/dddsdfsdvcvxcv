import { Flex, Box } from "@components/commons"
import { GetServerSideProps } from "next"
import Login from "@components/login/login"
import LoginLayout from "./layout"
import { useEffect, useLayoutEffect } from "react"
import { useRouter } from "next/router"
import Register from "@components/login/register"
import axios from "axios"
import { userRegisterReady } from "@libs/api/user"
import { Axiosinstance } from "@pages/api/users/logincheck"
export default function LoginPages({ next, userInfo }: any) {
  const router = useRouter()
  console.log(userInfo)
  useEffect(() => {
    if (next == "SignIn") {
      // window.history.replaceState({}, null, "/")
      router.push("/", undefined, { shallow: true })
    }
  }, [])
  return (
    <Flex
      as="main"
      sx={{ height: "100vh", width: "100%", justifyContent: "center", alignItems: "center", bg: "black20" }}
    >
      <Flex
        sx={{
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Flex
          sx={{
            bg: "black05",
            borderRadius: [0, "6px"],
            boxShadow: ["none", "floody3"],
            my: 2,
            width: ["100%", "auto"],
          }}
        >
          {next === "notRegisted" ? <Register userInfo={userInfo} /> : <Login />}
        </Flex>
      </Flex>
    </Flex>
  )
}

LoginPages.layout = LoginLayout

interface IUserInfoProps {
  email?: string
  provider?: string
  token?: string
  oauthId?: string
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { next = "", provider = "", token = "" } = context.query

  const userInfo: IUserInfoProps = {}

  if (next == "notRegisted") {
    if (token !== "") {
      //
      try {
        const res = await userRegisterReady(token as string)

        if (res) {
          const { data, message } = res
          console.log(data)
          if (message == "PRE_USER_EXIST") {
            userInfo.email = data.preUser.email
            userInfo.provider = data.preUser.loginType
            userInfo.token = data.preUser.token
            userInfo.oauthId = data.preUser.oauthId
          }
        }
      } catch (e) {
        console.log("not registered error")
      }
    }
  } else if (next == "SignIn") {
    console.log("SignIn")

    if (token !== "") {
      console.log(token)
      context.res.setHeader("Set-Cookie", `ses_23k_xh=${token};Path=/;`)
    }
  }

  return {
    props: {
      next,
      userInfo,
    },
  }
}
