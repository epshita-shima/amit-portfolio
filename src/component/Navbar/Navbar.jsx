import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faTv,  faMessage, faBook } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar bg-gray-800 opacity-75 fixed top-0 z-50 w-full shadow">
      {/* Logo */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white">AM.</a>
      </div>

      {/* Large screen menu */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-serif">
          {[
            { href: "/", label: "Home", icon: faHome },
            { href: "/about", label: "About", icon: faUser },
            { href: "/projects", label: "Projects", icon: faTv },
            { href: "/resume", label: "Resume", icon: faBook },
            // { href: "/blog", label: "Blog", icon: faPenNib },
            { href: "/contact", label: "Contact", icon: faMessage },
          ].map((item) => (
            <li key={item.href} className="ml-6">
              <a
                href={item.href}
                className="relative text-[18px] text-white transition-all duration-300 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[5px] after:bg-fuchsia-500 after:w-0 hover:after:w-full after:transition-all after:duration-500"
              >
                <FontAwesomeIcon icon={item.icon} /> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#14141B] rounded-box w-52 text-white"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
