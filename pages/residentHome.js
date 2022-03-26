/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useEffect, useState } from "react";
import SchoolRegistration from "../components/registration/schools";

import { useSelector } from "react-redux";
import Router from "next/router";
import Discounts from "../components/residentFeatures/checkDiscounts";
import CheckBusiness from "../components/residentFeatures/checkBusiness";
import CheckEvents from "../components/residentFeatures/checkEvents";

const ResidentHome = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userType = useSelector((state) => state.auth.userType);
  const steps = {
    CD: Discounts,
    CB: CheckBusiness,
    CE: CheckEvents,
    RS: SchoolRegistration,
  };
  const [step, setStep] = useState("CD");
  const Step = steps[step];
  useEffect(() => {
    !isAuth ? Router.push("/auth/login") : "";
  }, []);
  return (
    <div>
      <div className="bg-backgroundDark w-full px-20  text-white text-center h-48 items-center flex justify-center flex-col space-y-2">
        <h1 className=" text-4xl mt-16 ">
          Hello {userType === "Admin" ? "Admin" : "Resident"}
        </h1>
        <p>Below are the services that you can perform</p>
      </div>
      <div className=" text-white font-bold mt-4">
        <ul className="flex justify-center space-x-8 cursor-pointer ">
          <li
            className="linkButtons"
            onClick={() => {
              setStep("CD");
            }}
          >
            View Discounts
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep("CB");
            }}
          >
            View Business
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep("CE");
            }}
          >
            View Events
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep("RS");
            }}
          >
            Register School
          </li>
          <li
            className="linkButtons"
            
          >
           Chat with inspector
          </li>
        </ul>
      </div>
      <div className="border-t-2 mt-4"></div>
      <div>
        <Step />
      </div>
    </div>
  );
};

export default ResidentHome;
