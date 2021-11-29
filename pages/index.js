import Image from "next/image";
import Work from "../components/Work";
import avatar from "../public/images/avatar.svg";
import particle from "../public/images/particle.svg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:flex lg:justify-around lg:flex-row mt-20">
        <div className="text-white text-3xl sm:max-w-2xl sm:flex sm:items-center mb-4">
          <div>
            <p>Hello there.</p>
            <p>
              I’m Rawand, a passionate web developer who enjoys trying new
              things and challenges.
            </p>
          </div>
        </div>
        <Image src={avatar} alt="avatar" className="rounded-full" />
      </div>
      <div className="flex justify-center opacity-30 mb-20">
        <Image src={particle} alt="particle" />
      </div>
      <Work />
    </>
  );
}
