import React, { useState } from "react";
import PublicNavbar from "../Navbar/PublicNavbar";
import { Link } from "react-router-dom";
import CheckboxGroup from "../controls/CheckboxGroup";
import api from '../../api';
import { setToken } from '../../utils';


const Form = () => {

    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setData((preData) => {
            return { ...preData, [event.target.name]: event.target.value }
        });
    };

    const handleNumber = (event) => {

        if (event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) {
            event.preventDefault();
        }
        return true;
    }

    const handleAlphabets = (event) => {

        if (event.keyCode > 31 && (event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 97 || event.keyCode > 122)) {
            event.preventDefault();
        }
        return true;
    }

    const hobbiesOptions = [
        {
            name: 'Cricket',
            value: 'Cricket'
        },
        {
            name: 'Volleyball',
            value: 'Volleyball'
        },
        {
            name: 'Hockey',
            value: 'Hockey'
        },
        {
            name: 'Football',
            value: 'Football'
        }
    ];

    const { hobby } = data;

    const handleHobbyChange = (hobby) => {
        setData((preData) => {
            return { ...preData, ['hobby']: hobby }
        });
    }

    const validateForm = () => {

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


        if (!data.password) {

            formErrors['password'] = 'Please enter the password.';

        }
        else if (!data.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)) {

            formErrors['password'] = 'Password must be 8-16 character and contain uppercase,number and special character.'

        }


        if (!data.password_confirmation) {

            formErrors['password_confirmation'] = 'Please Re-enter the password.';

        }
        else if (!(data.password_confirmation == data.password)) {

            formErrors['password_confirmation'] = 'Password and Confirm password not same.'

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
            console.log("Validation Done");

            api.post("/api/register", hydrate(data))
                .then((response) => {
                    //console.log("Take response", response);
                    const { token } = response.data;
                    setToken(token);
                })
                .catch((err) => {
                    const { response } = err;
                    const { data } = response;
                    const { errors } = data;
                    // console.log(err)
                    setErrors(errors);
                });
        }

    };

    const hydrate = params => {
        return {
            ...params,
            hobby: data && data.hobby && data.hobby.join(','),
        }
    }


    return (
        <React.Fragment>
            <PublicNavbar />
            <div className="container">
                <h2 className="text-center my-3">Registration Form</h2>
                <div className="col-md-6 offset-md-3">
                    <form className="row g-3 my-4" onSubmit={e => e.preventDefault()}>
                        <div className="col-lg-4">
                            <label htmlFor="name" className="form-label required">First Name</label>
                            <input type="text" className="form-control" id="name" name="name" onKeyDown={handleAlphabets} onChange={handleChange} />
                            {errors.name !== '' && <div className="text-danger">{errors.name}</div>}
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="middlename" className="form-label required">Middle Name</label>
                            <input type="text" className="form-control" id="middlename" name="middlename" onKeyDown={handleAlphabets} onChange={handleChange} />
                            {errors.middlename !== '' && <div className="text-danger">{errors.middlename}</div>}
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="surname" className="form-label required">Surname</label>
                            <input type="text" className="form-control" id="surname" name="surname" onKeyDown={handleAlphabets} onChange={handleChange} />
                            {errors.surname !== '' && <div className="text-danger">{errors.surname}</div>}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="email" className="form-label required">Email</label>
                            <input type="text" className="form-control" id="email" name="email" onChange={handleChange} />
                            {errors.email !== '' && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="phone" className="form-label required">Phone Number</label>
                            <input type="text" className="form-control" id="phone" name="phone" maxLength="10" onKeyDown={handleNumber} onChange={handleChange} />
                            {errors.phone !== '' && <div className="text-danger">{errors.phone}</div>}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="male" className="form-label mb-3 required">Gender</label>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="male" value="Male" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="female" value="Female" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                            </div>
                            {errors.gender !== '' && <div className="text-danger">{errors.gender}</div>}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="birth_date" className="form-label required">Birth Date</label>
                            <input type="date" className="form-control uppercase" id="birth_date" name="birth_date" onChange={handleChange} />
                            {errors.birth_date !== '' && <div className="text-danger">{errors.birth_date}</div>}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="password" className="form-label required">Password</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={handleChange} />
                            {errors.password !== '' && <div className="text-danger">{errors.password}</div>}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="password_confirmation" className="form-label required">Confirm Password</label>
                            <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" onChange={handleChange} />
                            {errors.password_confirmation !== '' && <div className="text-danger">{errors.password_confirmation}</div>}
                        </div>
                        <div className="col-lg-12">
                            <label htmlFor="address_line1" className="form-label required">Address</label>
                            <input type="text" className="form-control" id="address_line1" name="address_line1" onChange={handleChange} />
                            {errors.address_line1 !== '' && <div className="text-danger">{errors.address_line1}</div>}
                        </div>
                        <div className="col-lg-8">
                            <label htmlFor="address_line2" className="form-label required">Address 2</label>
                            <input type="text" className="form-control" id="address_line2" name="address_line2" onChange={handleChange} />
                            {errors.address_line2 !== '' && <div className="text-danger">{errors.address_line2}</div>}
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="country" className="form-label required">Country</label>
                            <select id="country" name="country" className="form-select" onChange={handleChange}>
                                <option value="">Choose...</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                            </select>
                            {errors.country !== '' && <div className="text-danger">{errors.country}</div>}
                        </div>
                        <div className="col-lg-5">
                            <label htmlFor="state" className="form-label required">State</label>
                            <select id="state" name="state" className="form-select" onChange={handleChange}>
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
                            {errors.state !== '' && <div className="text-danger">{errors.state}</div>}
                        </div>
                        <div className="col-lg-5">
                            <label htmlFor="city" className="form-label required">City</label>
                            <input type="text" className="form-control" id="city" name="city" onKeyDown={handleAlphabets} onChange={handleChange} />
                            {errors.city !== '' && <div className="text-danger">{errors.city}</div>}
                        </div>
                        <div className="col-lg-2">
                            <label htmlFor="zipcode" className="form-label required">Zip Code</label>
                            <input type="text" className="form-control" id="zipcode" name="zipcode" minLength="5" maxLength="6" onKeyDown={handleNumber} onChange={handleChange} />
                            {errors.zipcode !== '' && <div className="text-danger">{errors.zipcode}</div>}
                        </div>
                        <div className="col-lg-12">
                            <label htmlFor="hobby" className="form-label mb-3 required">Hobby</label>
                            <CheckboxGroup options={hobbiesOptions} selectedOptions={hobby} handleChange={handleHobbyChange} />
                            {errors.hobby !== '' && <div className="text-danger">{errors.hobby}</div>}
                        </div>
                        <div className="col-lg-12 text-center">
                            <button type="submit" className="btn btn-primary" onClick={validateForm} >Register</button>
                        </div>
                        <div className="col-lg-12 text-center">
                            <Link to="/">Sign in?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Form;