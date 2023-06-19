import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeUIProvider } from "@libs/css/theme-provider";
import { theme } from "@styles/theme";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
