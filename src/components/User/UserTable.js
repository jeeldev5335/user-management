import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../api';


const UserTable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        api.get("/api/users")
            .then((response) => {
                const { data } = response;
                // console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const redirectToView = (id) => {
        //window.location.href=`/user/${id}`
    }


    return (
        <React.Fragment>
            <div className="border-bottom">
                <h2 className="text-center my-5">User List</h2>
            </div>
            <div className="table-responsive-md">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th colSpan="7">Data:</th>
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
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th>{item.id}</th>
                                    <td>{item.name + " " + item.middlename + " " + item.surname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.birth_date}</td>
                                    <td>{item.country}</td>
                                    <td>
                                        <a className="btn btn-info btn-sm me-4" onClick={() => redirectToView(item.id)}><span className="bi-eye-fill"></span></a>
                                        <a className="btn btn-warning btn-sm me-4"><span className="bi-pencil-square"></span></a>
                                        <a className="btn btn-danger btn-sm"><span className="bi-trash-fill"></span></a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default UserTable;