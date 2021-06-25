import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";
import { ThemeContext } from "../utils/context";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <Layout>
      <ThemeContext.Provider value={{ toggleTheme }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </Layout>
  );
}
export default MyApp;
