/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useState } from "react";
import ClinicRegistration from "../registration/clinic";
import CheckClinics from "../residentFeatures/checkClinics";

const style = {
  tabs: `hover:underline border-2 px-8 py-2 rounded-lg`,
};

const ManageSchools = () => {
  const [task, setTask] = useState("view");
  const tasks = {
    add: ClinicRegistration,
    view: CheckClinics,
  };

  const Task = tasks[task];
  return (
    <div className="mt-4">
      <div className="flex">
        <ul className="flex font-bold text-backgroundDark m-auto space-x-4 cursor-pointer ">
          <li
            onClick={() => {
              setTask("add");
            }}
            className={style.tabs}
          >
            Add
          </li>
          <li
            onClick={() => {
              setTask("view");
            }}
            className={style.tabs}
          >
            View
          </li>
        </ul>
      </div>
      <Task />
    </div>
  );
};

export default ManageSchools;
