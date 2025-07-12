import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#0A0416] text-neutral-content items-center p-2">
      
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - Amit</p>
      </aside>
      <nav className="grid-flow-col gap-2 md:place-self-end md:justify-self-end">
           <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-white  p-3  "
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                      className=" text-white  p-3  "
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                      className=" text-white  p-3  "
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                      className=" text-white  p-3  "
                  >
                    <FontAwesomeIcon icon={faDiscord} />
                  </a>
      </nav>
    </footer>
  );
};

export default Footer;
