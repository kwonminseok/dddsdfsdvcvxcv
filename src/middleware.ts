import { NextRequest, NextResponse } from "next/server"

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  if (req.nextUrl.href == req.nextUrl.origin + "/") {
    //기본페이지. 이때는 언어를 세팅해줘야한다
    console.log("기본페이지")
    const locale =
      req.cookies.get("lang")?.value ||
      req.headers.get("accept-language")?.split(",")?.[0].split("-")?.[0].toLowerCase() ||
      "en"
    const available = ["ko", "en"]
    if (available.includes(locale)) {
      return NextResponse.redirect(new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url))
    } else {
      return NextResponse.redirect(new URL(`/${"en"}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url))
    }
  } else {
    if (req.nextUrl.href == req.nextUrl.origin + req.nextUrl.pathname) {
      console.log("언어 없음")
    } else {
      console.log("언어있음")
    }
  }
  // if (req.nextUrl.locale === "default") {
  //   const locale =
  //     req.cookies.get("lang")?.value ||
  //     req.headers.get("accept-language")?.split(",")?.[0].split("-")?.[0].toLowerCase() ||
  //     "en"
  //   const available = ["ko", "en"]
  //   if (available.includes(locale)) {
  //     return NextResponse.redirect(new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url))
  //   } else {
  //     return NextResponse.redirect(new URL(`/${"en"}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url))
  //   }

  //   // return NextResponse.redirect(new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url))
  // }
}
