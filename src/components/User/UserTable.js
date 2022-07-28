import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../utils";
import api from '../../api';


const UserTable = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        handleData();
    })

    const handleData = () => {
        const token = getToken;
        api.get("/api/users", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <React.Fragment>
            <div className="border-bottom">
                <h2 className="text-center my-5">User's Data</h2>
                {/* <button type="submit" class="btn btn-primary"><span class="bi-search"></span></button> */}
            </div>
            <div className="table-responsive-md">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th colSpan="8">Data:</th>
                            <th>
                                <span>
                                    <Link className="nav-link m-2" to="register">
                                        <i className="bi bi-plus-square-dotted me-1"></i>
                                        ADD New User
                                    </Link>
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <th>Sr.no</th>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Gender</th>
                            <th>Birth Date</th>
                            <th>Country</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default UserTable;