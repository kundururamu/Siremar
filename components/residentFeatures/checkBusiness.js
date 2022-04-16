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
import { Grid, Item } from "@mui/material";
import { Edit } from "@mui/icons-material";
import InputField from "../shared/inputField";
import DialogBox from "../shared/dialogbox";

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

const CheckBusiness = () => {
  const userType = useSelector((state) => state.auth.userType);
  const [business, setBusiness] = useState([]);
  const [editBusiness, setEditBusiness] = useState(false);
  const [businessDetails, setBusinessDetails] = useState({});
  const [isError, setError] = useState(false);

  useEffect(() => {
    getApi();
  }, []);

  function getApi() {
    axios
      .get("https://siremarbackend.lxv1537.uta.cloud/get_businessdetails.php")
      .then((res) => {
        setBusiness(res.data.data);
      });
  }

  function handleEditBusiness(business) {
    setEditBusiness(true);
    setBusinessDetails(business);
  }

  function handleBusinessDetails(item) {
    console.log(item, 65);
    setBusinessDetails({
      ...businessDetails,
      [item.target.name]: item.target.value,
    });
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    axios
      .post("https://siremarbackend.lxv1537.uta.cloud/create_business.php", {
        business_name: businessDetails.Name,
        business_address: businessDetails.Address,
        is_deleted: 0,
        business_id: businessDetails.Id,
      })
      .then((res) => {
        if (res.data.response === "success! Business Updated") {
          getApi();
          setEditBusiness(false);
        }
      });
  }
  function deleteBusiness(event) {
    // event.preventDefault();
    axios
      .post("https://siremarbackend.lxv1537.uta.cloud/create_business.php", {
        business_name: event.Name,
        business_address: event.Address,
        is_deleted: 1,
        business_id: event.Id,
      })
      .then((res) => {
        if (res.data.response === "success! Business Updated") {
          getApi();
        }
      });
  }

  return (
    <div className="mt-4 mx-36 flex">
      <div className="w-[700px] m-auto">
        {editBusiness ? (
          <div>
            <div className="w-full max-w-xl m-auto border shadow-md mt-5 rounded-lg">
              <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 ">
                <div className="flex">
                  <h1 className="font-bold text-backgroundDark text-2xl  mx-auto mb-6">
                    Edit Business
                  </h1>
                </div>

                <div className="flex justify-center space-x-4">
                  <InputField
                    id="Some input"
                    placeholder="Name of Business"
                    type="none"
                    name="Name"
                    onChange={(e) => {
                      handleBusinessDetails(e);
                    }}
                    isError={isError}
                    value={businessDetails.Name}
                  />
                </div>
                <div className="flex justify-center space-x-4">
                  <InputField
                    id="Some input"
                    placeholder="Address"
                    type="none"
                    name="Address"
                    onChange={(e) => {
                      handleBusinessDetails(e);
                    }}
                    isError={isError}
                    value={businessDetails.Address}
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
                  <StyledTableCell align="center">
                    Business Name
                  </StyledTableCell>
                  <StyledTableCell align="center">Address</StyledTableCell>
                  <StyledTableCell align="center">
                    {userType !== "Resident" ? "Action" : ""}
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {business &&
                  business.map((item, index) => (
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
                                onClick={() => deleteBusiness(item)}
                              />
                            </div>

                            <div className="col">
                              <Edit
                                className="h-6 mr-2"
                                onClick={() => handleEditBusiness(item)}
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

export default CheckBusiness;
