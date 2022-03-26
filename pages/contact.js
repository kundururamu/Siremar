/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import InputField from "../components/shared/inputField";
const Contact = () => {
  return (
    <div>
      <div className="bg-backgroundDark w-full px-20  text-white text-center h-48 items-center flex justify-center flex-col space-y-5">
        <h1 className=" text-4xl mt-16 "> Contact us</h1>
      </div>

      <div className="mx-20 text-center m-auto">
       
      </div>
      <div className="w-full max-w-xl m-auto">
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="flex justify-center space-x-4">
            <InputField id="fullname" placeholder="FirstName" />
            <InputField id="lastname" placeholder="LastName" />
          </div>
          <div className="flex justify-center space-x-4">
            <InputField id="phonenumber" placeholder="Phone Number" />
            <InputField id="email" placeholder="Email" />
          </div>
          <textarea
            name="query"
            id="query"
            cols="25"
            rows="10"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-2"
            placeholder="Write your query here.."
          />
          <div className="flex justify-center">
            <button className="bg-backgroundDark  text-textColor font-bold py-2 px-4 rounded mb-3 hover:bg-gray-900 text-center ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
