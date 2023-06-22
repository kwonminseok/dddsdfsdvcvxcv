import "@/styles/globals.css"
import Head from "next/head"
import type { AppProps } from "next/app"
import { ThemeUIProvider } from "@libs/css/theme-provider"
import { theme } from "@styles/theme"
import DefaultLayout from "./layout"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,minimum-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <ThemeUIProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeUIProvider>
    </>
  )
}
