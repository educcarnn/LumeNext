import "../styles/globals.css";
import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider  attribute="class">
      <Navbar/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
