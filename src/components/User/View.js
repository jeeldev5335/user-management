import React, { useEffect } from "react";

const ViewData = () => {

    useEffect(() => {
        urlData();
    },[])

    const urlData = () => {
        const urlString = window.location.href;
        console.log(urlString);
        const url = new URL(urlString);
        console.log(url);
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <td colSpan="2">Details:</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Mark</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ViewData;