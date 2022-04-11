/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import Router from "next/router";
export default function Home() {
  return (
    <div>
      <div className="bg-backgroundDark w-full text-white text-center h-96 items-center flex justify-center flex-col space-y-5">
        <h1 className="mt-3 text-textColor text-md font-bold">
          This is Siremar
        </h1>
        <h1 className=" text-4xl w-[400px] mb-6">
          A Portal for residents of Margartia.
        </h1>
        <button
          className="bg-textColor  text-backgroundDark font-bold py-2 px-4 rounded mb-3 hover:text-gray-500"
          onClick={() => {
            Router.push("/auth/login");
          }}
        >
          Get Started
        </button>
      </div>
    
     </div>
  );
}
