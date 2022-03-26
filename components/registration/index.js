/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React from "react";
import RegistrationSteps from "../registrationsSteps";

const Registration = () => {
  return (
    <div>
      <div className="bg-backgroundDark w-full px-20  text-white text-center h-48 items-center flex justify-center flex-col space-y-5">
        <h1 className=" text-4xl mt-16 "> Registration</h1>
      </div>
      <div>
        <RegistrationSteps />
      </div>
    </div>
  );
};

export default Registration;
