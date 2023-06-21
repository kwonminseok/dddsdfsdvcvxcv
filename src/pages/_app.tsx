import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeUIProvider } from "@libs/css/theme-provider"
import { theme } from "@styles/theme"
import DefaultLayout from "./layout"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeUIProvider>
  )
}
