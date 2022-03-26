/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React from "react";
import { UserRemoveIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";

const schools = [
  {
    name: "ABC School",
    address: "XYZ street, India",
  },
  {
    name: "ABC School",
    address: "XYZ street, India",
  },
  {
    name: "ABC School",
    address: "XYZ street, India",
  },
  {
    name: "ABC School",
    address: "XYZ street, India",
  },
  {
    name: "ABC School",
    address: "XYZ street, India",
  },
];

const CheckSchools = () => {
  const userType = useSelector((state) => state.auth.userType);
  return (
    <div className="mt-4 mx-36 flex">
      <div className="w-[700px] m-auto">
        <div className="flex justify-between text-md bg-backgroundDark rounded-md p-4  mb-2 text-white font-bold text-left ">
          <h1>S/N</h1>
          <h1>School name</h1>
          <h1>Address</h1>
          {userType !== "Resident" ? <div>Action</div> : ""}
        </div>
        {schools.map((s, index) => {
          return (
            <div className="flex justify-between rounded-md p-2 border-b-2 text-gray-600 font-bold text-center">
              <h1>{index + 1}</h1>
              <h1 className="ml-16">{s.name}</h1>
              <h1>{s.address}</h1>
              {userType !== "Resident" ? (
                <UserRemoveIcon className="h-6 mr-2" />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckSchools;
