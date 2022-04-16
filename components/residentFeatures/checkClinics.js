/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { TrashIcon } from "@heroicons/react/solid";
import { Edit } from "@mui/icons-material";
import InputField from "../shared/inputField";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CheckClinics = () => {
  const userType = useSelector((state) => state.auth.userType);
  const [clinics, setClinic] = useState([]);
  const [editClinic, setEditClinics] = useState(false);
  const [clinicDetails, setClinicDetails] = useState({});
  const [isError, setError] = useState(false);

  useEffect(() => {
    getApi();
  }, []);

  function getApi() {
    axios
      .get("https://siremarbackend.lxv1537.uta.cloud/get_clincDetails.php")
      .then((res) => {
        if (res.data.reponse === "success") console.log("response", res);
        setClinic(res.data.data);
      });
  }

  function handleEditClinic(clinics) {
    setEditClinics(true);
    setClinicDetails(clinics);
  }

  function handleClinicDetails(item) {
    console.log(item, 65);
    setClinicDetails({
      ...clinicDetails,
      [item.target.name]: item.target.value,
    });
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(
      {
        clinic_name: clinicDetails.Name,
        clinic_address: clinicDetails.Address,
        is_deleted: 0,
        clinic_id: clinicDetails.Id,
      }
    );
    axios
      .post(
        "http://siremarbackend.lxv1537.uta.cloud/create_or_modify_clinc.php",
        {
          clinic_name: clinicDetails.Name,
          clinic_address: clinicDetails.Address,
          is_deleted: 0,
          clinic_id: clinicDetails.Id,
        }
      )
      .then((res) => {
        if (res.data.response === "success! Clincs Updated") {
          getApi();
          setClinicDetails(false);
        }
      });
  }

  function deleteClinics(event) {
    console.log('delete');
    axios
      .post(
        "http://siremarbackend.lxv1537.uta.cloud/create_or_modify_clinc.php",
        {
          clinic_name: clinicDetails.Name,
          clinic_address: clinicDetails.Address,
          is_deleted: 1,
          clinic_id: clinicDetails.Id,
        }
      )
      .then((res) => {
        if (res.data.response === "success! Business Updated") {
          getApi();
        }
      });
  }

  return (
    <div className="mt-4 mx-36 flex">
      <div className="w-[700px] m-auto">
        {editClinic ? (
          <div>
            <div className="w-full max-w-xl m-auto border shadow-md mt-5 rounded-lg">
              <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 ">
                <div className="flex">
                  <h1 className="font-bold text-backgroundDark text-2xl  mx-auto mb-6">
                    Edit Clincs
                  </h1>
                </div>

                <div className="flex justify-center space-x-4">
                  <InputField
                    id="Some input"
                    placeholder="Name of Clinic"
                    type="none"
                    name="Name"
                    onChange={(e) => {
                      handleClinicDetails(e);
                    }}
                    isError={isError}
                    value={clinicDetails.Name}
                  />
                </div>
                <div className="flex justify-center space-x-4">
                  <InputField
                    id="Some input"
                    placeholder="Address"
                    type="none"
                    name="Address"
                    onChange={(e) => {
                      handleClinicDetails(e);
                    }}
                    isError={isError}
                    value={clinicDetails.Address}
                  />
                </div>
                <div className="flex justify-center space-x-4">
                  <button
                    className="bg-backgroundDark  text-textColor font-bold py-2 px-4 rounded mb-3 hover:bg-gray-900 text-center "
                    onClick={onSubmitHandler}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">S/N</StyledTableCell>
                  <StyledTableCell align="center">Clinic Name</StyledTableCell>
                  <StyledTableCell align="center">Address</StyledTableCell>
                  <StyledTableCell align="center">
                    {userType !== "Resident" ? "Action" : ""}
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clinics &&
                  clinics.map((item, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="center">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.Name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.Address}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {userType !== "Resident" ? (
                          <div className="row">
                            <div className="col">
                              <TrashIcon
                                className="h-6 mr-2"
                                onClick={() => deleteClinics(item)}
                              />
                            </div>
                            <div className="col">
                              <Edit
                                className="h-6 mr-2"
                                onClick={() => handleEditClinic(item)}
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default CheckClinics;
