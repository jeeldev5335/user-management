import React, { useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import PrivateNavbar from "../Navbar/PrivateNavbar";
import UserService from "../Service/UserService";

export const UserContext = createContext()

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
        <UserContext.Provider value={me}>
            <PrivateNavbar />
            {/** Renders component from Route.js base on the URL **/}
            <div className="container">
                <Outlet />
            </div>
            {/** Renders component from Route.js base on the URL **/}
        </UserContext.Provider>
    )
};

export default Private;