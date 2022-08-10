import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forgotpass = () => {

    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setData((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value };
        });
    };

    const validateForgotPassword = () => {
        const formError = {};

        if (!data.email){
            formError['email'] = 'Please enter the email.';
        }

        setErrors(formError);
    };

    return (
        <React.Fragment>
            <div className="container">
                <h2 className="text-center my-3">Forgot Password</h2>
                <p className="text-center">Enter your email to reset password</p>
                <div className="col-md-4 offset-md-4">
                    <form className="row g-3 my-4" onSubmit={e => e.preventDefault()}>
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label required">Email</label>
                            <input type="text" className="form-control" id="email" name="email" onChange={handleChange} />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-primary" onClick={validateForgotPassword} >Reset password</button>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="d-inline m-2">
                                <Link to="/">Back</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Forgotpass;