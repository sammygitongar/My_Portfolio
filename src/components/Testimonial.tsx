import { testimonialOne, testimonialTwo, testimonialThree} from "../assets";



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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic.
          </p>
          <ul className="mb-0 flex justify-center">
          
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
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi.
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
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.
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
