import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const getSupportInfo = async (pid: string) => {
  try {
    const res = await instance.get(`/api/supports/${pid}`)
    return res.data
  } catch (error) {
    console.log("get support info api error")
  }
}

const getSupportList = async (page: number, count = 10, param = "", sorted = "createAt", order = -1) => {
  try {
    const res = await instance.get(`/api/supports?page=${page}&count=${count}&sorted=${sorted}&order=${order}`)

    return res.data
  } catch (error) {
    console.log("get support list api error")
  }
}

const getMemberlist = async (pid: string, page: number, count = 10, param = "", sorted = "createAt", order = -1) => {
  try {
    const res = await instance.get(
      `/api/supports/${pid}/nfts?page=${page}&count=${count}&sorted=${sorted}&order=${order}`,
    )

    return res.data
  } catch (error) {
    console.log("get member list api error")
  }
}

export { getSupportInfo, getSupportList, getMemberlist }
