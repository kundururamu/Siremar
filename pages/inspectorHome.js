/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";
import ManageClinics from "../components/inspectorsFeatures/manageClinics";
import ManageBusinesses from "../components/inspectorsFeatures/manageBusinesses";
import ManageSchools from "../components/inspectorsFeatures/manageSchools";
import ManageResidents from "../components/inspectorsFeatures/manageResidents";
import ManageMoveouts from "../components/inspectorsFeatures/manageMoveouts";
import ChatWithResidents from '../components/inspectorsFeatures/chatWithResidents'

const InspectorHome = () => {
  const userType = useSelector((state) => state.auth.userType);
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    !isAuth ? Router.push("/auth/login") : "";
  }, []);

  const steps = {
    MS: ManageSchools,
    MC: ManageClinics,
    MB: ManageBusinesses,
    MR: ManageResidents,
    MM: ManageResidents,
    CR: ChatWithResidents

  };
  const [step, setStep] = useState("MS");
  const Step = steps[step];
  return (
    <div>
      <div className="bg-backgroundDark w-full px-20  text-white text-center h-48 items-center flex justify-center flex-col space-y-2">
        <h1 className=" text-4xl mt-16 ">
          Hello {userType === "Admin" ? "Admin" : "Inspector"}
        </h1>
        <p>Below are the services you can perform.</p>
      </div>
      <div className=" text-white font-bold mt-4">
        <ul className="flex justify-center mx-20 space-x-8 cursor-pointer ">
          <li
            className="linkButtons"
            onClick={() => {
              setStep("MS");
            }}
          >
            Manage Schools
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep("MC");
            }}
          >
            Manage Clinics
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep("MB");
            }}
          >
            Manage Businesses
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep("MR");
            }}
          >
            Manage Residents
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep("MM");
            }}
          >
            Manage Moveouts
          </li>
          <li
            className="linkButtons"
            onClick={() => {
              setStep("CR");
            }}
          >
            Chat with Residents
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

export default InspectorHome;
