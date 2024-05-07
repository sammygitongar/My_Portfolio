import { testimonialOne, testimonialTwo, testimonialThree} from "../assets";
import { HiStar } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";

  const Testimonial = () => {
    return(
  <div className="container my-24 mx-auto md:px-6">
    <section className="mb-32 text-center">
      <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>
      <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">

        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src= {testimonialOne}
              className="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h5 className="mb-2 text-lg font-bold">Pharis Jane</h5>
          <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
            Jubilee Party - Youth League National Chair
          </h6>
          <p className="mb-4">
            Exceptional design and functionality! The website truly represents our youth league's vision and mission. Highly recommended.
          </p>
          <ul className="mb-0 flex justify-center">
            <HiStar/>
            <HiStar/>
            <HiStar/>
            <HiStar/>
            <HiOutlineStar/>
          </ul>
        </div>

        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src= {testimonialTwo}
              className="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h5 className="mb-2 text-lg font-bold">Titus Githae</h5>
          <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
            Founder and CEO - Litstructure Technology
          </h6>
          <p className="mb-4">
            Outstanding work! The website truly mirrors our company's ethos and helps us connect with our audience effectively.
          </p>
          <ul className="mb-0 flex justify-center">
           
          </ul>
        </div>

        <div className="mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src= {testimonialThree}
              className="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h5 className="mb-2 text-lg font-bold">Duncan Gitonga</h5>
          <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
            Executive Director - Children At Crossroads NGO
          </h6>
          <p className="mb-4">
          The website for Children At Crossroads NGO is beyond our expectations. It conveys our message of hope and support beautifully.
          </p>
          <ul className="mb-0 flex justify-center">
           
          </ul>
        </div>
      </div>
    </section>
  </div>
    );
  };


export default Testimonial;
