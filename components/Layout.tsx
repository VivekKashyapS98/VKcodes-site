import { useRouter } from "next/router";
import Link from "next/link";
import Toggle from "./Toggle";
import Head from "next/head";

export default function Layout({ toggle, theme, children }: any) {
  const router = useRouter();
  const mode = theme === "dark" ? theme : " ";
  const mainBg = theme === "dark" ? "bg-gray-800" : "";
  const homeBorder = router.pathname === "/" ? "border-b-2  md:border-b-4" : "";
  const blogBorder = router.pathname.includes("/blog")
    ? "border-b-2  md:border-b-4"
    : "";

  return (
    <div
      className={`${mode} w-screen min-h-screen cursor-default text-gray-600 ${mainBg}`}
    >
      <Head>
        <title>VKcodes</title>
        <meta property="og:title" content="VKcodes" key="title" />
        <meta
          name="description"
          content="Coding, Programing, Designing, etc."
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-20 sticky z-10 bg-white top-0 border-b-2 border-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-10 firefox:bg-opacity-70 flex flex-row px-4 justify-between items-center dark:bg-gray-700 dark:firefox:bg-opacity-70 dark:bg-opacity-10 dark:text-gray-100">
        <h1 className="text-2xl font-bold font-mono md:text-4xl">VKcodes</h1>
        <nav className="flex flex-row flex-nowrap">
          <Toggle toggle={toggle} />
          <Link href="/" passHref>
            <h3
              className={`m-1 sm:text-lg py-1 px-2 md:py-2 md:px-4 transition-gpu delay-100 duration-100 ${homeBorder} border-purple-500 cursor-pointer`}
            >
              Home
            </h3>
          </Link>
          <Link href="/blog" passHref>
            <h3
              className={`m-1 sm:text-lg py-1 px-2 md:py-2 md:px-4 transition-gpu delay-100 duration-100 ${blogBorder} border-purple-500 cursor-pointer`}
            >
              Blog
            </h3>
          </Link>
        </nav>
      </header>
      <div className="container m-auto dark:text-gray-100">
        <div>{children}</div>
      </div>
      <footer className="bg-gray-100 flex flex-col dark:bg-gray-700 dark:text-gray-100">
        <h1
          className="text-2xl mt-2 ml-2 md:mt-4 md:ml-4 font-bold font-mono md:text-4xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          VKcodes
        </h1>
        <h3 className="mb-2 md:m-4 text-lg font-semibold text-center sm:text-xl">
          Crafted by <span className="text-purple-500">Vivek Kashyap</span>
        </h3>
        <h3 className="text-sm text-center sm:text-base">
          © All Rights Reserved {new Date().getFullYear()}
        </h3>
      </footer>
    </div>
  );
}
