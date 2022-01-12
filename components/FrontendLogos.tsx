import Image from "next/image";
import javascript from "../sources/logos/javascript.svg";
import typescript from "../sources/logos/typescript.svg";
import react from "../sources/logos/react.svg";
import next from "../sources/logos/next-js.svg";
import gatsby from "../sources/logos/gatsby.svg";
import svelte from "../sources/logos/svelte.svg";
import bootstrap from "../sources/logos/bootstrap.svg";
import materialui from "../sources/logos/material-ui.svg";
import tailwind from "../sources/logos/tailwindcss.svg";

export default function FrontendLogos() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center">Front-end</h2>
      <br />
      <div className="flex flex-row flex-wrap justify-center">
        <div className="m-4 flex flex-col items-center">
          <Image
            className="rounded-md"
            src={javascript}
            height={45}
            width={45}
            alt="Javascript"
          />
          <p>Javascript</p>
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
            src={svelte}
            height={45}
            width={45}
            alt="Svelte"
          />
          <p>Svelte</p>
        </div>
        <div className="m-4 flex flex-col justify-center items-center">
          <Image
            className="rounded-md"
            src={gatsby}
            height={45}
            width={45}
            alt="GatsbyJS"
          />
          <p>GatsbyJS</p>
        </div>
        <div className="m-4 flex flex-col justify-center items-center">
          <Image
            className="rounded-md"
            src={bootstrap}
            height={45}
            width={45}
            alt="Bootstrap"
          />
          <p>Bootstrap</p>
        </div>
        <div className="m-4 flex flex-col justify-center items-center">
          <Image
            className="rounded-md"
            src={materialui}
            height={45}
            width={45}
            alt="MUI"
          />
          <p>MUI</p>
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
  );
}
