/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useState } from "react";
import InputField from "../../components/shared/inputField";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setUserType } from "../../redux/slices/authSlice";
import Router from "next/router";
import DialogBox from "../../components/shared/dialogbox";
import DropDownComponenet from "../../components/shared/dropdownComponent";
import axios from "axios";

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
  const [roleSelected, setRoleSelected] = useState("Resident");

  const emailValidation = (value) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(regex.test(value) === false);
  };

  /*const onSignInHandler = (e) => {
    e.preventDefault();
    console.log(e.value);
    
    dispatch(setAuth());
    if (userType === "Admin") {
      Router.push("/adminDashboard");
    } else {
      Router.push(`/${userType.toLowerCase()}Home`);
    }
  };*/
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
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
     axios.post("https://siremarbackend.lxv1537.uta.cloud/login.php", {
        username: email,
        password: password,
        role_type: roleSelected.toLowerCase(),
      })
      .then((res) => {
        console.log(res.data.response,'res', roleSelected.toLowerCase());
        if(res.data.response === "success"){
          dispatch(setAuth()) 
          dispatch(setUserType(roleSelected));
          localStorage.setItem("firstName", res.data.data.first_name)
          localStorage.setItem("lastName", res.data.data.last_name)
          localStorage.setItem("userId", res.data.data.Id)
          localStorage.setItem("userType", roleSelected)
          roleSelected.toLowerCase() === "admin" ? Router.push("/adminDashboard") : roleSelected.toLowerCase() === "resident" ? Router.push("/residentHome") : roleSelected.toLowerCase() === "inspector" ? Router.push("/inspectorHome") : null ;
        } else {
          setError(!isError)
          setErrMessage("Invalid User Credentials")
        }
      })
      .catch((error) => {
        console.log(error, 'err');
      })
  };

  return (
    <div>
      <div className="bg-backgroundDark w-full px-20  text-white text-center h-[50px] items-center flex justify-center flex-col space-y-5"></div>
      <div className="flex justify-center mt-28">
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handelSubmit}
          >
            <div className="flex mb-2">
              <h1 className="font-bold text-backgroundDark text-2xl  mx-auto">
                Sign in
              </h1>
            </div>
            <div>
              <InputField
                id="email"
                value={email}
                className="form-control"
                name="email_name"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <InputField
                id="password"
                name="password"
                placeholder="Password"
                className="form-control"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
            <div>
              <DropDownComponenet Items={Roles} sendSelectedToParent={(role) => setRoleSelected(role)}/>
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={handelSubmit}
                type="submit"
                className="bg-backgroundDark  text-textColor font-bold py-2 px-4 rounded mb-3 hover:bg-gray-900 text-center "
              >
                Submit
              </button>
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
