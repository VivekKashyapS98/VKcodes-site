import typescript from "../sources/logos/typescript.svg";
import next from "../sources/logos/next-js.svg";
import tailwind from "../sources/logos/tailwindcss.svg";
import VK1 from "../sources/images/vk_1.png";
import VK2 from "../sources/images/vk_2.png";
import Image from "next/image";
import Head from "next/head";

export default function VKcodes() {
  return (
    <>
      <Head>
        <title>VKcodes | VKcodes</title>
        <meta property="og:title" content="VKcodes | VKcodes" key="title" />
        <meta
          name="description"
          content="TweetBook by VKcodes is a social media clone."
          key="description"
        />
      </Head>
      <h1 className="main-heading font-semibold text-center">VoidIsAll</h1>
      <br />
      <p className="text-lg text-center md:text-xl">
        This is the one which you are in right now. VKcodes is intended to be a
        blog cum Portfolio site.
      </p>
      <br />

      <h3 className="sub-heading text-center">Tools & Technologies</h3>
      <div className="m-2 flex flex-row flex-wrap justify-around">
        <div className="flex flex-row flex-wrap items-center">
          <h2 className="text-lg font-semibold md:text-xl text-center">
            Front-end:
          </h2>
          <div className="flex flex-row flex-wrap justify-center">
            <div className="m-4 flex flex-col justify-center items-center">
              <Image
                className="rounded-md"
                src={next}
                height={45}
                width={45}
                alt="NextJS"
              />
              <p>NextJS</p>
            </div>
            <div className="m-4 flex flex-col justify-center items-center">
              <Image
                className="rounded-md"
                src={typescript}
                height={45}
                width={45}
                alt="typescript"
              />
              <p>Typescript</p>
            </div>
            <div className="m-4 flex flex-col justify-center items-center">
              <Image
                className="rounded-md"
                src={tailwind}
                height={45}
                width={45}
                alt="TailwindCSS"
              />
              <p>TailwindCSS</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="sub-heading text-center">Pictures</h3>
      <div className="flex flex-col justify-center">
        <div className="mb-4 rounded-lg md:mb-8 ring-2 ring-gray-400">
          <Image
            src={VK1}
            height="1000"
            width="1700"
            placeholder="blur"
            alt="VKcodes 1"
          />
          <h3 className="text-center font-semibold">Portfolio</h3>
        </div>

        <div className="mb-4 rounded-lg md:mb-8 ring-2 ring-gray-400">
          <Image
            src={VK2}
            height="1000"
            width="1700"
            placeholder="blur"
            alt="VKcodes 1"
          />
          <h3 className="text-center font-semibold">Dark Mode</h3>
        </div>
      </div>
    </>
  );
}
