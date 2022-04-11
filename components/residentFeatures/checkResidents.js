/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React, { useEffect, useState } from "react";
import { UserRemoveIcon } from "@heroicons/react/solid";
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

const CheckResidents = () => {
  const userType = useSelector((state) => state.auth.userType);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://siremarbackend.lxv1537.uta.cloud/get_user_details.php"
      )
      .then((res) => {
        setResidents(res.data.data);
      });
  }, []);

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
                      {e.first_name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {e.last_name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{e.dob}</StyledTableCell>
                    <StyledTableCell align="center">
                      {e.address}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {userType !== "Resident" ? (
                        <UserRemoveIcon className="h-6 mr-2"/>
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
export default CheckResidents;
