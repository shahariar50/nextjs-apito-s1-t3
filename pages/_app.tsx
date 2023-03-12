import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
