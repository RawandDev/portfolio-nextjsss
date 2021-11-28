import React from "react";
import Image from "next/image";
import Link from "next/link";
import team from "../../public/images/team.svg";
import freelancer from "../../public/images/freelancer.svg";
import brush from "../../public/images/brush.svg";
import company from "../../public/images/company.svg";
import rocket from "../../public/images/rocket.png";
import GeneralSkills from "../../components/GeneralSkills";
import data from "../../utils/data.json";

function About() {
  return (
    <div>
      <div className="text-white mt-32">
        <h1 className="text-7xl sm:text-10xl font-extrabold opacity-10">
          .About
        </h1>
        <div className="text-xl font-semibold md:max-w-xl">
          <p>
            I’m a self-taught programmer and an undergraduate student currently
            studying Software Engineering at Koya University.
          </p>
          <p>
            I'm always looking for new challenges and opportunities to learn new
            things and improve my skills.
          </p>
        </div>
        <div className="absolute right-0 top-0 md:top-32">
          <Image
            src={rocket}
            width={300}
            height={300}
            className="opacity-10 animate-pulse"
          />
        </div>
        {/* <div>
        <h2>Techincal Skills</h2>
        <ul className="text-lg">
          <li>JavaScript</li>
          <li>Reactjs</li>
          <li>Nextjs</li>
          <li>Redux Toolkit</li>
          <li>Tailwindcss</li>
          <li>Framer Motion</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Firebase</li>
          <li>Figma</li>
          <li>Adobe XD</li>
        </ul>
      </div> */}
      </div>
      <div>
        <h2 className="text-center text-white font-extrabold text-2xl mt-10">
          General Skills
        </h2>
        <ul className="text-white sm:grid sm:grid-cols-2 sm:gap-3">
          <GeneralSkills
            style="rounded-md bg-gradient-to-r from-green-300 to-green-500"
            imageURL={team}
            title="Team Work 👌"
            content="I can provide a good team work and review/debug codes."
          />
          <GeneralSkills
            style="rounded-md bg-gradient-to-r from-red-300 to-red-500"
            imageURL={brush}
            title="Design 🖌️"
            content="I will develop and design your website as you wish. Develop UI/UX
            efficiently."
          />
          <GeneralSkills
            style="rounded-md bg-gradient-to-r from-red-300 to-red-500"
            imageURL={company}
            title="Company 💼"
            content="I can work for a company as web developer to build their website
            efficiently."
          />
          <GeneralSkills
            style="rounded-md bg-gradient-to-r from-green-300 to-green-500"
            imageURL={freelancer}
            title="Freelancing 💻"
            content="Freelancing/remote is my priority.Let's build your website."
          />
        </ul>
      </div>
      <div>
        <h2 className="text-center text-white font-extrabold text-2xl mt-10">
          Achievements
        </h2>
        <ul className="relative text-white ml-10 text-lg flex flex-col justify-center items-center">
          {data?.map((item, index) => {
            return (
              <Link href={`/about/${item?.id}`} key={item?.id}>
                <a className="max-w-md relative pb-10 mb-10 cursor-pointer shadow-xl rounded-lg hover:bg-darkPrimary transition-all duration-300">
                  <svg
                    width="42"
                    height="400"
                    viewBox="0 0 43 629"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -left-10"
                  >
                    <rect x="20" y="43" width="4" height="1034" fill="white" />
                    <circle
                      cx="21.5"
                      cy="21.5"
                      r="20"
                      fill="#27187E"
                      stroke="#00FFD1"
                      strokeWidth="3"
                    />
                    <circle cx="21.5" cy="21.5" r="13.5" fill="#00FFD1" />
                  </svg>
                  <span className="font-semibold">{item?.date}: </span>
                  {item?.brief}
                </a>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default About;
