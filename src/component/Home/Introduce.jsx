import React from "react";
import SocialIcon from "./SocialIcon";

const Introduce = () => {
  return (
    <section>
      <div
        className="min-h-screen flex items-center justify-center bg-[#14121A] pt-20 px-4 "
      >
        <div className="hero-content flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl text-white gap-10">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-right">
              LET ME INTRODUCE MYSELF
            </h1>
            <p className="py-4 max-w-xl mx-auto font-serif font-blod   lg:mx-0 ">
              I fell in love with programming and I have at least learnt
              something, I think…
            </p>
            <p className="mt-8">
              I am fluent in classics like{" "}
              <span className="text-fuchsia-500">C++, Javascript and Go</span>.{" "}
            </p>
            <p className="mt-8">
              My field of Interest's are building new{" "}
              <span className="text-fuchsia-500">
                Web Technologies and Products
              </span>{" "}
              and also in areas related to{" "}
              <span className="text-fuchsia-500"> Blockchain.</span>{" "}
            </p>
            <p className="mt-8">
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
      <SocialIcon></SocialIcon>
    </section>
  );
};

export default Introduce;
