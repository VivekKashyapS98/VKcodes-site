import { useRouter } from "next/router";
import Link from "next/link";
import Toggle from "./Toggle";

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
      <div className="container m-auto dark:text-gray-100">
        <div className="h-20 flex flex-row px-4 justify-between items-center">
          <h1
            className="text-3xl md:text-4xl cursor-pointer"
            onClick={() => router.push("/")}
          >
            VKcodes
          </h1>
          <nav className="flex flex-row flex-nowrap">
            <Toggle toggle={toggle} />
            <Link href="/" passHref>
              <h3
                className={`m-1 py-1 px-2 md:py-2 md:px-4 transition-gpu delay-100 duration-100 ${homeBorder} border-purple-500 cursor-pointer`}
              >
                Home
              </h3>
            </Link>
            <Link href="/blog" passHref>
              <h3
                className={`m-1 py-1 px-2 md:py-2 md:px-4 transition-gpu delay-100 duration-100 ${blogBorder} border-purple-500 cursor-pointer`}
              >
                Blog
              </h3>
            </Link>
          </nav>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
