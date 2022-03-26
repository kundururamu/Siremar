/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserType } from "../../redux/slices/authSlice";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";

const NavDropdown = () => {
  const roles = ["Resident", "Inspector", "Admin"];
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.auth.userType);
  const [dropDown, setDropDown] = useState(false);
  const page = {
    Resident: "residentHome",
    Admin: "adminDashboard",
    Inspector: "inspectorHome",
  };
  return (
    <div
      className="mb-1 "
      onClick={() => {
        setDropDown(!dropDown);
      }}
    >
      <div className="flex justify-center items-center space-x-1">
        <h1>{userType}</h1>
        {!dropDown ? (
          <ChevronDownIcon className="h-4" />
        ) : (
          <ChevronUpIcon className="h-4" />
        )}
      </div>
      <div className="absolute top-10 right-28 bg-backgroundDark rounded-md px-4 shadow-md">
        {dropDown
          ? roles.map((role, index) => {
              return (
                <div
                  className="py-2 hover:opacity-80"
                  onClick={() => {
                    dispatch(setUserType(role));
                    setDropDown(!dropDown);
                  }}
                >
                  <h1 className="text-left">
                    <Link href={`/${page[role]}`}>
                      <a>{role}</a>
                    </Link>
                  </h1>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default NavDropdown;
