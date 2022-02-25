import React from "react";
import data from "../../utils/data.json";
import Image from "next/image";

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
      {about?.date}: {about?.brief}
      <h1 className="font-bold text-2xl">{about?.title}</h1>
      <span className="text-sm mb-4">{about?.date}</span>
      <p className="max-w-4xl font-medium text-lg">{about?.content}</p>
      {about?.imageURL1 && about?.imageURL2 && (
        <div>
          <Image
            src={about?.imageURL1}
            width={600}
            height={400}
            objectFit="contain"
            alt={about?.title}
          />
          <Image
            src={about?.imageURL2}
            width={600}
            height={400}
            objectFit="contain"
            alt={about?.title}
          />
        </div>
      )}
    </div>
  );
}

export default AchievementDetail;
