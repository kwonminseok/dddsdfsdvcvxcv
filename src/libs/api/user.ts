import axios from "axios"

const instance = axios.create({
  baseURL: "/",
})

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export type TSocial = "kakao" | "google" | "naver" | "twitter"

export interface IRegisterProps {
  loginType: TSocial
  email?: string
  nickname: string
  token?: string
  oauthId?: string
}

const loginCheck = async (cookie: string) => {
  try {
    const res = await axiosInstance.get(`/api/users/me`, {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    })
    return res.data
  } catch (error) {
    console.log("logincheck api error")
    throw error
  }
}

const getUserBasicInfo = async (cookie: string) => {
  try {
    const res = await axiosInstance.get(`/api/users`, {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    })
    return res.data
  } catch (error) {
    console.log("getUserBasicInfo api error")
    throw error
  }
}

const userLogin = async (_id: string, email: string, type: TSocial, access_t: string) => {
  try {
    const res = await axiosInstance.post(`api/users/login`, {
      oauthId: _id,
      email: email,
      loginType: type.toUpperCase(),
      accessToken: access_t,
    })
    return res
  } catch (error) {
    console.log("userlogin api error")
    throw error
  }
}

const userRegisterReady = async (token: string) => {
  try {
    const res = await axiosInstance.get(`api/users/ready/${token}`)
    return res.data
  } catch (error) {
    console.log("register user Ready api error")
    throw error
  }
}

const userRegister = async (data: IRegisterProps) => {
  try {
    const res = await axiosInstance.post(`/api/users/signup`, data)

    return res.data
  } catch (error) {
    console.log("userRegister api error")
    throw error
  }
}

export { getUserBasicInfo, userLogin, loginCheck, userRegisterReady, userRegister }
