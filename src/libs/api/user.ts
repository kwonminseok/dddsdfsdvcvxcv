import axios from "axios"

const instance = axios.create({
  baseURL: "/",
})

export const loginCheck = async () => {
  try {
    const res = instance.get("/api/users/logincheck", {
      headers: {
        Authorization: `Bearer sdf123`,
      },
    })
    return res
  } catch (err) {
    return "error"
  }
}
