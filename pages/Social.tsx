import Image from "next/image";
import linkedin from "../sources/logos/linkedin.svg";
import github from "../sources/logos/github.svg";
import twitter from "../sources/logos/twitter.svg";
import instagram from "../sources/logos/instagram.svg";
import facebook from "../sources/logos/facebook.svg";
import gmail from "../sources/logos/gmail.svg";

export default function Social() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-center main-heading">Get in touch</h3>
      <div className="m-2 px-2 maz-w max-w-lg flex flex-row flex-wrap justify-center rounded-full bg-purple-100 dark:bg-gray-700">
        <a
          href="https://www.linkedin.com/in/vivek-kashyap-886bb5144/"
          rel="noreferrer"
          target="_blank"
          className="m-2 md:m-4 flex flex-col justify-center items-center animate-wiggle hover:animate-none"
        >
          <Image
            className="rounded-md"
            src={linkedin}
            height={30}
            width={30}
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/VivekKashyapS98"
          rel="noreferrer"
          target="_blank"
          className="m-2 md:m-4 flex flex-col justify-center items-center animate-wiggle hover:animate-none"
        >
          <Image
            className="rounded-md"
            src={github}
            height={30}
            width={30}
            alt="GitHub"
          />
        </a>
        <a
          href="https://twitter.com/Vivek_S98/"
          rel="noreferrer"
          target="_blank"
          className="m-2 md:m-4 flex flex-col justify-center items-center animate-wiggle hover:animate-none"
        >
          <Image
            className="rounded-md"
            src={twitter}
            height={30}
            width={30}
            alt="Twitter"
          />
        </a>
        <a
          href="https://www.instagram.com/vivek.kashyap.s/"
          rel="noreferrer"
          target="_blank"
          className="m-2 md:m-4 flex flex-col justify-center items-center animate-wiggle hover:animate-none"
        >
          <Image
            className="rounded-md"
            src={instagram}
            height={30}
            width={30}
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.facebook.com/vivek.kashyap.5492216"
          rel="noreferrer"
          target="_blank"
          className="m-2 md:m-4 flex flex-col justify-center items-center animate-wiggle hover:animate-none"
        >
          <Image
            className="rounded-md"
            src={facebook}
            height={30}
            width={30}
            alt="Facebook"
          />
        </a>
        <a
          href="mailto:vivekyeskashyap@gmail.com"
          rel="noreferrer"
          target="_blank"
          className="m-2 md:m-4 flex flex-col justify-center items-center animate-wiggle hover:animate-none"
        >
          <Image
            className="rounded-md"
            src={gmail}
            height={30}
            width={30}
            alt="Gmail"
          />
        </a>
      </div>
      <p>DM me on LinkedIn for fast response</p>
    </div>
  );
}
