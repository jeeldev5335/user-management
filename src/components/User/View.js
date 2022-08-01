import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserService from "../Service/UserService";

const ViewData = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = () => {
        const obj = new UserService();
        obj.getUser(id).then((response) => {
            setData(response);
        }).catch((error) => {
            console.log("data Error", error);
        })
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <td> <h4>Details:</h4> </td>
                        <td> <Link to="/" className="btn btn-primary btn-sm">Back</Link> </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{data.id}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{data.name + " " + data.middlename + " " + data.surname}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{data.gender}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>{data.phone}</td>
                    </tr>
                    <tr>
                        <th>Birth Date</th>
                        <td>{data.birth_date}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{data.country}</td>
                    </tr>
                    <tr>
                        <th>State</th>
                        <td>{data.state}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{data.city}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{data.address_line1 + ", " + data.address_line2}</td>
                    </tr>
                    <tr>
                        <th>ZipCode</th>
                        <td>{data.zipcode}</td>
                    </tr>
                    <tr>
                        <th>Hobby</th>
                        <td>{data.hobby}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ViewData;