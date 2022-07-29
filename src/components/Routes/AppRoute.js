import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from '../Layout/Private';
import Public from '../Layout/Public';
import Error from '../Error/Error';
import Form from '../User/Form';
import Forgotpass from '../Auth/Forgotpassword';
import LoginPage from '../Auth/LoginPage';
import UserTable from '../User/UserTable'
import { hasToken } from '../../utils';
import ViewData from '../User/View';

const AppRoute = () => {

    const getLayoutComponent = () => {
        return hasToken() ? <Private /> : <Public />
    }

    const getDefaultComponent = () => {
        return hasToken() ? <UserTable /> : <LoginPage />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={getLayoutComponent()}>
                    <Route path='/' element={getDefaultComponent()}></Route>
                    <Route path='/register' element={<Form />}></Route>
                    <Route path='/forgot-password' element={<Forgotpass />}></Route>
                    <Route path='/user/3' element={<ViewData />}></Route>
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;