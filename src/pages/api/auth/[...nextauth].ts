import NextAuth, { NextAuthOptions, User } from "next-auth"
import KakaoProvider from "next-auth/providers/kakao"
import GoogleProvider from "next-auth/providers/google"
import NaverProvider from "next-auth/providers/naver"
import TwitterProvider from "next-auth/providers/twitter"
import axios from "axios"
// import { JWT } from "next-auth/jwt";
// import { userLogin, TSocial } from "../user/use-login";
import { TSocial } from "../users/login"
import { userLogin } from "../users/login"

export const authOptions: NextAuthOptions = {
  // your configs
  // const dispatch = useDispatch()

  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: "2.0",
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      // console.log('token',token)
      // console.log('account',accunt)
      // console.log('profile',profile)
      token.accessToken = account?.access_token
      token.provider = account?.provider
      // if(account?.provider === 'google'){
      //     token.accessToken = account.access_token
      //     token.provider = account.provider
      // }
      // if(account?.provider === 'kakao'){
      //     token.accessToken = account.access_token
      //     token.provider = account.provider
      // }
      // if(account?.provider === 'naver') {
      //     token.accessToken = account.access_token
      //     token.provider = account.provider
      // }
      return token
    },
    async session({ session, token }) {
      console.log("async session")
      // provider로 부터 받은 session
      return session
    },
    // async redirect({url, baseUrl}) {
    //     console.log('url입니다요',url)
    //     console.log('baseurl입니다요',baseUrl)
    //     // return baseUrl
    //     return url.startsWith(baseUrl)
    //         ? url
    //         : baseUrl
    //     // return url.startsWith(baseUrl) ? Promise.resolve(url) : Promise.resolve(baseUrl)
    // },
    async signIn({ user, account, profile, email, credentials }) {
      console.log("user ", user)
      console.log("account ", account)
      console.log("profile ", profile)
      console.log("email ", email)

      // console.log("credentials ", credentials)

      try {
        const res = await userLogin(user.email as string, account?.provider as TSocial, account?.access_token as string)
        // const res = await axios.post("/users/login", {
        //   email: user.email as string,
        //   type: account?.provider as TSocial,
        //   access_t: account?.access_token as string,
        // }) //(user.email as string, account?.provider as TSocial, account?.access_token as string)
        console.log(res)
        if (res) {
          const { status, statusText, data } = res

          if (status === 200) {
            if (data.message == "USER_NOT_EXIST") {
              console.log("신규 가입으로")
              return `/login?next=notRegisted&token=${data.data.token}`
            } else if (data.message == "USER_LOGIN") {
              console.log("가입된 회원")
              return `/login?next=SignIn&provider=google&token=${data.data.jwt}`
              // return true
            } else {
              return `/login?nonono`
            }
          } else {
            return "/login"
          }
        } else {
          // 실패
          return `/login`
        }
        // console.log(status)
        // console.log(data)
      } catch (e) {
        console.log("whats error")
        console.log(e)
        return "/login?error=true"
      }
      return false
      // },
    },
  },
}

export default NextAuth(authOptions)

// https://id.wanted.jobs/login?amp_device_id=4mkaiX1uVsMxWtX7lluXQK&service=wanted&before_url=https%3A%2F%2Fwww.wanted.co.kr%2F&client_id=AhWBZolyUalsuJpHVRDrE4Px&redirect_url=https%3A%2F%2Fwww.wanted.co.kr%2Fapi%2Fchaos%2Fauths%2Fv1%2Fcallback%2Fset-token&message_key=userweb_home
// https://id.wanted.jobs/login?amp_device_id=4mkaiX1uVsMxWtX7lluXQK&service=wanted&before_url=https%3A%2F%2Fwww.wanted.co.kr%2F&client_id=AhWBZolyUalsuJpHVRDrE4Px&redirect_url=https%3A%2F%2Fwww.wanted.co.kr%2Fapi%2Fchaos%2Fauths%2Fv1%2Fcallback%2Fset-token&message_key=userweb_home&next=NotRegisteredProvider&provider=google&provider_token=dMWruEGOeJXJHqcq
