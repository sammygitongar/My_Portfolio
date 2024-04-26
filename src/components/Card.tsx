import { HiArrowRight } from "react-icons/hi";

interface Props {
  title: string;
  des: string;
  icon: React.ReactNode;
}

const Card = ({ title, des, icon }: Props) => {
  return (
    <div className="w-full px-12 h-auto py-3 rounded-lg shadow-lg flex items-center hover:bg-gradient-to-br from-[#ffff] to-[#b5f6f88e] [ transition-colors duration-100 group">
      <div className="h-96 overflow-y-hidden">
        <div className="flex h-full flex-col gap-8 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-d#9af9fc8e]esignColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-600">
              {title}
            </h2>
            <p className="base">{des}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
