import Image from "next/image";
import Link from "next/link";
import { particle } from "../utils/exportImages";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:flex lg:justify-around lg:flex-row mt-20">
        <div className="text-white text-3xl sm:max-w-2xl sm:flex sm:flex-col sm:items-left mb-4">
          <div>
            <p>Hello there.</p>
            <p>
              I’m Rawand, a passionate web developer who enjoys trying new
              things and challenges.
            </p>
          </div>
          <Link href="/work">
            <a className="bg-white border-2 text-black hover:bg-black hover:text-white font-medium py-1 px-4 hover-transition duration-300 rounded-sm w-36 mt-4 text-2xl">
              Projects
            </a>
          </Link>
        </div>
        <Image
          src="https://i.imgur.com/LhEB9x9.jpeg"
          alt="avatar"
          className="rounded-full"
          width={400}
          height={400}
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center opacity-30 mb-20">
        <Image src={particle} alt="particle" />
      </div>
      <Testimonials />
    </>
  );
}
