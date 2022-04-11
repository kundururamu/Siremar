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
import axios from "axios";

const FlightsRegistration = () => {
  const [isError, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const [flight_id, setFlightNumber] = useState("");
  const [departure, setDeparture] =useState("");
  const [arrival, setArrival] = useState("");
  const [arrival_date, setArrivaldate] = useState("");
  const [departure_date, setDestination] = useState("");

  async function handleSubmit(event) {
    event.preventDefault()
    axios.post("https://siremarbackend.lxv1537.uta.cloud/create_or_updateflight.php", {
      flight_id: flight_id,
      departure : departure,
      arrival: arrival,
      arrival_date: arrival_date,
      departure_date: departure_date,
      is_deleted:0,

    }).then((res) => {
      if(res.data.response === "flight Updated successfully!!!") {
        setError(!isError);
        setErrMessage("flight registered Successfully.") 

      }
    })
    
  }
  return (
    <div>
      <div>
        <div className="w-full max-w-xl m-auto border shadow-md mt-5 rounded-lg">
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
            <div className="flex">
              <h1 className="font-bold text-backgroundDark text-2xl  mx-auto mb-6">
                Register Flights
              </h1>
            </div>

            <div className="flex justify-center space-x-4">
              <InputField
                id="flight_id"
                className ='form-control'
                placeholder="Flight number"
                type="none"
                onChange={(e) => {
                  setFlightNumber(e.target.value);
                }}
                isError={isError}
              />
            </div>

<div>
            <InputField
                id="departure"
                className ='form-control'
                placeholder="Departure"
                type="none"
                onChange={(e) => {
                  setDeparture(e.target.value);
                }}
                isError={isError}
              />
            </div>
            <div>
            <InputField
                id="arrival"
                className ='form-control'
                placeholder="Arrival"
                type="none"
                onChange={(e) => {
                  setArrival(e.target.value);
                }}
                isError={isError}
              />
            </div>
           
            
            <div className="rounded border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-4 shadow-sm">
                <DatePicker
                  closeOnScroll={true}
                  id="arrival_time"
                  selected={arrival_date}
                  id="departure_time"
                  onChange={(date) => setArrivaldate(date)}
                  name="Dept time"
                  placeholderText="Departure Date"
                  className="outline-none form-control"
      
                />
              </div>
              <div className="rounded border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-4 shadow-sm">
                <DatePicker
                  closeOnScroll={true}
                  selected={departure_date}
                  id="departure_time"
                  onChange={(date) => setDestination(date)}
                  name="Dept time"
                  placeholderText="Arrival Date"
                  className="outline-none form-control"
                />
              </div>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-backgroundDark  text-textColor font-bold py-2 px-4 rounded mb-3 hover:bg-gray-900 text-center "
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      
      {isError ? (
        <DialogBox onClick={() => setError(false)} emessage={errMessage} />
      ) : (
        ""
      )}
    </div>
    </div>
  );
};

export default FlightsRegistration;
