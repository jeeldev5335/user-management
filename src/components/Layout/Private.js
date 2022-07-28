import React from "react";
import { Outlet } from "react-router-dom";
import PrivateNavbar from "../Navbar/PrivateNavbar";

const Private = () => {
    console.log("You are in private");
    return (
        <React.Fragment>
            <PrivateNavbar />
            <Outlet />
        </React.Fragment>
    )
};

export default Private;