import React, { useEffect, useState } from "react";


const CheckboxGroup = ({ options, selectedOptions, handleChange }) => {

    const [data, setData] = useState([]);

    const handleTheChange = (event, isChecked) => {
        const value = event.target.value;
        if (isChecked) {
            setData(prevData => {
                return [...prevData, value];
            });
        } else {
            setData(data.filter(el => el && el !== value));
        }
    }

    useEffect(() => {
        handleChange(data);
    }, [data])


    return (
        <div>
            {options.map(ele => {
                const isChecked = selectedOptions && selectedOptions.includes(ele.value) ? true : false;
                return (<div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="hobby" id={ele.value} value={ele.value} checked={isChecked} onChange={(event) => handleTheChange(event, !isChecked)} />
                    <label className="form-check-label" htmlFor={ele.value}>{ele.name}</label>
                </div>)
            })}
        </div>
    )
}

export default CheckboxGroup;