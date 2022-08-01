import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getToken } from "../../utils";
import PrivateNavbar from "../Navbar/PrivateNavbar";
import api from '../../api';

const Private = () => {

    const [me, setMe] = useState({});

    useEffect(() => {
        getMe();
    }, [])

    const getMe = () => {
        const token = getToken();

        api.get("/api/me", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
                const { name, surname} = response.data;
                setMe({ 'name': name, 'surname': surname });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <React.Fragment>
            <PrivateNavbar me={me} />
            {/** Renders component from Route.js base on the URL **/}
            <div className="container">
                <Outlet />
            </div>
            {/** Renders component from Route.js base on the URL **/}
        </React.Fragment>
    )
};

export default Private;