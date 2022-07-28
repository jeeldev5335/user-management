import React, { useState } from "react";
import PublicNavbar from "../Navbar/PublicNavbar";
import { Link } from "react-router-dom";

const LoginPage = () => {

    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setData((preData) => {
            return { ...preData, [event.target.name]: event.target.value }
        })
    }

    const validateLogin = () => {

        const formError = {};

        if (!data.email) {
            formError['email'] = 'Please enter the email.';
        }

        if (!data.password) {
            formError['password'] = 'Please enter the password.';
        }

        setErrors(formError);
    }

    return (
        <React.Fragment>
            <PublicNavbar />
            <div className="container">
                <h2 className="text-center my-3">Login</h2>
                <div className="col-md-4 offset-md-4">
                    <form className="row g-3 my-4" onSubmit={e => e.preventDefault()}>
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label required">Email</label>
                            <input type="text" className="form-control" id="email" name="email" onChange={handleChange} />
                            {errors.name !== '' && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="password" className="form-label required">Password</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={handleChange} />
                            {errors.password !== '' && <div className="text-danger">{errors.password}</div>}
                        </div>
                        <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-primary" onClick={validateLogin}>Sign in</button>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="d-inline m-2">
                                <Link to="/forgotpassword">Forgot Password?</Link>
                            </div>
                            <div className="d-inline m-2">
                                <Link to="/register">Register</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};

export default LoginPage;