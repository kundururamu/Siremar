/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React from "react";
import { DocumentRemoveIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";

const events = [
  {
    ename: "Music night",
    date: "2nd March 2022",
    time: "10:00 PM",
    venue: "Santiago Bernabeu",
  },
  {
    ename: "Music night",
    date: "2nd March 2022",
    time: "10:00 PM",
    venue: "Santiago Bernabeu",
  },
  {
    ename: "Music night",
    date: "2nd March 2022",
    time: "10:00 PM",
    venue: "Santiago Bernabeu",
  },
  {
    ename: "Music night",
    date: "2nd March 2022",
    time: "10:00 PM",
    venue: "Santiago Bernabeu",
  },
  {
    ename: "Music night",
    date: "2nd March 2022",
    time: "10:00 PM",
    venue: "Santiago Bernabeu",
  },
];

const CheckEvents = () => {
  const userType = useSelector((state) => state.auth.userType);
  return (
    <div className="mt-4 mx-36 flex">
      <div className="w-[700px] m-auto">
        <div className="flex justify-between text-md bg-backgroundDark rounded-md p-4  mb-2 text-white font-bold text-left ">
          <h1>S/N</h1>
          <h1>Event name</h1>
          <h1>Date</h1>
          <h1>Time</h1>
          <h1>Venue</h1>
          {userType !== "Resident" ? <div>Action</div> : ""}
        </div>
        {events.map((e, index) => {
          return (
            <div className="flex justify-between rounded-md p-2 border-b-2 text-gray-600 font-bold text-center">
              <h1>{index + 1}</h1>
              <h1 className="ml-16">{e.ename}</h1>
              <h1>{e.date}</h1>
              <h1>{e.time}</h1>
              <h1>{e.venue}</h1>
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

export default CheckEvents;
