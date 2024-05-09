import { FaWhatsapp } from "react-icons/fa";
import { logo } from "../assets";
import { FadeIn } from "./FadeIn";

const Footer = () => {
  return (
    <FadeIn className="w-full py-10 h-auto flex justify-center ">
      <div className="flex flex-col gap-6">
        <img className="w-32" src={logo} alt="logo" />

        

        <div className="flex justify-center">
          <a href="https://wa.link/kvl3di" target="_blank">
              <span className="bannerIcon">
                <FaWhatsapp />
              </span>
            </a>
        </div>

        <div className="flex justify-center">
          <p className="italic text-gray-600">Let' Connect</p>
        </div>

      </div>
     
    </FadeIn>
  );
};

export default Footer;
