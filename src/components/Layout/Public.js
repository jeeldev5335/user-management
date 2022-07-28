import React from "react";
import { Outlet } from "react-router-dom";
import PublicNavbar from "../Navbar/PublicNavbar";


const Public = () => {
    console.log("in public");
    return (
        <React.Fragment>
            <PublicNavbar />
            {/** Rendered component from Route.js base on the URL **/}
            <Outlet />
            {/** Rendered component from Route.js base on the URL **/}
        </React.Fragment>
    )
};

export default Public;