import React from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a brief description of Project One.",
    image: "https://th.bing.com/th/id/R.f0eae8cf7f759484d5ee506bd349f7ea?rik=DzUSRqx8yc8Bjg&riu=http%3a%2f%2fclipart-library.com%2fnewhp%2fkissclipart-project-management-clipart-project-management-a0814336cee94362.png&ehk=KZ80Hpue6ECLBFINNGLPOiu2u%2bDvJ8y7TgI4VIzuJ9I%3d&risl=&pid=ImgRaw&r=0",
    liveLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    image: "https://img1.pnghut.com/16/2/24/Vpn2r0xw0U/technology-stock-photography-human-behavior-royaltyfree-play.jpg",
    liveLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    image: "https://png.pngtree.com/png-vector/20220519/ourmid/pngtree-successful-business-project-presentation-png-image_4708698.png",
    liveLink: "#",
    codeLink: "#",
  },
    {
    id: 4,
    title: "Project One",
    description: "This is a brief description of Project One.",
    image: "https://th.bing.com/th/id/R.f0eae8cf7f759484d5ee506bd349f7ea?rik=DzUSRqx8yc8Bjg&riu=http%3a%2f%2fclipart-library.com%2fnewhp%2fkissclipart-project-management-clipart-project-management-a0814336cee94362.png&ehk=KZ80Hpue6ECLBFINNGLPOiu2u%2bDvJ8y7TgI4VIzuJ9I%3d&risl=&pid=ImgRaw&r=0",
    liveLink: "#",
    codeLink: "#",
  },
  {
    id: 5,
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    image: "https://img1.pnghut.com/16/2/24/Vpn2r0xw0U/technology-stock-photography-human-behavior-royaltyfree-play.jpg",
    liveLink: "#",
    codeLink: "#",
  },
  {
    id: 6,
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    image: "https://png.pngtree.com/png-vector/20220519/ourmid/pngtree-successful-business-project-presentation-png-image_4708698.png",
    liveLink: "#",
    codeLink: "#",
  },
];
const Projects = () => {
  return (
    <section className=" min-h-screen flex items-center justify-center bg-[#14121A] pt-20 px-4 pb-20">
      <div className="pt-20">
        <h2 className="text-3xl font-bold text-center  text-white">
          My Recent <span className="text-fuchsia-500"></span> Works
        </h2>
        <p className="text-white text-center">Here are a few projects I'he worked on recently</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-20">
          {projects.map(
            ({ id, title, description, image, liveLink, codeLink }) => (
              <div
                key={id}
                className="bg-[#1e1e2f] p-4 rounded-xl border-2 border-transparent hover:border-fuchsia-500 transition duration-300 group shadow-lg"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition duration-500"
                  />
                </div>

                <h2 className="text-xl text-center font-semibold mt-4 text-white">
                  {title}
                </h2>
                <p className="text-white mt-2">{description}</p>

                <div className="mt-4 flex gap-4 justify-center">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-lg transition"
                  >
                    Live
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-transparent border border-fuchsia-500 hover:bg-fuchsia-700 text-white rounded-lg transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
