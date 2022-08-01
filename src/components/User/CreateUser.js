import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allowOnlyAlphabets, allowOnlyNumbers, hobbiesOptions } from "../../utils";
import CheckboxGroup from "../controls/CheckboxGroup";

const CreateUser = () => {

    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const handleAlphabets = (event) => { allowOnlyAlphabets(event) };
    const handleNumbers = (event) => { allowOnlyNumbers(event) };

    const handleChange = (event) => {
        setData((preData) => {
            return { ...preData, [event.target.name]: event.target.value }
        })
    }

    return (
        <div className="container">
            <div className="col-md-6 offset-md-3">
                <form className="row g-3 my-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="row border-bottom">
                        <div className="col-8">
                            <h3>Create User</h3>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/" className="btn btn-primary btn-sm">Back</Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="name" className="form-lebel required" >First Name</label>
                        <input type="text" className="form-control" name="name" id="name" onKeyDown={handleAlphabets} onChange={handleChange} />
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="middlename" className="form-lebel required" >Middle Name</label>
                        <input type="text" className="form-control" name="middlename" id="middlename" onKeyDown={handleAlphabets} onChange={handleChange} />
                        {errors.middlename && <div className="text-danger">{errors.middlename}</div>}
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="surname" className="form-lebel required" >Surame</label>
                        <input type="text" className="form-control" name="surname" id="surname" onKeyDown={handleAlphabets} onChange={handleChange} />
                        {errors.surname && <div className="text-danger">{errors.surname}</div>}
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="email" className="form-lebel required" >Email</label>
                        <input type="text" className="form-control" name="email" id="email" onChange={handleChange} />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="phone" className="form-lebel required" >Phone Number</label>
                        <input type="text" className="form-control" name="phone" id="phone" maxLength="10" onKeyDown={handleNumbers} onChange={handleChange} />
                        {errors.phone && <div className="text-danger">{errors.phone}</div>}
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="male" className="form-lebel mb-3 required">Gender</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="male" value="Male" onChange={handleChange} />
                                <label className="form-check-lebel" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="female" value="Female" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                        </div>
                        {errors.gender && <div className="text-danger">{errors.gender}</div>}
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="birth_date" className="form-lebel required">Birth Date</label>
                        <input type="date" className="form-control uppercase" name="birth_date" id="birth_date" onChange={handleChange} />
                        {errors.birth_date && <div className="text-danger">{errors.birth_date}</div>}
                    </div>
                    <div className="col-lg-12">
                        <label htmlFor="address_line1" className="form-label required">Address</label>
                        <input type="text" className="form-control" id="address_line1" name="address_line1" onChange={handleChange} />
                        {errors.address_line1 && <div className="text-danger">{errors.address_line1}</div>}
                    </div>
                    <div className="col-lg-8">
                        <label htmlFor="address_line2" className="form-label required">Address 2</label>
                        <input type="text" className="form-control" id="address_line2" name="address_line2" onChange={handleChange} />
                        {errors.address_line2 && <div className="text-danger">{errors.address_line2}</div>}
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="country" className="form-label required">Country</label>
                        <select id="country" name="country" className="form-select" onChange={handleChange} >
                            <option value="">Choose...</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                        </select>
                        {errors.country && <div className="text-danger">{errors.country}</div>}
                    </div>
                    <div className="col-lg-5">
                        <label htmlFor="state" className="form-label required">State</label>
                        <select id="state" name="state" className="form-select" onChange={handleChange} >
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
                        {errors.state && <div className="text-danger">{errors.state}</div>}
                    </div>
                    <div className="col-lg-5">
                        <label htmlFor="city" className="form-label required">City</label>
                        <input type="text" className="form-control" id="city" name="city" onKeyDown={handleAlphabets} onChange={handleChange} />
                        {errors.city && <div className="text-danger">{errors.city}</div>}
                    </div>
                    <div className="col-lg-2">
                        <label htmlFor="zipcode" className="form-label required">Zip Code</label>
                        <input type="text" className="form-control" id="zipcode" name="zipcode" minLength="5" maxLength="6" onKeyDown={handleNumbers} onChange={handleChange} />
                        {errors.zipcode && <div className="text-danger">{errors.zipcode}</div>}
                    </div>
                    <div className="col-lg-12">
                        <label htmlFor="hobby" className="form-label mb-3 required">Hobby</label>
                        <CheckboxGroup options={hobbiesOptions} selectedOptions={[]} handleChange={() => {}} />
                        {errors.hobby && <div className="text-danger">{errors.hobby}</div>}
                    </div>
                    <div className="col-lg-12 text-center">
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;