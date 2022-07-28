import React from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "../Auth/LoginPage";


const Public = () => {
    console.log("in public");
    return (
        <React.Fragment>
            <LoginPage />
            <Outlet />
        </React.Fragment>
    )
};

export default Public;