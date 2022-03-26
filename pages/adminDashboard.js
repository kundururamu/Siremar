/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useEffect } from "react";
import Chart from "../components/chart";
import Table from "../components/Table";
import MenuButton from "../components/shared/menuButton";
import {
  HomeIcon,
  AdjustmentsIcon,
  UserAddIcon,
  HeartIcon,
} from "@heroicons/react/solid";
import Router from "next/router";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userType = useSelector((state) => state.auth.userType);
  useEffect(() => {
    !isAuth ? Router.push("/auth/login") : "";
    userType !== "Admin" ? Router.push(`/${userType.toLowerCase()}Home`) : "";
  }, []);
  const buttons = [
    {
      name: "Home",
      icon: HomeIcon,
      onClick: (e) => {
        e.preventDefault();
        Router.push("/");
      },
    },
    {
      name: "Registration",
      icon: UserAddIcon,
      onClick: (e) => {
        e.preventDefault();
        Router.push("/registration");
      },
    },
    {
      name: "Residents",
      icon: AdjustmentsIcon,
      onClick: (e) => {
        e.preventDefault();
        Router.push("/residentHome");
      },
    },
    {
      name: "Inspectors",
      icon: AdjustmentsIcon,
      onClick: (e) => {
        e.preventDefault();
        Router.push("/inspectorHome");
      },
    },
  ];
  return (
    <div>
      <div className="bg-backgroundDark w-full px-20  text-white text-center h-12 items-center flex justify-center flex-col space-y-5"></div>
      <div className="flex space-between space-x-2">
        {/* leftpart */}
        <div className="w-[280px] border-r-2 h-screen mt-4">
          {buttons.map((btn, index) => {
            return (
              <MenuButton
                btn={btn.name}
                Icon={btn.icon}
                onClick={btn.onClick}
              />
            );
          })}
        </div>
        {/* right */}
        <div className="w-full mr-6 mt-4">
          {/* Parameter boxes */}
          <div className="flex justify-around">
            {buttons.map((btn, index) => {
              return (
                <div className="px-12 py-4 border-2 w-full m-2 rounded-md shadow-sm hover:opacity-50 cursor-pointer">
                  <h1>Parameters</h1>
                  <p>{Math.random()}</p>
                </div>
              );
            })}
          </div>

          {/* Chart */}
          <div className="flex w-full mt-6 justify-center">
            <div className=" w-[60%] mx-2">
              <Chart />
            </div>
            <div className=" w-[50%] mx-6">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
