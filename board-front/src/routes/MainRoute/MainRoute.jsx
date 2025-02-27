import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AccountPage from '../../pages/AccountPage/AccountPage';
import MainSidebar from '../../components/common/MainSidebar/MainSidebar';
import MainContainer from '../../components/common/MainContainer/MainContainer';
import { useUserMeQuery } from '../../queries/userQuery';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function MainRoute(props) {
    const navigate = useNavigate();
    const loginUser = useUserMeQuery();

    useEffect(() => {
        if(loginUser.isError) {
            navigate("/auth/login");
        }
    });

    return (
        <>
            {
                loginUser.isLoading ? <></>
                :
                <>
                    <MainSidebar />
                    <MainContainer>
                        <Routes>
                            <Route path="/account/setting" element={<AccountPage />} />
                            
                            <Route path="/*" element={<NotFoundPage />} />
                        </Routes>
                    </MainContainer>
                </>
            }
        </>
    );
}

export default MainRoute;