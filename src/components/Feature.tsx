import { AiOutlineCloudServer, AiOutlineFileSearch } from "react-icons/ai";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { FaReact, FaAmazon, FaServer, FaFigma} from "react-icons/fa";


const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Front-End Development"
            des="Elevating user experiences with elegant UI/UX. I strive to make websites that are not only functional, but also easy and fun for users to use."
            icon={<FaReact />}
          />
          <Card
            title="Server-Side Development"
            des="Enhancing user experiences behind the scenes. My focus is on robust, efficient systems that power seamless interactions, ensuring reliability and scalability."
            icon={<AiOutlineCloudServer />}
          />
          <Card
            title="
            E-commerce Integration"
            des="Streamlining online sales by integrating secure payment gateways and user-friendly shopping experiences, maximizing conversion rates and customer satisfaction."
            icon={<FaAmazon />}
          />
          <Card
            title="SEO Optimization"
            des="I will create quality text content to be posted online that is designed amplify search engine rankings and facilitate seamless discovery and engagement."
            icon={<AiOutlineFileSearch />}
          />
          <Card
            title="Hosting Services"
            des="Helping my clients select secure, high-performance hosting solutions, ensuring seamless accessibility and optimal user experiences for online platforms."
            icon={<FaServer />}
          />
          <Card
            title="Design and Branding"
            des="Looking to create cohesive design elements that resonate with your audience? Look no further. I help individuals and businesses create recognizable brands that foster lasting connections."
            icon={<FaFigma />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
