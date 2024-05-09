import { testimonialOne, testimonialTwo, testimonialThree} from "../assets";
import { HiStar } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";
import TestimonialCard from "./TestimonialCard";

  const Testimonial = () => {
    return(
  <div className="container my-5 mx-auto md:px-6 p-10">
    <section className="mb-32 text-center">
      <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>
      <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">



        <TestimonialCard
          name = "Pharis Jane" 
          title = "Jubilee Party - Youth League National Chair"
          src = {testimonialOne}
          des = "Exceptional design and functionality! The website truly represents our youth league's vision and mission. Highly recommended."
          stars ={[<HiStar/>, <HiStar/>, <HiStar/>, <HiStar/>, <HiOutlineStar/>]}
        />

        <TestimonialCard
          name = "Titus Githae" 
          title = "Founder and CEO - Litstructure Technology"
          src = {testimonialTwo}
          des = "Outstanding work! The website truly mirrors our company's ethos and helps us connect with our audience effectively."
          stars ={[<HiStar/>, <HiStar/>, <HiStar/>, <HiStar/>, <HiStar/>]}
        />

        <TestimonialCard
          name = "DunCan Gitonga" 
          title = "Executive Director - Children At Crossroads NGO"
          src = {testimonialThree}
          des = "The website for Children At Crossroads NGO is beyond our expectations. It conveys our message of hope and support beautifully."
          stars ={[<HiStar/>, <HiStar/>, <HiStar/>, <HiStar/>, <HiOutlineStar/>]}
        />
      </div>
    </section>
  </div>
    );
  };


export default Testimonial;
