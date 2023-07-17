import { loginCheck } from "@libs/api/user"
import axios from "axios"
import { selector, atom } from "recoil"

interface LoginStatus {
  isLoading?: boolean
  isLoggedIn?: boolean
}

const instance = axios.create({
  baseURL: "/",
})

export const loginStatus = atom<LoginStatus>({
  key: "loginstatus",
  default: {
    isLoading: true,
  },
})

export const testStatus = atom({
  key: "test",
  default: 0,
})
