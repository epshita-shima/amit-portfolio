import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const UsageTools = () => {
    const skills = [
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },

];
  return (
       <section className=" flex items-center justify-center bg-[#14121A] pt-10 pb-10 ">
      <div className="w-full max-w-7xl">
       <div className="text-center mb-10">
        <h2 className="text-white text-4xl font-bold mb-2">
          <span className="text-fuchsia-500">Tools </span>I use
        </h2>
        
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-white text-5xl p-6 border-1 border-fuchsia-500 rounded-lg transition duration-500 transform hover:scale-110 hover:shadow-[0_0_20px_#D946EF,0_0_40px_#D946EF] hover:text-fuchsia-400 "
          >
            {skill.icon}
            <p  className="text-base mt-2 ">{skill.name}</p>
          </div>
        ))}
      </div>
      </div>
     
    </section>
  )
}

export default UsageTools
