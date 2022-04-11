/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
 import axios from "axios";
 import React, { useEffect } from "react";
 import { useState } from "react";
 import InputField from "../components/shared/inputField";
 import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
 
 const queries = () => {
   const [query, setQueries] = useState([])
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
 
  useEffect(() => {
    axios.get("https://siremarbackend.lxv1537.uta.cloud/get_queries.php").then((res) => {
       console.log(res.data.response,'contact');
       if(res.data.reponse === "success") {
        setQueries(res.data.data)
       }
     })
  },[])
     
     return (
      <div>
        <div className="bg-backgroundDark w-full px-20  text-white text-center h-48 items-center flex justify-center flex-col space-y-2">
      <h1 className=" text-4xl mt-16 ">
       Queries
      </h1>
      {/* <p>Below are the services you can perform.</p> */}
    </div>
      <div className=" text-white font-bold mt-4 w-[800px] m-auto">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">S/N</StyledTableCell>
                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">Last Name</StyledTableCell>
                <StyledTableCell align="center">phone no</StyledTableCell>
                <StyledTableCell align="center">Email Id</StyledTableCell> 
                <StyledTableCell align="center">Query</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {query &&
                query.map((e, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="center">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="center">{e.First_Name}</StyledTableCell>
                    <StyledTableCell align="center">
                      {e.Last_Name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{e.Phone_No}</StyledTableCell>
                    <StyledTableCell align="center">{e.Email_Id}</StyledTableCell>
                    <StyledTableCell align="center">{e.Query}</StyledTableCell>
                   
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
   }
 
 export default queries;
 