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
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DialogBox from "../../components/shared/dialogbox";
import DropDownComponenet from "../../components/shared/dropdownComponent";
import { LinkedCameraRounded } from "@mui/icons-material";

const Register = () => {
  const userType = useSelector((state) => state.auth.userType);

  const Roles = [
    {
      name: "Inspector",
    },
    {
      name: "Resident",
    },
  ];
  const Counties = [
    {
      name: "Tarrant",
      id: 1,
    },
    {
      name: "Dallas",
      id: 2,
    },
  ];

  const Citizen = [
    {
      name: "Yes",
      value: 1,
    },
    {
      name: "No",
      value: 0,
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
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [county, setCounty] = useState("");
  const [isCitizen, setIsCitizen] = useState();
  const emailValidation = (value) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(regex.test(value) === false);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(county, "county");
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
    axios
      .post("https://siremarbackend.lxv1537.uta.cloud/user_registration.php", {
        first_name: fname,

        last_name: lname,

        address: address,

        county_id: county,

        dob: dob.toISOString().split('T')[0],

        is_citizen: isCitizen,

        gender: gender.charAt(0).toUpperCase(),

        phone_no: phone,

        email_id: email,

        passcode: password,

        role_type: role,

        user_id: -1,

        is_deleted: 0,
      })
      .then((res) => {
        if (res.data.response === "success") {
          setErrMessage("User regisgtered successfully");
          setError(!isError);
          setEmail("");
          setPassword("");
          setAddress("");
          setDob("");
          setFirstname("");
          setLastname("");
          setGender("");
          setPhone("");
          setRole("");
          setCounty("");
          setIsCitizen("");
        } else if (res.data.response === "User already registered!!") {
          setErrMessage(res.data.response);
          setError(!isError);
        }
      });
  }

  function handleRole(role) {
    setRole(role);
  }

  function handleCounty(county) {
    let index = Counties.findIndex((a) => a.name === county);

    if (index > -1) {
      let value = Counties[index].id;
      console.log(value, "val");
      setCounty(Counties[index].id);
    }
  }

  function handleIsCitizen(citizen) {
    if (citizen === "yes") {
      setIsCitizen(1);
    } else {
      setIsCitizen(0);
    }
  }

  return (
    <div>
      <div className="bg-backgroundDark w-full px-20  text-white text-center h-[50px] items-center flex justify-center flex-col space-y-5"></div>
      <div className="flex justify-center mt-28">
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="flex mb-2">
              <h1 className="font-bold text-backgroundDark text-2xl  mx-auto">
                Register
              </h1>
            </div>
            <div className="mb-4">
              <DropDownComponenet
                Items={Roles}
                sendSelectedToParent={(role) => handleRole(role)}
                placeHolder={"Select User Type"}
                className="form-control"
              />
            </div>
            <div>
              <InputField
                id="fname"
                placeholder="First Name"
                className="form-control"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                isError={isError}
                value={fname}
              />
              <InputField
                id="lname"
                placeholder="Last Name"
                className="form-control"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                isError={isError}
                value={lname}
              />
              <div className="rounded border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-4 shadow-sm">
                <DatePicker
                  closeOnScroll={true}
                  selected={dob}
                  onChange={(date) => setDob(date)}
                  name="startDate"
                  dateFormat="dd-mm-yyyy"
                  className="form-control"
                  placeholderText="Date of birth"
                  className="outline-none"
                  value={dob}
                />
              </div>
              <InputField
                id="gender"
                className="form-control"
                placeholder="Gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                isError={isError}
                value={gender}
              />
              <InputField
                id="phone"
                placeholder="Phone no"
                className="form-control"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                isError={isError}
                value={phone}
              />

              <InputField
                id="address"
                placeholder="Address"
                className="form-control"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                isError={isError}
                value={address}
              />

              <div className="mb-4">
                <DropDownComponenet
                  Items={Counties}
                  className="form-control"
                  sendSelectedToParent={(county) => handleCounty(county)}
                  placeHolder={"Select County"}
                  value={county}
                />
              </div>
              <div className="mb-4">
                <DropDownComponenet
                  Items={Citizen}
                  className="form-control"
                  sendSelectedToParent={(citizen) => handleIsCitizen(citizen)}
                  placeHolder={"Are you Citizen ?"}
                  value={isCitizen}
                />
              </div>
              <InputField
                id="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                isError={isError}
                value={email}
              />
              <InputField
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                isError={isError}
                value={password}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
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
        <DialogBox
          customMessage={" "}
          onClick={() => setError(false)}
          emessage={errMessage}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Register;
