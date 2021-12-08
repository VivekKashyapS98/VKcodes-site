import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Projects from "../components/Projects";
import introPic from "../sources/svg/developer_activity.svg";
import Social from "./Social";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>VKcodes</title>
        <meta property="og:title" content="VKcodes" key="title" />
        <meta
          name="description"
          content="Coding, Programing, Designing, etc."
          key="description"
        />
      </Head>
      <section className="hero rounded-lg min-h-screen bg-gray-100 dark:bg-gray-700">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <Image
            className="max-w-sm rounded-lg shadow-2xl"
            src={introPic}
            height={450}
            width={450}
            alt="Vivek S"
          />
          <div>
            <h1 className="text-4xl sm:text-5xl font-mono">
              Hi!..
              <br />
              I&apos;m Vivek...
            </h1>
            <h3 className="text-lg inline font-medium">A Web Developer...</h3>
          </div>
        </div>
      </section>
      <br />
      <section className="mx-4 md:mx-0 text-center">
        <h1 className="main-heading my-3">About Me</h1>
        <p className="my-3 mx-3 md:mx-10">
          A Full stack Developer and a Geek with exceptional knowledge and
          experience in the Industry leading technologies. Not just a mere user
          of the tools and technologies, but also understanding the context,
          analysing the problem and figuring out the most appropriate solution.
          Having worked on ERP website, E-commerce and other interesting
          projects along with many talented engineers has been a great
          experience in gaining the Industry knowledge and developing a wide
          vision on things.
        </p>
        <Button onClick={() => router.push("/skills")}>
          <h3 className="inline"> Industry Skills</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Button>
      </section>
      <br />
      <hr />
      <br />
      <section className="mx-4 md:mx-0">
        <Projects />
      </section>
      <br />
      <hr />
      <br />
      <section className="mx-4 md:mx-0">
        <Social />
      </section>
      <br />
    </div>
  );
}
