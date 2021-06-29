import Image from "next/image";
import nextjs from "../sources/logos/next-js.svg";
import typescript from "../sources/logos/typescript.svg";
import golang from "../sources/logos/golang.svg";
import mongodb from "../sources/logos/mongodb.svg";

export default function PreferedStack() {
  return (
    <div>
      <h2 className="text-2xl text-center">Prefered Stack</h2>
      <br />
      <div className="flex flex-row flex-wrap justify-center">
        <div className="m-4 flex flex-col justify-center items-center">
          <Image
            className="rounded-md"
            src={nextjs}
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
            alt="Typescript"
          />
          <p>Typescript</p>
        </div>
        <div className="m-4 flex flex-col justify-center items-center">
          <Image
            className="rounded-md"
            src={golang}
            height={45}
            width={45}
            alt="Go"
          />
          <p>Go</p>
        </div>
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
  );
}
