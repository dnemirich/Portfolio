import React from 'react';
import styled from 'styled-components';
import {Icon} from "../../components/icon/Icon";

export const Header = () => {
    return (
        <StyledHeader>
            <Icon iconId={"logo"} width={"142"} height={"32"} viewBox={"0 0 142 32"}/>
            <Menu>
                <li><a href={"#"}>About</a></li>
                <li><a href={"#"}>Projects</a></li>
                <li><a href={"#"}>Contacts</a></li>
            </Menu>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #a4ec96;
`;

const Menu = styled.ul`
    display: flex;
    gap: 48px;
    
    list-style: none;
`;