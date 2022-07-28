import React from "react";
import { Link } from "react-router-dom";


const PrivateNavbar = () => {

  return (
    <React.Fragment>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-collapse ms-3">
          <Link className="nav-link m-2" to="/">Users</Link>
          <Link className="nav-link m-2" to="register">Form</Link>
        </div>
        <div className="me-4">
          <div>Welcome</div>
          <div>
            <Link className="nav-link m-2" to="login">Logout</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default PrivateNavbar;