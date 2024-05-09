interface Props {
    name: string;
    title: string;
    src: string;
    des: string;
    stars: JSX.Element[];
  }

const TestimonialCard = ({name, title, src, des, stars}: Props) => {

    return(
    <div className="mb-12 md:mb-0 bg-[#f0f0f0] p-4 rounded-xl shadow-lg hover:bg-white transition">
    <div className="mb-6 flex justify-center">
      <img
        src= {src}
        className="w-32 rounded-full shadow-lg dark:shadow-black/20"
      />
    </div>
    <h5 className="mb-2 text-lg font-bold">{name}</h5>
    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
        {title}
    </h6>
    <p className="mb-4">
        {des}
    </p>
    <ul className="mb-0 flex justify-center text-[#45d5da]">
      {stars}
    </ul>
  </div>
    );

};

export default TestimonialCard;