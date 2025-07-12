import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import ProfessionalSkill from "./ProfessionalSkill";
import UsageTools from "./UsageTools";
import GithubActivity from "./GithubActivity";

const About = () => {
  return (
    <section>
      <div
        className="min-h-screen flex items-center justify-center bg-[#14121A] pt-20 px-4 "
      >
        <div className="hero-content flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl text-white gap-10">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-right">
              Know Who I'M
            </h1>
            <p className="py-4 max-w-xl mx-auto font-serif font-blod   lg:mx-0 ">
              Hi Everyone, I am Soumyajit Behera from Bhubaneswar, India. I am
              currently employed as a software developer at Juspay. I have
              completed Integrated MSc (IMSc) in Maths and Computing at BIT
              Mesra.
            </p>
            <p className="mt-8">
              Apart from coding, some other activities that I love to do!</p>
            <p className="mt-4">
        <span><FontAwesomeIcon icon={faHandPointRight}></FontAwesomeIcon></span> Playing Games
            </p>
            <p className="">
        <span><FontAwesomeIcon icon={faHandPointRight}></FontAwesomeIcon></span> Writing Tech Blogs
            </p>
            <p className="">
        <span><FontAwesomeIcon icon={faHandPointRight}></FontAwesomeIcon></span> Travelling
            </p>
            <p className="text-center mt-4">
              Whenever possible, I also apply my passion for developing products
              with Node.js and Modern Javascript Library and Frameworks like{" "}
              <span className="text-fuchsia-500">React.js and Next.js</span>{" "}
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/153/368/original/3d-website-developer-working-on-laptop-illustration-png.png"
              alt="Developer Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
     <ProfessionalSkill></ProfessionalSkill>
     <UsageTools></UsageTools>
     <GithubActivity></GithubActivity>
    </section>
  );
};

export default About;
