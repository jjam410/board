/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';
import { FiChevronsLeft } from "react-icons/fi";
import { basicButton } from '../../../styles/buttons';
import { useRecoilState } from 'recoil';
import { mainSidebarIsOpenState } from '../../../atoms/mainSidebar/mainSidebarAtom';

function MainSidebar(props) {
    const [ isOpen, setOpen ] = useRecoilState(mainSidebarIsOpenState);

    const handleSidebarClose = () => {
        setOpen(false);
    }

    return (
        <div css={s.layout(isOpen)}>
            <div css={s.container}>
                <div>
                    <button css={basicButton} onClick={handleSidebarClose}><FiChevronsLeft /></button>
                </div>
            </div>
        </div>
    );
}

export default MainSidebar;