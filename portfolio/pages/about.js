import React from "react";
import Image from "next/image";
import team from "../public/images/team.svg";
import freelancer from "../public/images/freelancer.svg";
import brush from "../public/images/brush.svg";
import company from "../public/images/company.svg";
import GeneralSkills from "../components/GeneralSkills";

function About() {
  return (
    <div>
      <div className="text-white mt-32">
        <h1 className="text-7xl sm:text-10xl font-extrabold opacity-10">
          .About
        </h1>
        <p className="text-xl font-semibold sm:text-lg">
          I’m a self-taught programmer and an undergraduate student currently
          studying Software Engineering at Koya University.
        </p>
        <p className="text-xl font-semibold">
          I'm always looking for new challenges and opportunities to learn new
          things and improve my skills.
        </p>
        {/* <div>
        <h2>Techincal Skills</h2>
        <ul className="text-lg">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Reactjs</li>
          <li>Nextjs</li>
          <li>Tailwindcss</li>
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
    </div>
  );
}

export default About;
