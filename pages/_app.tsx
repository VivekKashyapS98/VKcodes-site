import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (mode: string) => {
    setTheme(mode);
  };

  return (
    <Layout toggle={toggleTheme} theme={theme}>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
