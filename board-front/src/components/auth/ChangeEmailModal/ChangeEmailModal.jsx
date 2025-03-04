/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { RiCloseCircleFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import Swal from 'sweetalert2';

function ChangeEmailModal({ setOpen }) {
    const [ emailValue, setEmailValue ] = useState("");
    const [ time, setTime ] = useState(60 * 5);
    const [ isSend, setSend ] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [isSend]);

    useEffect(() => {
        if(time === 0) {
            Swal.fire({
                showConfirmButton: true,
                confirmButtonText: "확인",
                titleText: "인증 시간이 만료되었습니다.",
            }).then(() => {
                setOpen(false);
            })
        }
    }, [time]);

    const handleEmailInputOnChange = (e) => {
        setEmailValue(e.target.value);
    }

    const handleSendMailOnClick = () => {
        setTime(5);
        setSend(true);
    }

    const handleSetButtonOnClick = () => {

    }

    const handleCloseButtonOnClick = () => {
        setOpen(false);
    } 

    return (
        <div>
            <div css={s.modalTop}>
                <div onClick={handleCloseButtonOnClick}><RiCloseCircleFill /></div>
            </div>
            <div css={s.header}>
                <div css={s.headerIcon}><CgMail /></div>
                <h2 css={s.headerTitle}>Set a email address</h2>
                <p css={s.headerMessage}>변경할 이메일 주소를 입력하세요. 이후 인증 절차를 통해 이메일 변경이 가능합니다.</p>
            </div>
            <div>
                <div css={s.inputGroup}>
                    <label>Enter a new email</label>
                    <div css={s.emailInputAndSendButton}>
                        <input type="email" name='newEmail' 
                            value={emailValue} 
                            onChange={handleEmailInputOnChange} />
                        {
                            isSend
                            ? 
                            <span>{Math.floor(time / 60).toString().padStart(2, '0')}:{(time % 60).toString().padStart(2, '0')}</span>
                            :
                            <button onClick={handleSendMailOnClick}>전송</button>
                        }
                    </div>
                </div>
                <button 
                    css={s.setButton} 
                    disabled={!emailValue}
                    onClick={handleSetButtonOnClick}
                >Set a eamil address</button>
            </div>
        </div>
    );
}

export default ChangeEmailModal;