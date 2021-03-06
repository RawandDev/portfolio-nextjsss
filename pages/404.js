import React from "react";
import Image from "next/image";
import Link from "next/link";

function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 darktext-white">
      <h1 className="font-bold text-2xl">Page Not Found</h1>
      <p className="text-lg">
        It looks like the page you are looking for was not found
      </p>
      <button className="mb-10 bg-white text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100 hover:text-black focus:outline-none focus:shadow-outline transition-all duration-300 mt-5">
        <Link href="/">
          <a>Home</a>
        </Link>
      </button>
      <div className="bg-black rounded-full max-w-lg sm:max-w-2xl">
        <Image src="/images/error.svg" alt="error" width={300} height={300} />
      </div>
    </div>
  );
}

export default Custom404;
