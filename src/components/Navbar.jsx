import logo from "../assets/mylogo.png";
import { FaLinkedin} from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaSquareXTwitter} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const NavBar = () => {
  return (
  <nav className=" mb-20 flex items-center justify-between py-6">
  <div className=" flex flex-shrink-0 items-center">
  <img className="mx-2 w-12 h-16 object-contain" src={logo} alt="logo" />
  </div>
  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/amardeepsarkar/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
      <FaLinkedin />
    </a>
    <a href="https://github.com/Amardeep111" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
      <FaGithub />
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
      <FaSquareXTwitter />
    </a>
    <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
      <SiLeetcode />
    </a>
  </div>
  </nav>
  );
};

export default NavBar;
