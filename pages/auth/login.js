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
import DialogBox from "../../components/shared/dialogbox";
import DropDownComponenet from "../../components/shared/dropdownComponent";

const Login = () => {
  const Roles = [
    {
      name: "Admin",
    },
    {
      name: "Inspector",
    },
    {
      name: "Resident",
    },
  ];
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.auth.userType);
  const [isError, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValidation = (value) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(regex.test(value) === false);
  };

  const onSignInHandler = (e) => {
    e.preventDefault();
    if (email === "" || !emailValidation(email)) {
      setError(!isError);
      setErrMessage("Email is not valid.");
      return;
    }
    if (password === "") {
      setErrMessage("Password can't be empty");
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
                Sign in
              </h1>
            </div>
            {/* <p className="text-center text-sm my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p> */}

            <div>
              <InputField
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <InputField
                id="password"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <DropDownComponenet Items={Roles} />
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={onSignInHandler}
                className="bg-backgroundDark  text-textColor font-bold py-2 px-4 rounded mb-3 hover:bg-gray-900 text-center "
              >
                Submit
              </button>
            </div>
            <div className="flex items-center justify-between">
              <a
                className="inline-block align-baseline font-bold text-sm text-backgroundDark mx-auto hover:underline"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <Link href="/auth/register">
                <a
                  className="inline-block align-baseline font-bold text-sm text-backgroundDark mx-auto hover:underline"
                  href="#"
                >
                  Create new account.
                </a>
              </Link>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2022 siremar. All rights reserved.
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

export default Login;
