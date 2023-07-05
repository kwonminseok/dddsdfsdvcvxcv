import "@/styles/globals.css"
import Head from "next/head"
import type { AppProps } from "next/app"
import { ThemeUIProvider } from "@libs/css/theme-provider"
import { theme } from "@styles/theme"
import DefaultLayout from "./layout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil"
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  // const Layout = Component.layout || DefaultLayout
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1.0, maximum-scale=1.0" />
      </Head>
      <ThemeUIProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={session}>
            <RecoilRoot>
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </RecoilRoot>
          </SessionProvider>
        </QueryClientProvider>
      </ThemeUIProvider>
    </>
  )
}
