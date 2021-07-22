import Image from "next/image";
import { useRouter } from "next/router";
import HPT from "../sources/images/hpt_logo.jpg";
import Button from "./Button";

export default function Projects() {
  const router = useRouter();
  return (
    <>
      <h1 className="sub-heading text-center my-2 md:my-4 font-semibold">
        HOTPOPTIME
      </h1>
      <div className="flex flex-row flex-wrap-reverse justify-around">
        <div className="max-w-sm m-2 md:m-4">
          <p className="text-lg md:text-xl">
            A perfect place for Movie/TV geeks. Explore the wide variety of
            Movies and TV shows. Ease through the most friendliest Interface
            ever.
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
        <Image
          className="rounded-xl md:rounded-2xl"
          src={HPT}
          height="300"
          width="300"
          placeholder="blur"
          alt="HOTPOPTIME"
        />
      </div>
    </>
  );
}
