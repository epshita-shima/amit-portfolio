import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <section
        className="min-h-screen flex items-center justify-center bg-[#14121A] pt-20 px-4 border-b border-amber-100"
      >
        <div className="hero-content flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl text-white gap-10">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hi, <span className="wave-hand text-4xl">👋</span>
            </h1>
            <h1 className="py-4 max-w-xl mx-auto font-serif font-blod text-3xl md:text-4xl lg:text-5xl lg:mx-0 uppercase">
              I'M Amit Deb Nath,
            </h1>
            <h2 className="text-xl md:text-2xl text-fuchsia-500 uppercase font-semibold h-10 lg:mt-12">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Freelancer",
                  "MERN Stack Developer",
                ]}
                loop={0} // set to 0 for infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </h2>
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
      </section>
    </div>
  );
};

export default Hero;
