/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useState } from "react";
import InputField from "../../components/shared/inputField";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../redux/slices/authSlice";
import Router from "next/router";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DialogBox from "../../components/shared/dialogbox";
import DropDownComponenet from "../../components/shared/dropdownComponent";

const Register = () => {
  const userType = useSelector((state) => state.auth.userType);

  const Roles = [
    // {
    //   name: "Admin",
    // },
    {
      name: "Inspector",
    },
    {
      name: "Resident",
    },
  ];
  const [isError, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [fname, setFirstname] = useState("");
  const [lname, setLastname] = useState("");
  const [gender, setGender] = useState(""); 
  const [phone , setPhone] = useState("");
  const emailValidation = (value) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(regex.test(value) === false);
  };

  const onSignUpHandler = (e) => {
    e.preventDefault();
    if (fname === "") {
      setError(!isError);
      setErrMessage(`Firstname shouldn't be empty.`);
      return;
    }
    if (lname === "") {
      setError(!isError);
      setErrMessage(`Lastname shouldn't be empty.`);
      return;
    }
    if (dob === "") {
      setError(!isError);
      setErrMessage(`DOB shouldn't be empty.`);
      return;
    }
    if (gender === "") {
      setError(!isError);
      setErrMessage(`Gender shouldn't be empty.`);
      return;
    }
    if (address === "") {
      setError(!isError);
      setErrMessage(`Address shouldn't be empty.`);
      return;
    }
    if (phone === "") {
      setError(!isError);
      setErrMessage(`phone number shouldn't be empty.`);
      return;
    }
    if (email === "" || !emailValidation(email)) {
      setErrMessage("Email not valid.");
      setError(!isError);
      return;
    }
    if (password === "") {
      setErrMessage(`Password shouldn't be empty.`);
      setError(!isError);
      return;
    }

    dispatch(setAuth());
    if (userType === "Admin") {
      Router.push("/adminDashboard");
    } else {
      Router.push(`/${userType.toLowerCase()}Home`);
    }
  };

  return (
    <div>
      <div className="bg-backgroundDark w-full px-20  text-white text-center h-[50px] items-center flex justify-center flex-col space-y-5"></div>
      <div className="flex justify-center mt-28">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex mb-2">
              <h1 className="font-bold text-backgroundDark text-2xl  mx-auto">
                Register
              </h1>
            </div>
            <div className="mb-4">
              <DropDownComponenet Items={Roles} />
            </div>
            <div>
              <InputField
                id="fname"
                placeholder="First Name"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                isError={isError}
              />
               <InputField
                id="lname"
                placeholder="Last Name"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                isError={isError}
              />
              <div className="rounded border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-4 shadow-sm">
                <DatePicker
                  closeOnScroll={true}
                  selected={dob}
                  onChange={(date) => setDob(date)}
                  name="startDate"
                  dateFormat="dd-mm-yyyy"
                  placeholderText="Date of birth"
                  className="outline-none"
                />
                 
              </div>
              <InputField
                id="gender"
                placeholder="Gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                isError={isError}
              />
             <InputField
                id="phone"
                placeholder="Phone no"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                isError={isError}
              /> 
              <InputField
                id="address"
                placeholder="Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                isError={isError}
              />
              <InputField
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                isError={isError}
              />
              <InputField
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                isError={isError}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={onSignUpHandler}
                className="bg-backgroundDark  text-textColor font-bold py-2 px-4 rounded mb-3 hover:bg-gray-900 text-center "
              >
                Register
              </button>
            </div>
            <div className="flex items-center justify-between">
              <Link href="/auth/login">
                <a
                  className="inline-block align-baseline font-bold text-sm text-backgroundDark mx-auto hover:underline"
                  href="#"
                >
                  Already have an account.
                </a>
              </Link>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2022 Siremar. All rights reserved.
          </p>
        </div>
      </div>
      {isError ? (
        <DialogBox onClick={() => setError(false)} emessage={errMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Register;
