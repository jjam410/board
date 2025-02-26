/**@jsxImportSource @emotion/react */
import { api } from '../../configs/axiosConfig';
import { useUpdateProfileImgMutation } from '../../mutations/accountMutation';
import { useUserMeQuery } from '../../queries/userQuery';
import * as s from './style';
import React, { useEffect, useState } from 'react';

function AccountPage(props) {
    const loginUser = useUserMeQuery();
    const updateProfileImgMutation = useUpdateProfileImgMutation();
    const [ nicknameValue, setNickNameValue ] = useState("");

    useEffect(() => {
        setNickNameValue(loginUser?.data?.data.nickname);
    }, [loginUser.isFetched]);

    const handleProfileImgFileOnChange = async (e) => {
        console.log({element: e.target});
        const fileList = e.target.files;
        const file = fileList[0];

        const formData = new FormData();
        formData.append("file", file);

        await updateProfileImgMutation.mutateAsync(formData);
        loginUser.refetch();
    }

    return (
        <div css={s.container}>
            <h2 css={s.title}>Account</h2>
            <div css={s.accountBox}>
                <label css={s.profileImgBox}>
                    {
                        loginUser.isLoading || 
                        <img src={`http://localhost:8080/image/user/profile/${loginUser?.data?.data.profileImg}`} alt="" />
                    }
                    <input type="file" onChange={handleProfileImgFileOnChange} />
                </label>
                <div>
                    <h3 css={s.nicknameTitle}>Preferred nickname</h3>
                    <div>
                        <input css={s.textInput} type="text" value={nicknameValue} />
                    </div>
                    <button css={s.saveButton}>Save nickname</button>
                </div>
            </div>
            
            <h2 css={s.title}>Account security</h2>
            <div>
                <div css={s.itemGroup}>
                    <div>
                        <h3 css={s.subTitle}>Email</h3>
                        <p css={s.subContent}>{loginUser?.data?.data.email}</p>
                    </div>
                    <button css={s.borderButton}>Change email</button>
                </div>
                <div css={s.itemGroup}>
                    <div>
                        <h3 css={s.subTitle}>password</h3>
                        <p css={s.subContent}>계정에 로그인할 영구 비밀번호를 설정합니다.</p>
                    </div>
                    <button css={s.borderButton}>Change password</button>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;