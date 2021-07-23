import Image from "next/image";
import { useRouter } from "next/router";
import HPT from "../sources/images/hpt_logo.jpg";
import TB from "../sources/images/tb_logo.jpeg";
import VIA from "../sources/images/via_logo.jpg";
import Button from "./Button";

export default function Projects() {
  const router = useRouter();
  return (
    <>
      <h1 className="main-heading">Projects</h1>
      <div className="flex flex-row flex-wrap justify-around">
        <Image
          className="rounded-3xl"
          src={TB}
          height="300"
          width="300"
          placeholder="blur"
          alt="TwetBook"
        />
        <div className="max-w-sm m-2 md:m-4">
          <h1 className="sub-heading text-center  my-2 md:my-4 font-semibold">
            TweetBook
          </h1>
          <p className="text-lg md:text-xl">
            A Social media clone. Post some tweets and follow others. Also view
            your followers and notifications.
          </p>
          <br />
          <Button onClick={() => router.push("/projects/1")}>
            <>
              {" "}
              <h3 className="inline">Know More</h3>
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
            </>
          </Button>
        </div>
      </div>
      <hr className="w-4/5 mx-auto my-2 md:my-4" />
      <div className="flex flex-row flex-wrap-reverse justify-around">
        <div className="max-w-sm m-2 md:m-4">
          <h1 className="sub-heading text-center  my-2 md:my-4 font-semibold">
            HOTPOPTIME
          </h1>
          <p className="text-lg md:text-xl">
            A perfect place for Movie/TV geeks. Explore the wide variety of
            Movies and TV shows. Ease through the most friendliest Interface
            ever.
          </p>
          <br />
          <Button onClick={() => router.push("/projects/2")}>
            <>
              {" "}
              <h3 className="inline">Know More</h3>
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
            </>
          </Button>
        </div>
        <Image
          className="rounded-3xl"
          src={HPT}
          height="300"
          width="300"
          placeholder="blur"
          alt="HOTPOPTIME"
        />
      </div>
      <hr className="w-4/5 mx-auto my-2 md:my-4" />
      <div className="flex flex-row flex-wrap justify-around">
        <Image
          className="rounded-3xl"
          src={VIA}
          height="300"
          width="300"
          placeholder="blur"
          alt="TwetBook"
        />
        <div className="max-w-sm m-2 md:m-4">
          <h1 className="sub-heading text-center  my-2 md:my-4 font-semibold">
            VoidIsAll
          </h1>
          <p className="text-lg md:text-xl">
            This is a place for those who are intrested in or into Spirituality.
            VoidIsAll is a place where ancient spiritual wisdom is decoded in
            straight practical and perceivable way.
          </p>
          <br />
          <Button onClick={() => router.push("/projects/3")}>
            <>
              {" "}
              <h3 className="inline">Know More</h3>
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
            </>
          </Button>
        </div>
      </div>
    </>
  );
}
