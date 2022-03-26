/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useState, useEffect } from "react";
import InspectorRegistration from "../components/registration/inspector";
import SchoolRegistration from "../components/registration/schools";
import FlightsRegistration from "../components/registration/flights";
import BusinessRegistration from "../components/registration/business";
import ClinicRegistration from "../components/registration/clinic";

import { useSelector } from "react-redux";
import Router from "next/router";

const Registration = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userType = useSelector((state) => state.auth.userType);
  useEffect(() => {
    !isAuth ? Router.push("/auth/login") : "";
    userType !== "Admin" && userType !== "Inspectors" ? Router.push("/") : "";
  }, []);
  const steps = {
    1: InspectorRegistration,
    2: FlightsRegistration,
    3: BusinessRegistration,
    4: SchoolRegistration,
    5: ClinicRegistration,
  };
  const [step, setStep] = useState(1);
  const Step = steps[step];
  function onNext() {
    setStep(step + 1);
  }

  return (
    <div>
      <div className="bg-backgroundDark w-full px-20  text-white text-center h-48 items-center flex justify-center flex-col space-y-5">
        <h1 className=" text-4xl mt-16 "> Registration</h1>
      </div>
      <div className=" text-white font-bold mt-2">
        <ul className="flex justify-center space-x-8 cursor-pointer ">
          <li
            className="linkButtons"
            onClick={() => {
              setStep(1);
            }}
          >
            Inspectors
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep(2);
            }}
          >
            Flights
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep(3);
            }}
          >
            Business
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep(4);
            }}
          >
            Schools
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep(5);
            }}
          >
            Clinics
          </li>
        </ul>
      </div>
      <div>
        <Step onNext={onNext} />
      </div>
    </div>
  );
};

export default Registration;
