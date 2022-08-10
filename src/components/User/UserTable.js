import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserService from "../Service/UserService";
import { UserContext } from "../Layout/Private";

const UserTable = () => {
    const me = useContext(UserContext);
    console.log('me', me);

    const [data, setData] = useState([]);

    useEffect(() => { getData(); }, [])

    const getData = () => {
        const obj = new UserService();
        obj.getAllUsers().then((response) => {
            setData(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleDelete = (id) => {
        const object = new UserService();

        if (window.confirm("Are you sure to delete this record?")) {
            object.deleteUser(id).then(() => {
                getData();
            }).catch((error) => {
                alert(error);
            })
        }
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
                                <Link className="btn btn-primary m-2" to="/create-user">
                                    <i className="bi bi-plus-square-dotted me-1"></i>
                                    ADD New User
                                </Link>
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
                                        <Link className="btn btn-outline-info btn-sm me-4" to={`/user/view/${item.id}`} style={{ pointerEvents: me.id == item.id ? 'none' : ''}}><span className="bi-eye-fill"></span></Link>
                                        <Link className="btn btn-outline-warning btn-sm me-4" to={`/user/update/${item.id}`} style={{ pointerEvents: me.id == item.id ? 'none' : '' }}><span className="bi-pencil-square"></span></Link>
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(item.id)} disabled={me.id == item.id}><span className="bi-trash-fill"></span></button>
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