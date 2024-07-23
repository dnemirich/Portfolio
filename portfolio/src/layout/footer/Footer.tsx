import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <SocialList>
                    <SocialItem>
                        <SocialLink href={"#"}><Icon iconId={"instagram"}/></SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}><Icon iconId={"linkedin"}/></SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}><Icon iconId={"email"}/></SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>Madelyn Torff 2021</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #a2edef;
    min-height: 20vh;
`;

const SocialList = styled.ul`
    display: flex;
    list-style: none;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small``;
