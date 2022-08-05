import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PrivateNavbar from "../Navbar/PrivateNavbar";
import UserService from "../Service/UserService";

const Private = () => {

    const [me, setMe] = useState({});

    useEffect(() => {
        currentUser();
    }, [])

    const currentUser = () => {
        const object = new UserService;

        object.getMe().then((response) => {
            const { id, name, surname } = response.data;
            setMe({ 'id': id, 'name': name, 'surname': surname });
        }).catch((error) => {
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