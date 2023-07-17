import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const getMakerList = async (page: number, count = 10, param = "", sorted = "createAt", order = -1) => {
  try {
    const res = await instance.get(`/api/makers?page=${page}&count=${count}&sorted=${sorted}&order=${order}`)
    return res.data
  } catch (error) {
    console.log("getMakerList api error")
  }
}

const getMakerInfo = async (pid: string) => {
  try {
    const res = await instance.get(`/api/makers/${pid}?page=1&count=10&sort=createdAt&order=-1`)
    return res.data
  } catch (error) {
    console.log("get maker info api error")
  }
}

const getMakerSupportList = async (pid: string, page: number, count = 10, sorted = "createAt", order = -1) => {
  try {
    const res = await instance.get(`/api/makers/${pid}?page=${page}&count=${count}&sort=${sorted}&order=${order}`)
    return res.data
  } catch (error) {
    console.log("maker support list api error")
  }
}

export { getMakerInfo, getMakerList, getMakerSupportList }
