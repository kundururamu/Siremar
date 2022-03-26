/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useState } from "react";
import InputField from "../shared/inputField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DialogBox from "../shared/dialogbox";
import Router from "next/router";

const InspectorRegistration = () => {
  const [isError, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");

  const emailValidation = (value) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(regex.test(value) === false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastname === "" ||
      address === "" ||
      country === ""
    ) {
      setError(!isError);
      setErrMessage(`All fields are required`);
      return;
    }
    if (email === "" || !emailValidation(email)) {
      setError(!isError);
      setErrMessage("Email is not valid.");
      return;
    }
    Router.push("/adminDashboard");
  };
  return (
    <div>
      <div>
        <div className="w-full max-w-xl m-auto border shadow-md mt-5 rounded-lg">
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="flex">
              <h1 className="font-bold text-backgroundDark text-2xl  mx-auto mb-6">
                Register Inspectors
              </h1>
            </div>

            <div className="flex justify-center space-x-4">
              <InputField
                id="Some input"
                placeholder="First name"
                type="none"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                isError={isError}
              />
              <InputField
                id="Some input"
                placeholder="Last name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                isError={isError}
              />
            </div>
            <div className="flex justify-center space-x-4">
              {/* date picker */}
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
                id="Some input"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                isError={isError}
              />
            </div>
            <div className="flex justify-center space-x-4">
              <InputField
                id="Some input"
                placeholder="Address"
                type="none"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                isError={isError}
              />
              <InputField
                id="Some input"
                placeholder="Country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                isError={isError}
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-backgroundDark  text-textColor font-bold py-2 px-4 rounded mb-3 hover:bg-gray-900 text-center "
                onClick={onSubmitHandler}
              >
                Submit
              </button>
            </div>
          </form>
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

export default InspectorRegistration;
