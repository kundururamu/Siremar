/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useEffect, useState } from "react";
import { TrashIcon, UserRemoveIcon } from "@heroicons/react/solid";
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
import { DocumentRemoveIcon } from "@heroicons/react/solid";

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

const ManageResidents = () => {
  const userType = useSelector((state) => state.auth.userType);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    getApiCall();
  }, []);

  function getApiCall() {
    axios
      .get(
        "https://siremarbackend.lxv1537.uta.cloud/get_user_details.php?role_type=resident"
      )
      .then((res) => {
        setResidents(res.data.data);
      });
  }

  function deleteUser(event, user) {
    event.preventDefault();
    axios
      .post(
        "https://siremarbackend.lxv1537.uta.cloud/user_registration.php",
        {
          address: user.Address,
          dob: user.DOB,
          email_id: user.Email_Id,
          first_name: user.First_Name,
          county_id: user.Fk_County_Id,
          gender: user.Gender,
          user_id: user.Id,
          is_citizen: user.Is_Citizen,
          is_deleted: 1,
          last_name: user.Last_Name,
          passcode: user.Password,
          phone_no: user.Phone_No,
          role_type: user.Role_Type,
        }
      )
      .then((res) => {
        if (res.data.response === "Updated Successfully") {
          getApiCall();
        }
      });
  }

  return (
    <div className="mt-4 mx-36 flex">
      <div className="w-[700px] m-auto">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">S/N</StyledTableCell>
                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">Last Name</StyledTableCell>
                <StyledTableCell align="center">Date of Birth</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">
                  {userType !== "Resident" ? "Action" : ""}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {residents &&
                residents.map((e, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="center">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {e.First_Name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {e.Last_Name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{e.DOB}</StyledTableCell>
                    <StyledTableCell align="center">
                      {e.Address}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {userType !== "Resident" ? (
                        <TrashIcon
                          className="h-6 mr-2"
                          onClick={(event) => deleteUser(event, e)}
                        />
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default ManageResidents;
