import Image from "next/image";
import flutter from "../sources/logos/flutter.svg";
import reactnative from "../sources/logos/react.svg";

export default function DatabaseLogos() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center">Mobile</h2>
      <br />
      <div className="flex flex-row flex-wrap justify-center">
        <div className="m-4 flex flex-col justify-center items-center">
          <Image
            className="rounded-md"
            src={flutter}
            height={45}
            width={45}
            alt="Flutter"
          />
          <p>Flutter</p>
        </div>
        <div className="m-4 flex flex-col justify-center items-center">
          <Image
            className="rounded-md"
            src={reactnative}
            height={45}
            width={45}
            alt="React Native"
          />
          <p>React Native</p>
        </div>
      </div>
    </div>
  );
}
