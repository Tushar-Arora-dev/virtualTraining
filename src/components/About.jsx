/* eslint-disable react/no-unescaped-entities */
// import { testimonials } from "../constants";

const AboutUS = () => {
  return (
    <div className="mt-20 tracking-wide my-20" id="aboutus">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl text-start my-10 lg:my-10">
        About Us
      </h2>
      <p className="text-justify">
        At VRAstra, we specialize in delivering cutting-edge Virtual Reality
        (VR) solutions to revolutionize how businesses operate. From immersive
        VR training modules that enhance workforce skills, to virtual tourism
        experiences that bring the world to your doorstep, and custom automotive
        design tools that transform car workshops — our mission is to provide
        innovative, interactive, and impactful VR experiences. <br /> <br />
        With a focus on innovation, customization, and collaboration, we work
        closely with large companies to create VR solutions that are tailored to
        their unique needs. Our expert team is passionate about pushing the
        boundaries of what’s possible with VR technology, helping businesses
        across industries embrace the future of digital interaction. <br />{' '}
        <br />
        Whether you're looking to train your employees in a risk-free virtual
        environment, offer customers virtual tours of global destinations, or
        let clients customize their dream car in real-time, we have the tools
        and expertise to bring your vision to life.
      </p>
      {/* <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AboutUS;
