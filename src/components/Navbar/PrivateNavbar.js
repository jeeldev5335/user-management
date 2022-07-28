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
          <Link className="nav-link m-2" to="/">Users</Link>
          <Link className="nav-link m-2" to="register">Form</Link>
        </div>
        <div className="me-4">
          <h4>Welcome {me.name}</h4>
          <div>
            <Link className="nav-link m-2" onClick={handleLogout} to="login">Logout</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default PrivateNavbar;