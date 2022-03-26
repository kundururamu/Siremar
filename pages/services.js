/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import Card from "../components/shared/card";
import Router from "next/router";

const Services = () => {
  return (
    <div>
      <div className="bg-backgroundDark w-full px-20  text-white text-center h-48 items-center flex justify-center flex-col space-y-5">
        <h1 className=" text-4xl mt-16 "> Services</h1>
      </div>

      <div className="flex mt-6 mx-20">
        <Card
          title="Create your resident account."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis harum voluptas rem nemo eaque natus vero doloremque,
            nesciunt dolore hic eos illo laudantium, sequi possimus voluptatibus
            assumenda dolores placeat non?Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. "
          onClick={() => {
            Router.push("/registration");
          }}
        />
        <Card
          title="Get discounts for various things like shops and travel."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis harum voluptas rem nemo eaque natus vero doloremque,
            nesciunt dolore hic eos illo laudantium, sequi possimus voluptatibus
            assumenda dolores placeat non?Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. "
          onClick={() => {
            Router.push("/residentHome");
          }}
        />
        <Card
          title="Get info about school admission and more..."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis harum voluptas rem nemo eaque natus vero doloremque,
            nesciunt dolore hic eos illo laudantium, sequi possimus voluptatibus
            assumenda dolores placeat non?Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. "
        />
      </div>
    </div>
  );
};

export default Services;
