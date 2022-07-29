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
      <div className="navbar navbar-expand-lg navbar-light bg-light text-center">
        <div className="navbar-collapse ms-3">
          <Link className="nav-link m-2" to="/">User-List</Link>
          <Link className="nav-link m-2" to="register">Form</Link>
        </div>
        <div className="me-5 pe-2">
          <div>
            <h4>Welcome</h4>
          </div>
          <div className="btn-group">
            <div className="btn dropdown-toggle fs-4" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
              {me.name}
            </div>
            <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
              <li><a className="dropdown-item">My Profile</a></li>
              <li><a className="dropdown-item">Change Password</a></li>
              <li><div class="dropdown-divider"> </div></li>
              <li><Link className="dropdown-item" onClick={handleLogout} to="login">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default PrivateNavbar;