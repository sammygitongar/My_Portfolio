interface Props {
  title: string;
  des: string;
}

const Title = ({ title, des }: Props) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase text-designColor font-bold tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-500 font-bold capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;
