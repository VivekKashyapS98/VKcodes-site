import Image from "next/image";
import mongodb from "../sources/logos/mongodb.svg";
import postgresql from "../sources/logos/postgresql.svg";

export default function DatabaseLogos() {
  return (
    <div>
      <h2 className="text-2xl text-center">Databases</h2>
      <br />
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
        <div className="m-4 flex flex-col justify-center items-center">
          <Image
            className="rounded-md"
            src={postgresql}
            height={45}
            width={45}
            alt="PostgreSQL"
          />
          <p>PostgreSQL</p>
        </div>
      </div>
    </div>
  );
}
