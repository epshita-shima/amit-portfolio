import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcon = () => {
  return (
    <div className="flex items-center justify-center bg-[#14121A] sm:pt-8 md:pt-8 xl:pt-4 lg:pt-8 px-4 pb-8">
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold">FIND ME ON</h1>
        <p className="text-white mt-4">
          Feel free to <span className="text-fuchsia-500">connect</span> with me
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-fuchsia-500  p-3 rounded-full transition duration-300 hover:shadow-[0_0_15px_#D946EF] w-12 h-12"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-fuchsia-500  p-3 rounded-full transition duration-300 hover:shadow-[0_0_15px_#D946EF] w-12 h-12"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-fuchsia-500  p-3 rounded-full transition duration-300 hover:shadow-[0_0_15px_#D946EF] w-12 h-12"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-fuchsia-500  p-3 rounded-full transition duration-300 hover:shadow-[0_0_15px_#D946EF] w-12 h-12"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialIcon;
