import typescript from "../sources/logos/typescript.svg";
import next from "../sources/logos/next-js.svg";
import mongodb from "../sources/logos/mongodb.svg";
import materialui from "../sources/logos/material-ui.svg";
import VIA1 from "../sources/images/via_1.png";
import Image from "next/image";
import Head from "next/head";
import ImportantNote from "./ImportantNote";
import Button from "./Button";

export default function VoidIsAll() {
  return (
    <>
      <Head>
        <title>VoidIsAll | VKcodes</title>
        <meta property="og:title" content="VodIsAll | VKcodes" key="title" />
        <meta
          name="description"
          content="VoidIsAll by VKcodes is a place where ancient spiritual wisdom is decoded in
          straight practical and perceivable way."
          key="description"
        />
      </Head>
      <h1 className="main-heading font-semibold text-center">VoidIsAll</h1>
      <br />
      <p className="text-lg text-center md:text-xl">
        This is a place for those who are intrested in or into Spirituality.
        VoidIsAll is a place where ancient spiritual wisdom is decoded in
        straight practical and perceivable way.
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
                src={materialui}
                height={45}
                width={45}
                alt="MaterialUI"
              />
              <p>MaterialUI</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center">
          <h2 className="text-lg font-semibold md:text-xl text-center">
            Back-end:
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
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center">
          <h2 className="text-lg font-semibold md:text-xl text-center">
            Database:
          </h2>
          <div className="flex flex-row flex-wrap justify-center">
            <div className="m-4 flex flex-col justify-center items-center">
              <Image
                className="rounded-md"
                src={mongodb}
                height={45}
                width={45}
                alt="MongoDB"
              />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="sub-heading text-center">Pictures</h3>
      <div className="flex flex-col justify-center">
        <div className="mb-4 rounded-lg md:mb-8 ring-2 ring-gray-400">
          <Image
            src={VIA1}
            height="1000"
            width="1700"
            placeholder="blur"
            alt="VoidIsAll 1"
          />
          <h3 className="text-center font-semibold">Welcome Page</h3>
        </div>
      </div>
      <br />
      <a
        className="flex justify-around"
        href="https://voidisall.vercel.app/"
        rel="noreferrer"
        target="_blank"
      >
        <Button>Visit VoidIsAll</Button>
      </a>
      <br />
      <ImportantNote>
        This is a serious project which is intended for the real audience
        (spiritual seekers). So, for more information, please visit the site.
      </ImportantNote>
    </>
  );
}
