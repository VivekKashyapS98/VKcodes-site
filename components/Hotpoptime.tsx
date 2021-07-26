import tailwind from "../sources/logos/tailwindcss.svg";
import next from "../sources/logos/next-js.svg";
import HPT1 from "../sources/images/HPTv2.0_1.png";
import HPT2 from "../sources/images/HPTv2.0_2.png";
import HPT3 from "../sources/images/HPTv2.0_3.png";
import HPT4 from "../sources/images/HPTv2.0_4.png";
import Head from "next/head";
import Image from "next/image";

export default function Hotpoptime() {
  return (
    <>
      <Head>
        <title>HOTPOPTIME | VKcodes</title>
        <meta property="og:title" content="HOTPOPTIME | VKcodes" key="title" />
        <meta
          name="description"
          content="Hotpoptime by VKcodes is a Movie/TV app with the most friendly Interface ever."
          key="description"
        />
      </Head>
      <h1 className="main-heading font-semibold text-center">HOTPOPTIME</h1>
      <br />
      <p className="text-lg text-center md:text-xl">
        A perfect place for Movie/TV seekers. Explore the wide variety of Movies
        and TV shows. Ease through the most friendly Interface ever.
      </p>
      <br />

      <h3 className="sub-heading text-center">Tools & Technologies</h3>
      <div className="m-2 flex flex-row flex-wrap justify-around">
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
              src={tailwind}
              height={45}
              width={45}
              alt="TailwindCSS"
            />
            <p>TailwindCSS</p>
          </div>
        </div>
      </div>
      <br />

      <h3 className="sub-heading text-center">Pictures</h3>
      <div className="flex flex-col justify-center">
        <div className="mb-4 rounded-lg md:mb-8 ring-2 ring-gray-400">
          <Image
            src={HPT1}
            height="1000"
            width="1700"
            placeholder="blur"
            alt="Hotpoptime 1"
          />
          <h3 className="text-center font-semibold">Explore Movies</h3>
        </div>
        <div className="mb-4 rounded-lg md:mb-8 ring-2 ring-gray-400">
          <Image
            src={HPT2}
            height="1000"
            width="1700"
            placeholder="blur"
            alt="Hotpoptime 1"
          />
          <h3 className="text-center font-semibold">View Movie Details</h3>
        </div>
        <div className="mb-4 rounded-lg md:mb-8 ring-2 ring-gray-400">
          <Image
            src={HPT3}
            height="1000"
            width="1700"
            placeholder="blur"
            alt="Hotpoptime 1"
          />
          <h3 className="text-center font-semibold">Know the similar ones</h3>
        </div>
        <div className="mb-4 rounded-lg md:mb-8 ring-2 ring-gray-400">
          <Image
            src={HPT4}
            height="1000"
            width="1700"
            placeholder="blur"
            alt="Hotpoptime 1"
          />
          <h3 className="text-center font-semibold">Navigate with ease</h3>
        </div>
      </div>
    </>
  );
}
