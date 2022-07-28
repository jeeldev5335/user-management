import { getMergedStatus } from "antd/lib/_util/statusUtils";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PrivateNavbar from "../Navbar/PrivateNavbar";

const Private = () => {

    const [me, setMe] = useState({});

    useEffect(() => {
        getMe();
    }, [])

    const getMe = () => {
        setMe({
            name: 'Alpesh'
        });
    }

    return (
        <React.Fragment>
            <PrivateNavbar me={me} />
            {/** Rendered component from Route.js base on the URL **/}
            <div className="container">
                <Outlet />
            </div>
            {/** Rendered component from Route.js base on the URL **/}
        </React.Fragment>
    )
};

export default Private;