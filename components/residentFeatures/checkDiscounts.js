/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React from "react";
import { DocumentRemoveIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";

const discounts = [
  {
    fname: "FL 305",
    date: "02-04 -22",
    destination: "Dallas",
    time: "2:00PM",
  },
  {
    fname: "FL 306",
    date: "02-04 -22",
    destination: "Dallas",
    time: "2:00PM",
  },
  {
    fname: "FL 307",
    date: "02-04 -22",
    destination: "Dallas",
    time: "2:00PM",
  },
  {
    fname: "FL 308",
    date: "02-04 -22",
    destination: "Dallas",
    time: "2:00PM",
  },
];

const Discounts = () => {
  const userType = useSelector((state) => state.auth.userType);
  return (
    <div className="mt-4 mx-36 flex">
      <div className="w-[700px] m-auto">
        <div className="flex justify-between text-md bg-backgroundDark rounded-md p-4  mb-2 text-white font-bold text-left ">
          <h1>S/N</h1>
          <h1>Flight name</h1>
          <h1>Date</h1>
          <h1>Destination</h1>
          <h1>Time</h1>
          {userType !== "Resident" ? <div>Action</div> : ""}
        </div>
        {discounts.map((d, index) => {
          return (
            <div className="flex justify-between rounded-md p-2 border-b-2 text-gray-600 font-bold text-center">
              <h1>{index + 1}</h1>
              <h1 className="ml-16">{d.fname}</h1>
              <h1>{d.date}</h1>
              <h1>{d.destination}</h1>
              <h1>{d.time}</h1>
              {userType !== "Resident" ? (
                <DocumentRemoveIcon className="h-6 mr-2" />
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

export default Discounts;
