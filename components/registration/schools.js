/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useEffect, useState } from "react";
import InputField from "../shared/inputField";
import DialogBox from "../shared/dialogbox";
import Router from "next/router";
import DropDownComponenet from "../shared/dropdownComponent";
import axios from "axios";
import { data } from "autoprefixer";

const SchoolRegistration = () => {
  const [isError, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  
  const Courses = [
    {
      name: "Computer Science",
    },
    {
      name: "Information Sciences",
    },
    {
      name: "Electrical Engineering",
    },
  ];

  const [schools, setSchools] = useState([]);
  const [course, setCourses] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("")

  useEffect(() => {
    axios
      .get(
        "http://siremarbackend.lxv1537.uta.cloud/get_schools.php"
      )
      .then((res) => {
        if (res.data.reponse === "success") {
          let schoolsArray = []
          res.data.data.map(async (school) => {
            let details = {
              id: school.Id,
              name: school.Name
            }
            await schoolsArray.push(details)
          })
          setSchools(schoolsArray)
        }
      });
  }, []);

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   if (sName === "" || address === "") {
  //     setErrMessage("All fields are required.");
  //     setError(!isError);
  //     return;
  //   }
  //   Router.push("/adminDashboard");
  // };

  function handleSchoolSelected(school) {
    let index = schools.findIndex((a) => a.name === school);
    if (index > -1) {
      setSelectedSchool(schools[index].id);
    }
  }

  async function handlSubmit(event) {
    event.preventDefault()
    let userId = await localStorage.getItem("userId")
    if (course === "" || selectedSchool === "") {
      setErrMessage("All fields are required.");
      setError(!isError);
      return;
    } 
    axios.post("http://siremarbackend.lxv1537.uta.cloud/register_to_school.php", {
      user_id: userId,
      school_id: selectedSchool,
      course_name: course,
      is_deleted:0
    }).then((res) => {
      if(res.data.response === "School Updated successfully!!!") {
        setError(!isError);
        setErrMessage("Registered School Successfully.") 

      }
    })
    
  }

  return (
    <div>
      <div>
        <div className="w-full max-w-xl m-auto border shadow-md mt-5 rounded-lg">
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handlSubmit}>
            <div className="flex">
              <h1 className="font-bold text-backgroundDark text-2xl  mx-auto mb-6">
                Register Schools
              </h1>
            </div>

            <div className="flex justify-center space-x-4">
              <DropDownComponenet Items={schools} className ='form-control' placeHolder={'Select School'} sendSelectedToParent={(school) => handleSchoolSelected(school)}/>
            </div>

            <div className="flex justify-center space-x-4" style={{paddingTop:24, paddingBottom:24}}>
             <DropDownComponenet Items={Courses} placeHolder={'Select Course'} className='from-control' sendSelectedToParent={(course) => setCourses(course)}/>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-backgroundDark  text-textColor font-bold py-2 px-4 rounded mb-3 hover:bg-gray-900 text-center "
                onClick={handlSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {isError ? (
        <DialogBox customMessage={' '} onClick={() => setError(false)} emessage={errMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SchoolRegistration;
