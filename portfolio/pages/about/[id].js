import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data.json";
import Image from "next/image";

function Details() {
  const router = useRouter();

  const { id } = router.query;

  console.log(router);

  const displayData = data.find((item) => item.id === id);

  const src1 = { src: displayData?.imageURL1 };
  const src2 = { src: displayData?.imageURL2 };

  return (
    <div className="text-white flex flex-col justify-center items-center mt-10 lg:text-center">
      <h1 className="font-bold text-2xl">{displayData?.title}</h1>
      <span className="text-sm mb-4">{displayData?.date}</span>
      <p className="max-w-4xl font-medium text-lg">{displayData?.content}</p>
      {displayData?.imageURL1 && displayData?.imageURL2 && (
        <div>
          <Image
            {...src1}
            width={600}
            height={400}
            objectFit="contain"
            alt="image"
          />
          <Image
            {...src2}
            width={600}
            height={400}
            objectFit="contain"
            alt="image"
          />
        </div>
      )}
    </div>
  );
}

export default Details;
