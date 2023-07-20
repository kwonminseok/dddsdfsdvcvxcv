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

const getSupportList = async (page: number, count = 10, param = "", sorted = "createdAt", order = -1) => {
  try {
    const res = await instance.get(`/api/supports?page=${page}&count=${count}&sorted=${sorted}&order=${order}`)

    return res.data
  } catch (error) {
    console.log("get support list api error")
  }
}

const getMemberlist = async (pid: string, page: number, count = 10, param = "", sorted = "createdAt", order = -1) => {
  try {
    const res = await instance.get(
      `/api/supports/${pid}/nfts?page=${page}&count=${count}&sorted=${sorted}&order=${order}`,
    )

    return res.data
  } catch (error) {
    console.log("get member list api error")
  }
}

const getMintedSupportInfo = async (pid: string) => {
  try {
    const res = await instance.get(`/api/nfts/${pid}`)
    return res.data
  } catch (error) {
    console.log("get Minted Support info api error")
  }
}

const issueSupport = async (cookie: string, supportId: string, password: string) => {
  try {
    const res = await instance.get(`/api/mints?supportId=${supportId}&password=${password}`, {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    })
    return res.data
  } catch (error) {
    console.log("get issue support api error ")
  }
}

export { getSupportInfo, getSupportList, getMemberlist, getMintedSupportInfo, issueSupport }
