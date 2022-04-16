/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
import Link from "next/link";
import { useSelector } from "react-redux";
import { SearchIcon } from "@heroicons/react/solid";

function Navbar() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userType = useSelector((state) => state.auth.userType);

  return (
    <div className="shadow-md absolute top-0 z-0 left-0 right-0">
      <div className="p-3 mx-20 text-center text-textColor m-auto text-sm  cursor-pointer flex justify-between items-center ">
        <div>
          <Link href="/">
            <h1 className="font-bold text-xl">SIREMAR</h1>
          </Link>
        </div>
        <ul className="flex justify-evenly space-x-8 ">
          <li>
            <Link href="/">
              <a className="navbtn">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="navbtn">About</a>
            </Link>
          </li>
          <li className={`${isAuth ? "hidden" : ""}`}>
            <Link href="/services">
              <a className="navbtn">Services</a>
            </Link>
          </li>
          <li className={`${isAuth ? "hidden" : ""}`}>
            <Link href="/contact">
              <a className="navbtn">Contact</a>
            </Link>
          </li>
          <li className={`${isAuth ? "hidden" : ""}`}>
            <Link href="https://rxk1957.uta.cloud/blog/">
              <a className="navbtn">Blog</a>
            </Link>
          </li>
          <li>
            {isAuth ? (
              <Link
                href={
                  userType === "Admin"
                    ? "/adminDashboard"
                    : `/${userType.toLowerCase()}Home`
                }
              >
                <a className="navbtn">{userType}</a>
              </Link>
            ) : (
              <Link href="/auth/login">
                <a className="navbtn">Login/Register</a>
              </Link>
            )}
          </li>
          <li>
            <SearchIcon className="h-4 text-white" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
