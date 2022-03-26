/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { setUserType } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

function DropDownComponenet({ Items }) {
  const [selectedItem, setSelectedItem] = useState("Resident");
  const [dropDown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const toggleDropDown = () => {
    setDropdown(!dropDown);
  };
  return (
    <div>
      <div
        className=" bg-white w-full mr-10 px-3 py-1 shadow appearance-none border rounded flex items-center justify-between text-backgroundDark cursor-pointer "
        onClick={() => {
          toggleDropDown();
        }}
      >
        <h1 className="text-sm text-gray-700">
          {!selectedItem ? "Select your choice" : selectedItem}
        </h1>
        {!dropDown ? (
          <ChevronDownIcon className="h-6" />
        ) : (
          <ChevronUpIcon className="h-6" />
        )}
      </div>
      {dropDown && (
        <div className="w-full bg-white mt-2 mb-8 shadow-md">
          {Items.map((item, index) => {
            return (
              <div
                className="px-3 py-2 cursor-pointer flex justify-between hover:bg-backgroundDark hover:text-text-primary text-sm opacity-50 hover:text-white hover:opacity-100"
                key={index}
                onClick={() => {
                  setSelectedItem(item.name);
                  setDropdown(false);
                  dispatch(setUserType(item.name));
                }}
              >
                <h1>{item.name}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDownComponenet;
