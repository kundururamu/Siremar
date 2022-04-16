/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import React from "react";
import { useState, useEffect } from "react";
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
const checkSchools = () => {
  const userType = useSelector((state) => state.auth.userType);
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://siremarbackend.lxv1537.uta.cloud/get_schools.php"
      )
      .then((res) => {
        console.log(res, 2345);
        setSchools(res.data.data);
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
                <StyledTableCell align="center">School Name</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">
                  {userType !== "Resident" ? "Action" : ""}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schools &&
                schools.map((e, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="center">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="center">{e.Name}</StyledTableCell>
                    <StyledTableCell align="center">
                      {e.Address}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {userType !== "Resident" ? (
                        <UserRemoveIcon className="h-6 mr-2" />
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

export default checkSchools;
