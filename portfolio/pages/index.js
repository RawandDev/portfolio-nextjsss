import Image from "next/image";
import avatar from "../public/images/avatar.svg";
import particle from "../public/images/particle.svg";

export default function Home() {
  return (
    <>
      <div className="text-center sm:flex sm:justify-around mt-20">
        <div className="text-white text-3xl sm:max-w-2xl sm:flex sm:items-center mb-4">
          <div>
            <p>Hello there.</p>
            <p>
              I’m Rawand, a passionate web developer who enjoys trying new
              things and challenges.
            </p>
          </div>
        </div>
        <Image src={avatar} className="rounded-full" />
      </div>
      <div className="flex justify-center opacity-30">
        <Image src={particle} />
      </div>
    </>
  );
}
