import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage';
import JoinPage from '../../pages/JoinPage/JoinPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function AuthRoute(props) {

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AuthRoute;