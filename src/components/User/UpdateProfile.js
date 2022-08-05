import React, { useEffect, useState } from "react";
import CheckboxGroup from "../controls/CheckboxGroup";
import { allowOnlyAlphabets, allowOnlyNumbers, deHydrateUser, hobbiesOptions } from "../../utils";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserService from "../Service/UserService";

const UpdateProfile = () => {

    const [data, setData] = useState({});
    const { id } = useParams();
    const { hobby, gender, country, state } = data;
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = () => {
        const viewObj = new UserService();
        viewObj.getUser(id).then(data => {
            const userData = deHydrateUser(data);
            setData(userData);
        });
    }

    const handleAlphabets = (event) => allowOnlyAlphabets(event);
    const handleNumbers = (event) => allowOnlyNumbers(event);

    const handleChange = (event) => {
        setData((preData) => {
            return { ...preData, [event.target.name]: event.target.value }
        })
    }

    const handleHobbyChange = (hobby) => {
        setData((preData) => {
            return { ...preData, ['hobby']: hobby }
        });
    }

    const validation = () => {
        const formErrors = {};

        if (!data.name) {
            formErrors['name'] = 'Please enter the first name.';
        }

        if (!data.middlename) {
            formErrors['middlename'] = 'Please enter the middle name.';
        }

        if (!data.surname) {
            formErrors['surname'] = 'Please enter the surname.';
        }

        if (!data.email) {
            formErrors['email'] = 'Please enter the email.';
        }
        else if (!data.email.match(/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/)) {
            formErrors['email'] = 'Please enter valid email.';
        }

        if (!data.phone) {
            formErrors['phone'] = 'Please enter the phone.';
        }
        else if (data.phone.indexOf(0) == 0) {
            formErrors['phone'] = 'Phone number is not start from 0.'
        }
        else if (data.phone.length !== 10) {
            formErrors['phone'] = 'Enter valid phone number.'
        }

        if (!data.gender) {
            formErrors['gender'] = 'Please enter the gender.';
        }

        if (!data.birth_date) {
            formErrors['birth_date'] = 'Please enter the birth date.';
        }

        if (!data.address_line1) {
            formErrors['address_line1'] = 'Please enter the address.';
        }

        if (!data.address_line2) {
            formErrors['address_line2'] = 'Please enter the address.';
        }

        if (!data.country) {
            formErrors['country'] = 'Please choose the country.';
        }

        if (!data.state) {
            formErrors['state'] = 'Please choose the state.';
        }

        if (!data.city) {
            formErrors['city'] = 'Please enter the city.';
        }

        if (!data.zipcode) {
            formErrors['zipcode'] = 'Please enter the zipcode.';
        }
        else if (data.zipcode.indexOf(0) == 0) {
            formErrors['zipcode'] = 'Zip code is not start from 0.';
        }
        else if (data.zipcode.length < 5) {
            formErrors['zipcode'] = 'Zip code must be 5-6 character long.';
        }

        if (data.hobby == '') {
            formErrors['hobby'] = 'Please select the hobby.';
        }
        else if (data.hobby.length < 2) {
            formErrors['hobby'] = 'Select at least 2 hobby.';
        }

        setErrors(formErrors);

        if (Object.keys(formErrors).length == "0") {
            const object = new UserService();

            object.changeProfile(data).then(() => {
                alert("data Update Successfully");
                navigate(`/myprofile/${id}`);
                // window.location.href = "/";
            }).catch((error) => {
                setErrors(error);
            })
        }
    }

    return (
        <div className="container">
            <div className="col-md-6 offset-md-3">
                <form className="row g-3 my-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="row border-bottom">
                        <div className="col-8">
                            <h3>Change Profile</h3>
                        </div>
                        <div className="col-4 text-center">
                            <Link to={`/myprofile/${id}`} className="btn btn-primary btn-sm">Back</Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="name" className="form-lebel required" >First Name</label>
                        <input type="text" value={data.name} className="form-control" name="name" id="name" onKeyDown={handleAlphabets} onChange={handleChange} />
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="middlename" className="form-lebel required" >Middle Name</label>
                        <input type="text" value={data.middlename} className="form-control" name="middlename" id="middlename" onKeyDown={handleAlphabets} onChange={handleChange} />
                        {errors.middlename && <div className="text-danger">{errors.middlename}</div>}
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="surname" className="form-lebel required" >Surame</label>
                        <input type="text" value={data.surname} className="form-control" name="surname" id="surname" onKeyDown={handleAlphabets} onChange={handleChange} />
                        {errors.surname && <div className="text-danger">{errors.surname}</div>}
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="email" className="form-lebel required" >Email</label>
                        <input type="text" value={data.email} className="form-control" name="email" id="email" onChange={handleChange} />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="phone" className="form-lebel required" >Phone Number</label>
                        <input type="text" value={data.phone} className="form-control" name="phone" id="phone" maxLength="10" onKeyDown={handleNumbers} onChange={handleChange} />
                        {errors.phone && <div className="text-danger">{errors.phone}</div>}
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="male" className="form-lebel mb-3 required">Gender</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" checked={gender == "Male"} name="gender" id="male" value="Male" onChange={handleChange} />
                                <label className="form-check-lebel" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" checked={gender == "Female"} name="gender" id="female" value="Female" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                        </div>
                        {errors.gender && <div className="text-danger">{errors.gender}</div>}
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="birth_date" className="form-lebel required">Birth Date</label>
                        <input type="date" value={data.birth_date} className="form-control uppercase" name="birth_date" id="birth_date" onChange={handleChange} />
                        {errors.birth_date && <div className="text-danger">{errors.birth_date}</div>}
                    </div>
                    <div className="col-lg-12">
                        <label htmlFor="address_line1" className="form-label required">Address</label>
                        <input type="text" value={data.address_line1} className="form-control" id="address_line1" name="address_line1" onChange={handleChange} />
                        {errors.address_line1 && <div className="text-danger">{errors.address_line1}</div>}
                    </div>
                    <div className="col-lg-8">
                        <label htmlFor="address_line2" className="form-label required">Address 2</label>
                        <input type="text" value={data.address_line2} className="form-control" id="address_line2" name="address_line2" onChange={handleChange} />
                        {errors.address_line2 && <div className="text-danger">{errors.address_line2}</div>}
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="country" className="form-label required">Country</label>
                        <select id="country" name="country" className="form-select" onChange={handleChange} >
                            <option value="">Choose...</option>
                            <option selected={country == "India"} value="India">India</option>
                            <option selected={country == "USA"} value="USA">USA</option>
                            <option selected={country == "Canada"} value="Canada">Canada</option>
                        </select>
                        {errors.country && <div className="text-danger">{errors.country}</div>}
                    </div>
                    <div className="col-lg-5">
                        <label htmlFor="state" className="form-label required">State</label>
                        <select id="state" name="state" className="form-select" onChange={handleChange} >
                            <option value="">Choose...</option>
                            <option selected={state == "Gujarat"} value="Gujarat">Gujarat</option>
                            <option selected={state == "IndDelhiia"} value="Delhi">Delhi</option>
                            <option selected={state == "Maharashtra"} value="Maharashtra">Maharashtra</option>
                            <option selected={state == "New York"} value="New York">New York</option>
                            <option selected={state == "Florida"} value="Florida">Florida</option>
                            <option selected={state == "Washington"} value="Washington">Washington</option>
                            <option selected={state == "Ontario"} value="Ontario">Ontario</option>
                            <option selected={state == "Alberta"} value="Alberta">Alberta</option>
                        </select>
                        {errors.state && <div className="text-danger">{errors.state}</div>}
                    </div>
                    <div className="col-lg-5">
                        <label htmlFor="city" className="form-label required">City</label>
                        <input type="text" value={data.city} className="form-control" id="city" name="city" onKeyDown={handleAlphabets} onChange={handleChange} />
                        {errors.city && <div className="text-danger">{errors.city}</div>}
                    </div>
                    <div className="col-lg-2">
                        <label htmlFor="zipcode" className="form-label required">Zip Code</label>
                        <input type="text" value={data.zipcode} className="form-control" id="zipcode" name="zipcode" minLength="5" maxLength="6" onKeyDown={handleNumbers} onChange={handleChange} />
                        {errors.zipcode && <div className="text-danger">{errors.zipcode}</div>}
                    </div>
                    <div className="col-lg-12">
                        <label htmlFor="hobby" className="form-label mb-3 required">Hobby</label>
                        <CheckboxGroup options={hobbiesOptions} selectedOptions={hobby} handleChange={handleHobbyChange} />
                        {errors.hobby && <div className="text-danger">{errors.hobby}</div>}
                    </div>
                    <div className="col-lg-12 text-center">
                        <button type="submit" className="btn btn-primary" onClick={validation}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile;