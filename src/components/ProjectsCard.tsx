import { BsGithub } from "react-icons/bs";
interface Props {
  title: string;
  des: string;
  src: string;
}

const ProjectsCard = ({ title, des, src }: Props) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-lg flex flex-col bg-[#ceb2e680] group hover:bg-gradient-to-tl hover:from-slate-100 hover:to-[#b5f6f88e] transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-80 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-[#b440d1] font-bold">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href="https://github.com/sammygitongar/" target="_blank">
                <span className="text-lg w-10 h-10 rounded-full bg-[#d23eff] inline-flex justify-center items-center text-black hover:text-white duration-300 cursor-pointer">
                  <BsGithub />
                </span>
              </a>
             {/* <a href="https://www.youtube.com/@reactjsBD" target="_blank">
                <span className="text-lg w-10 h-10 rounded-full bg-[#d23eff] inline-flex justify-center items-center text-black hover:text-white duration-300 cursor-pointer">
                  <FaYoutube />
                </span>
             </a> */}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-700 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
