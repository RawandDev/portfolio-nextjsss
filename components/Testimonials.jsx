import React from "react";
import Image from "next/image";
import testimonials from "../utils/testimonials.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Testimonials() {
  return (
    <div className="mb-10">
      <h1 className="text-4xl text-white sm:text-8xl font-extrabold opacity-30">
        <span className="text-secondary">.</span>Testimonials
      </h1>
      <Carousel
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        transitionTime={500}
        emulateTouch={true}
        showThumbs={false}
      >
        {testimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center px-5 py-5"
            >
              <div className="w-full mx-auto max-w-xl rounded-lg bg-transparent px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
                <div className="w-full pt-1">
                  <a href="#" className="block relative">
                    <Image
                      alt="profile"
                      src={
                        item.imageURL ||
                        "https://raw.githubusercontent.com/gist/RawandDev/9c5e970c219b18d066df0410f03868ba/raw/a0e0fe42fdc24b6574d8e27c719197872d5279c0/placeholder.svg"
                      }
                      width={125}
                      height={125}
                      className="object-cover rounded-full"
                    />
                  </a>
                </div>
                <div className="w-full mb-10">
                  <div className="text-3xl text-secondary text-left leading-tight h-3">
                    “
                  </div>
                  <p className="text-sm text-white dark:text-gray-100 text-center px-5">
                    {item.testimonial}
                  </p>
                  <div className="text-3xl text-secondary text-right leading-tight h-3 -mt-3">
                    ”
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-md text-secondary font-bold text-center">
                    {item.name}
                  </p>
                  <p className="text-xs text-white dark:text-gray-300 text-center">
                    {item.title}
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="mr-4">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src="/images/github.svg" width={25} height={25} />
                    </a>
                  </div>
                  <div>
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/linkedin.svg"
                        width={25}
                        height={25}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Testimonials;
