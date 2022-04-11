/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import axios from "axios";
import { useState } from "react";
import InputField from "../components/shared/inputField";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(event){
    event.preventDefault()
    axios.post("http://siremarbackend.lxv1537.uta.cloud/contact_us.php", {
      
      first_name: firstName,
      last_name: lastName,
      email_id: email,
      phone_no: phone,
      description: desc
    }).then((res) => {
      console.log(res.data.response,'contact');
      if(res.data.response === "success") {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setDesc("")
      }
    })
  }

  return (
    <div>
      <div className="bg-backgroundDark w-full px-20  text-white text-center h-48 items-center flex justify-center flex-col space-y-5">
        <h1 className=" text-4xl mt-16 "> Contact us</h1>
      </div>

      <div className="mx-20 text-center m-auto"></div>
      <div className="w-full max-w-xl m-auto">
        <form
          className="bg-white rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center space-x-4">
            <InputField
              id="fullname"
              placeholder="FirstName"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <InputField
              id="lastname"
              placeholder="LastName"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className="flex justify-center space-x-4">
            <InputField
              id="phonenumber"
              placeholder="Phone Number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <InputField
              id="email"
              placeholder="Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <textarea
            name="query"
            id="query"
            cols="25"
            rows="10"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-2 form-control"
            placeholder="Write your query here.."
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-backgroundDark  text-textColor font-bold py-2 px-4 rounded mb-3 hover:bg-gray-900 text-center "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
