import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiMysql } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer.", "Graphic Designer.", "Digital Marketer.", "Dope Giraffe 👉"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-gray-500">
          Hi, I'm <span className="text-designColor capitalize">Samuel Gitonga</span>
        </h1>
        <h2 className="text-4xl font-bold text-gray-500">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        I use a wide range of tools, techniques and strategies to empower brands by enhancing their visibility, extending their reach and creating digital operation management tools that give them a competitive edge in the market.        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-6">
            <a href="https://twitter.com/TechhVerse" target="_blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/sammy-gitongar-006805207/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.instagram.com/tosh_laflare/" target="_blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiPhp />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
