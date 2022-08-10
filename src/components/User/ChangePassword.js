import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../Service/UserService";

const ChangePassword = () => {

    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        setData((prevalue) => {
            return { ...prevalue, [event.target.name]: event.target.value };
        })
    }

    const validate = () => {
        const formError = {};

        if (!data.current_password) {
            formError['current_password'] = "Please enter the password";
        }

        if (!data.password) {
            formError['password'] = "Please enter the password";
        }
        else if (!data.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)) {
            formError['password'] = "Password must be 8-16 character and contain uppercase,number and special character.";
        }
        else if (data.password == data.current_password) {
            formError['password'] = "New password and current password are same, Please enter diffrent password";
        }

        if (!data.password_confirmation) {
            formError['password_confirmation'] = "Please enter the password";
        }
        else if (!(data.password_confirmation == data.password)) {
            formError['password_confirmation'] = "Confirm password and new password are not same";
        }

        setError(formError);

        if (Object.keys(formError).length == '0') {
            const obj = new UserService();

            obj.changePassword(data).then((response) => {
                const { status } = response;
                if (status == "200") {
                    alert("Password Updated Successfully!");
                    navigate("/");
                }
            }).catch((error) => {
                console.log(error);
                setError(error);
            })
        }
    }


    return (
        <div className="container">
            <h2 className="text-center my-3">Change Password</h2>
            <div className="col-md-4 offset-md-4">
                <form className="row g-3 my-4" onSubmit={e => e.preventDefault()}>
                    <div className="col-md-12">
                        <label htmlFor="current_password" className="form-label required">Current-Password</label>
                        <input type="password" className="form-control" id="current_password" name="current_password" onChange={handleChange} />
                        {error.current_password && <div className="text-danger">{error.current_password}</div>}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="password" className="form-label required">New Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={handleChange} />
                        {error.password && <div className="text-danger">{error.password}</div>}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="password_confirmation" className="form-label required">Confirm Password</label>
                        <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" onChange={handleChange} />
                        {error.password_confirmation && <div className="text-danger">{error.password_confirmation}</div>}
                    </div>
                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary" onClick={validate} >Change password</button>
                    </div>
                    <div className="col-md-12 text-center">
                        <div className="d-inline m-2">
                            <Link to="/">Back</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword;