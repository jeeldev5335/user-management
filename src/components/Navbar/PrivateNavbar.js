import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { removeToken } from "../../utils";
import { UserContext } from "../Layout/Private";
import UserService from "../Service/UserService";


const PrivateNavbar = () => {
  const me = useContext(UserContext);

  const handleLogout = () => {
    const obj = new UserService();

    obj.logoutUser().then((response) => {
      const { message } = response;
      if (message === "Logged out") {
        removeToken();
        window.location.href = "/";
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <React.Fragment>
      <div className="sticky-top shadow navbar navbar-expand-lg navbar-light bg-light text-center">
        <div className="navbar-collapse ms-3">
          <Link className="nav-link m-2" to="">Dashboard</Link>
          <Link className="nav-link m-2" to="/">User-List</Link>
        </div>
        <div className="d-flex align-items-center me-5">
          <h4 className="m-0">Welcome</h4>
          <div className="btn-group d-inline">
            <div className="btn dropdown-toggle fs-4" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
              {me.name + " " + me.surname}
            </div>
            <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
              <li><Link className="dropdown-item" to={`/myprofile/${me.id}`}>My Profile</Link></li>
              <li><Link className="dropdown-item" to="/change-password">Change Password</Link></li>
              <li><div className="dropdown-divider"> </div></li>
              <li><Link className="dropdown-item" onClick={handleLogout} to="/">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default PrivateNavbar;