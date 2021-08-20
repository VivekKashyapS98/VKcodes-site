import Head from "next/head";
import Image from "next/image";
import BackendLogos from "../components/BackendLogos";
import DatabaseLogos from "../components/DatabaseLogos";
import FrontendLogos from "../components/FrontendLogos";
import PreferedStack from "../components/PreferedStack";
import Projects from "../components/Projects";
import introPic from "../sources/svg/developer_activity.svg";
import Social from "./Social";

export default function Home() {
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
      <section className="mt-0 md:mt-4 w-full font-semibold flex flex-row flex-wrap-reverse justify-around items-center p-2 bg-gray-100 rounded-lg md:p-5 md:h-[600px] dark:bg-gray-700">
        <Image src={introPic} height={450} width={450} alt="Vivek S" />
        <div>
          <h1 className="text-4xl sm:text-5xl font-mono">
            Hi!..
            <br />
            I&apos;m Vivek...
          </h1>
          <h3 className="text-lg inline font-medium">A Web Developer...</h3>
        </div>
      </section>
      <br />
      <hr />
      <br />
      <section className="mx-4 md:mx-0">
        <h1 className="main-heading">Skills</h1>
        <br />
        <FrontendLogos />
        <br />
        <hr className="w-3/5 mx-auto" />
        <br />
        <BackendLogos />
        <br />
        <hr className="w-3/5 mx-auto" />
        <br />
        <DatabaseLogos />
        <br />
        <hr className="w-3/5 mx-auto" />
        <br />
        <PreferedStack />
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
