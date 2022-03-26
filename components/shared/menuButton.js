/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import { ArrowSmRightIcon } from "@heroicons/react/solid";
import React from "react";

const MenuButton = ({ btn, Icon, onClick }) => {
  return (
    <div>
      <div
        className="p-3 border-b-2 w-full flex justify-between items-center hover:opacity-60 cursor-pointer rounded-sm shadow-sm font-bold text-backgroundDark"
        onClick={onClick}
      >
        <div className="flex justify-center items-center space-x-2">
          <Icon className="h-4 mr-2" />
          {btn}
        </div>
        <ArrowSmRightIcon className="h-4" />
      </div>
    </div>
  );
};

export default MenuButton;
