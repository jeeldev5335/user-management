import React from "react";
import CheckboxGroup from "../controls/CheckboxGroup";
import { hobbiesOptions } from "../../utils";
import { Link } from "react-router-dom";

const Update = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="col-md-6 offset-md-3">
                    <form className="row g-3 my-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="row border-bottom">
                            <div className="col-8">
                                <h3>Edit User</h3>
                            </div>
                            <div className="col-4 text-center">
                                <Link to="/" className="btn btn-primary">Back</Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="name" className="form-lebel required" >First Name</label>
                            <input type="text" className="form-control" name="name" id="name" />
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="middlename" className="form-lebel required" >Middle Name</label>
                            <input type="text" className="form-control" name="middlename" id="middlename" />
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="surname" className="form-lebel required" >Surame</label>
                            <input type="text" className="form-control" name="surname" id="surname" />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="email" className="form-lebel required" >Email</label>
                            <input type="text" className="form-control" name="email" id="email" />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="phone" className="form-lebel required" >Phone Number</label>
                            <input type="text" className="form-control" name="phone" id="phone" maxLength="10" />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="male" className="form-lebel mb-3 required">Gender</label>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="male" value="Male" />
                                    <label className="form-check-lebel" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="female" value="Female" />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="birth_date" className="form-lebel required">Birth Date</label>
                            <input type="date" className="form-control uppercase" name="birth_date" id="birth_date" />
                        </div>
                        <div className="col-lg-12">
                            <label htmlFor="address_line1" className="form-label required">Address</label>
                            <input type="text" className="form-control" id="address_line1" name="address_line1" />
                        </div>
                        <div className="col-lg-8">
                            <label htmlFor="address_line2" className="form-label required">Address 2</label>
                            <input type="text" className="form-control" id="address_line2" name="address_line2" />
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="country" className="form-label required">Country</label>
                            <select id="country" name="country" className="form-select" >
                                <option value="">Choose...</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                            </select>
                        </div>
                        <div className="col-lg-5">
                            <label htmlFor="state" className="form-label required">State</label>
                            <select id="state" name="state" className="form-select" >
                                <option value="">Choose...</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="New York">New York</option>
                                <option value="Florida">Florida</option>
                                <option value="Washington">Washington</option>
                                <option value="Ontario">Ontario</option>
                                <option value="Alberta">Alberta</option>
                            </select>
                        </div>
                        <div className="col-lg-5">
                            <label htmlFor="city" className="form-label required">City</label>
                            <input type="text" className="form-control" id="city" name="city" />
                        </div>
                        <div className="col-lg-2">
                            <label htmlFor="zipcode" className="form-label required">Zip Code</label>
                            <input type="text" className="form-control" id="zipcode" name="zipcode" minLength="5" maxLength="6" />
                        </div>
                        <div className="col-lg-12">
                            <label htmlFor="hobby" className="form-label mb-3 required">Hobby</label>
                            <CheckboxGroup options={hobbiesOptions} selectedOptions={[]} handleChange={() => { }} />
                        </div>
                        <div className="col-lg-12 text-center">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Update;