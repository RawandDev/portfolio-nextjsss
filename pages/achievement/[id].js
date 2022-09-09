import React from "react";
import data from "../../utils/data.json";
import Image from "next/image";
import reactReplace from "react-string-replace";

export async function getStaticProps({ params }) {
  const { id } = params;
  const about = data.find((item) => item.id === id);
  return {
    props: {
      about,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: data.map((item) => ({ params: { id: item.id } })),
    fallback: false,
  };
}

function AchievementDetail({ about }) {
  return (
    <div className="text-black dark:text-white flex flex-col justify-center items-center mt-10 lg:text-center">
      <h1 className="font-bold text-2xl mt-10">{about?.title}</h1>
      <span className="text-sm mb-4">{about?.date}</span>
      <p className="max-w-4xl font-medium text-lg">
        {reactReplace(about?.content, "Libvery", (match, i) => (
          <a
            className="underline text-blue-600"
            href="https://libvery.netlify.app"
            key={i}
          >
            {match}
          </a>
        ))}
      </p>
      {about?.images?.map((image, index) => (
        <Image
          src={image.src}
          width={600}
          height={400}
          objectFit="contain"
          alt={about.alt}
          key={index}
        />
      ))}
    </div>
  );
}

export default AchievementDetail;
