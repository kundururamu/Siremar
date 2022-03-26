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

const FlightsRegistration = () => {
  const [isError, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const [flightNumber, setFlightNumber] = useState("");
  const [deptTime, setDeptTime] = useState("");
  const [destination, setDestination] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (flightNumber === "" || deptTime === "" || destination === "") {
      setError(!isError);
      setErrMessage(`All fields should be filled.`);
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
                Register Flights
              </h1>
            </div>

            <div className="flex justify-center space-x-4">
              <InputField
                id="Some input"
                placeholder="Flight number"
                type="none"
                onChange={(e) => {
                  setFlightNumber(e.target.value);
                }}
                isError={isError}
              />
            </div>
            <div className="flex justify-center space-x-4">
              {/* date picker */}
              <div className="rounded border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-4 shadow-sm">
                <DatePicker
                  closeOnScroll={true}
                  selected={deptTime}
                  onChange={(date) => setDeptTime(date)}
                  name="Dept time"
                  placeholderText="Departure Time"
                  className="outline-none"
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <InputField
                id="Some input"
                placeholder="Destination"
                type="none"
                onChange={(e) => {
                  setDestination(e.target.value);
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

export default FlightsRegistration;
