/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useState, useEffect } from "react";
import InputField from "../shared/inputField";
import DialogBox from "../shared/dialogbox";
import Router from "next/router";
import axios from "axios";


const BusinessRegistration = () => {
  const [isError, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const [bName, setBname] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(event) {
    event.preventDefault()
    axios
      .post(
        "http://siremarbackend.lxv1537.uta.cloud/create_business.php",
        {
          business_name: bName,
          business_address: address,
          is_deleted: 0,
          business_id: -1,
        }
      )
      .then((res) => {
        if ((res.data.response === "success! Business Created")){
          console.log("awefew",res.data.response);
          alert("Business registered successfully")
        }

      });
  }

  return (
    <div>
      <div>
        <div className="w-full max-w-xl m-auto border shadow-md mt-5 rounded-lg">
          <form
            className="bg-white rounded px-8 pt-6 pb-8 mb-4 "
            onSubmit={handleSubmit}
          >
            <div className="flex">
              <h1 className="font-bold text-backgroundDark text-2xl  mx-auto mb-6">
                Register Business
              </h1>
            </div>

            <div className="flex justify-center space-x-4">
              <InputField
                id="Some input"
                placeholder="Name of Business"
                type="none"
                className="form-control"
                onChange={(e) => {
                  setBname(e.target.value);
                }}
                isError={isError}
                value={bName}
              />
            </div>
            <div className="flex justify-center space-x-4">
              <InputField
                id="Some input"
                className="form-control"
                placeholder="Address"
                type="none"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                isError={isError}
                value={address}
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
      </div>
      {isError ? (
        <DialogBox onClick={() => setError(false)} emessage={errMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default BusinessRegistration;
