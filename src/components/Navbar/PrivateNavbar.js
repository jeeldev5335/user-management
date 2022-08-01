import React from "react";
import { Link } from "react-router-dom";
import { removeToken } from "../../utils";


const PrivateNavbar = (props) => {

  const { me } = props;

  const handleLogout = () => {
    removeToken();
    window.location.href = "/";
  }

  return (
    <React.Fragment>
      <div className="sticky-top shadow navbar navbar-expand-lg navbar-light bg-light text-center">
        <div className="navbar-collapse ms-3">
          <Link className="nav-link m-2" to="">Dashboard</Link>
          <Link className="nav-link m-2" to="/">User-List</Link>
        </div>
        <div className="d-flex align-items-center me-5 pe-3">
          <h4 className="m-0">Welcome</h4>
          <div className="btn-group d-inline">
            <div className="btn dropdown-toggle fs-4" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
              {me.name + " " + me.surname}
            </div>
            <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
              <li><a className="dropdown-item">My Profile</a></li>
              <li><a className="dropdown-item">Change Password</a></li>
              <li><div className="dropdown-divider"> </div></li>
              <li><Link className="dropdown-item" onClick={handleLogout} to="login">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default PrivateNavbar;