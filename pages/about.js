/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
const About = () => {
  return (
    <div>
      <div className="bg-backgroundDark w-full px-20 text-white text-start h-96 items-start flex justify-center flex-col space-y-5">
        <h1 className=" text-4xl"> Welcome to Siremar</h1>
      </div>
      <div className="mx-20 mt-6">
        <h1 className="text-4xl font-bold">About Siremar</h1>
        <p className="text-backgroundDark mt-3">
        Siremar is a portal that aims to keep a dynamic count of all residents of the Island so that the island can get a stable, sound budget from Central Government. 
        The system will require all Residents to register. Registration can be online or in our offices.
        Siremar will provide an ID and  a lot of  benefits to residents.Through this portal residents can view several benefits that are available for them such as they can see discounts,view events, view schools and register them.
        Siremar has three types of users such as Residents,Inspectors and Admin.
        Admin can manage all counties,schools and Business.
        </p>
      </div>
    </div>
  );
};

export default About;
