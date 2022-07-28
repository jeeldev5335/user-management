import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from '../Layout/Private';
// import Public from '../Layout/Public';
import Error from '../Error/Error';
import Form from '../User/Form';
import Forgotpass from '../Auth/Forgotpassword';

const AppRoute = () => {


    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" exact element={<Public />}></Route> */}
                <Route path="/" exact element={<Private />}></Route>
                <Route path="/register" exact element={<Form />}></Route>
                <Route path='/forgotpassword' exact element={<Forgotpass />}></Route>
                <Route path="*" element={<Error />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;