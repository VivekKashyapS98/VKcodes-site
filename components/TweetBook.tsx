import nodejs from "../sources/logos/node-js.svg";
import expressjs from "../sources/logos/express.svg";
import react from "../sources/logos/react.svg";
import mongodb from "../sources/logos/mongodb.svg";
import materialui from "../sources/logos/material-ui.svg";
import TB1 from "../sources/images/tb1.png";
import TB2 from "../sources/images/tb2.png";
import TB3 from "../sources/images/tb3.png";
import TB4 from "../sources/images/tb4.png";
import Image from "next/image";
import Head from "next/head";

export default function TweetBook() {
  return (
    <>
      <Head>
        <title>TweetBook | VKcodes</title>
        <meta property="og:title" content="TweetBook | VKcodes" key="title" />
        <meta
          name="description"
          content="TweetBook by VKcodes is a social media clone."
          key="description"
        />
      </Head>
      <h1 className="main-heading font-semibold text-center">TweetBook</h1>
      <br />
      <p className="text-lg text-center md:text-xl">
        A Social media clone. Post some tweets and follow others. Also view your
        followers and notifications.
      </p>
      <br />

      <h3 className="sub-heading text-center">Tools & Technologies</h3>
      <div className="flex flex-row flex-wrap justify-around">
        <div className="flex flex-row flex-wrap items-center">
          <h2 className="text-lg font-semibold md:text-xl text-center">
            Front-end:
          </h2>
          <div className="flex flex-row flex-wrap justify-center">
            <div className="m-4 flex flex-col justify-center items-center">
              <Image
                className="rounded-md"
                src={react}
                height={45}
                width={45}
                alt="ReactJS"
              />
              <p>ReactJS</p>
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
                src={nodejs}
                height={45}
                width={45}
                alt="NodeJS"
              />
              <p>NodeJS</p>
            </div>
            <div className="m-4 flex flex-col justify-center items-center">
              <Image
                className="bg-white rounded-md"
                src={expressjs}
                height={45}
                width={45}
                alt="ExpressJS"
              />
              <p>ExpressJS</p>
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
            src={TB1}
            height="1000"
            width="1700"
            placeholder="blur"
            alt="TwetBook 1"
          />
          <h3 className="text-center font-semibold">Welcome Page</h3>
        </div>
        <div className="mb-4 rounded-lg md:mb-8 ring-2 ring-gray-400">
          <Image
            src={TB2}
            height="1000"
            width="1700"
            placeholder="blur"
            alt="TwetBook 2"
          />
          <h3 className="text-cente font-semiboldr">Home page (Tweets)</h3>
        </div>

        <div className="mb-4 rounded-lg md:mb-8 ring-2 ring-gray-500">
          {" "}
          <Image
            src={TB3}
            height="1000"
            width="1700"
            placeholder="blur"
            alt="TwetBook 3"
          />
          <h3 className="text-center font-semibold">Notifications</h3>
        </div>

        <div className="mb-4 rounded-lg md:mb-8 ring-2 ring-gray-500">
          <Image
            src={TB4}
            height="1000"
            width="1700"
            placeholder="blur"
            alt="TwetBook 4"
          />
          <h3 className="text-center font-semibold">Profile</h3>
        </div>
      </div>
    </>
  );
}
