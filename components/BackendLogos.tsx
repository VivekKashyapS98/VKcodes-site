import Image from "next/image";
import nodejs from "../sources/logos/node-js.svg";
import expressjs from "../sources/logos/express.svg";
import golang from "../sources/logos/golang.svg";
import gofiber from "../sources/logos/goFiber.svg";
import flask from "../sources/logos/flask.svg";
import gin from "../sources/logos/gin.png";

export default function BackendLogos() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center">Back-end</h2>
      <br />
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
            src={gin}
            height={45}
            width={45}
            alt="Gin"
          />
          <p>Gin</p>
        </div>
        <div className="m-4 flex flex-col justify-center items-center">
          <Image
            className="bg-white rounded-md"
            src={gofiber}
            height={45}
            width={45}
            alt="goFiber"
          />
          <p>goFiber</p>
        </div>
        <div className="m-4 flex flex-col justify-center items-center">
          <Image
            className="bg-white rounded-md"
            src={flask}
            height={45}
            width={45}
            alt="Flask"
          />
          <p>Flask</p>
        </div>
      </div>
    </div>
  );
}
