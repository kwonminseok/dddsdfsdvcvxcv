import { Flex } from "@components/commons"
import { GetServerSideProps } from "next"
import Login from "@components/login/login"
import LoginLayout from "./layout"
import { useEffect, useLayoutEffect } from "react"
import { useRouter } from "next/router"
import Register from "@components/login/register"
import axios from "axios"
import { userReady } from "@pages/api/users/ready"
import { Axiosinstance } from "@pages/api/users/logincheck"
export default function LoginPages({ next, userInfo }: any) {
  const router = useRouter()
  useEffect(() => {
    if (next == "SignIn") {
      // window.history.replaceState({}, null, "/")
      router.push("/", undefined, { shallow: true })
    }
  }, [])
  return (
    <Flex
      as="main"
      sx={{
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Flex sx={{ bg: "black05", borderRadius: [0, "6px"], boxShadow: ["none", "floody3"], my: 2 }}>
        {next === "notRegisted" ? <Register userInfo={userInfo} /> : <Login />}
      </Flex>
    </Flex>
  )
}

LoginPages.layout = LoginLayout

interface IUserInfoProps {
  email?: string
  provider?: string
  token?: string
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { next = "", provider = "", token = "" } = context.query

  const userInfo: IUserInfoProps = {}

  if (next == "notRegisted") {
    if (token !== "") {
      //
      try {
        const res = await userReady(token as string)

        if (res) {
          const { status, data } = res
          if (status === 200) {
            if (data.message == "PRE_USER_EXIST") {
              userInfo.email = data.data.preUser.email
              userInfo.provider = data.data.preUser.loginType
              userInfo.token = data.data.preUser.token
            }
          }
        }
      } catch (e) {
        console.log("not registered error")
      }
    }
  } else if (next == "SignIn") {
    console.log("SignIn")
    if (token !== "") {
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
