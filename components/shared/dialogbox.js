/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";

const DialogBox = ({ onClick, emessage }) => {
  return (
    <div>
      <div className="absolute bg-black opacity-70 top-0 right-0 left-0 bottom-0"></div>
      <div className="flex justify-center items-center absolute top-0 left-60 right-60 ">
        <div className="m-auto bg-slate-100  w-[500px] rounded-md opacity-100 mt-60 p-2  relative">
          <XCircleIcon
            className="h-6 text-red-900 absolute right-2"
            onClick={onClick}
          />
          <h1 className="text-red text-sm font-bold text-red-500 mt-4 ">
            Error message
          </h1>
          <h1 className=" mb-4 text-md ">{emessage}</h1>
          <button
            className="bg-backgroundDark px-6 py-1 rounded-md text-white font-bold hover:opacity-80"
            onClick={onClick}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
