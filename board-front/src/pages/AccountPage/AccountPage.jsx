/**@jsxImportSource @emotion/react */
import { useUserMeQuery } from '../../queries/userQuery';
import * as s from './style';
import React, { useEffect, useState } from 'react';

function AccountPage(props) {
    const loginUser = useUserMeQuery();
    const [ nicknameValue, setNickNameValue ] = useState("");

    useEffect(() => {
        setNickNameValue(loginUser?.data?.data.nickname);
    }, [loginUser.isFetched]);

    return (
        <div css={s.container}>
            <h2 css={s.title}>Account</h2>
            <div css={s.accountBox}>
                <label css={s.profileImgBox}>
                    <img src={`http://localhost:8080/image/user/profile/${loginUser?.data?.data.profileImg || "default.png"}`} alt="" />
                    <input type="file" />
                </label>
                <div>
                    <h3 css={s.nicknameTitle}>Preferred nickname</h3>
                    <div>
                        <input css={s.textInput} type="text" value={nicknameValue} />
                    </div>
                    <button css={s.saveButton}>저장</button>
                </div>
            </div>
            
            <h2 css={s.title}>Account security</h2>
            <div>
                <div>
                    <div>
                        <h3 css={s.subTitle}>Email</h3>
                        <p css={s.subContent}>{loginUser?.data?.data.email}</p>
                    </div>
                    <button>Change email</button>
                </div>
                <div>
                    <div>
                        <h3 css={s.subTitle}>password</h3>
                        <p css={s.subContent}>계정에 로그인할 영구 비밀번호를 설정합니다.</p>
                    </div>
                    <button>Change password</button>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;