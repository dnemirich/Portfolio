import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import wave from "../../assets/images/footer-wave.svg"
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SocialList>
                        <SocialItem>
                            <SocialLink href={"#"}><Icon iconId={"instagram"} width={"48px"} height={"48px"} viewBox={"0 0 48px 48px"}/></SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href={"#"}><Icon iconId={"linkedin"} width={"48px"} height={"48px"} viewBox={"0 0 48px 48px"}/></SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href={"#"}><Icon iconId={"email"} width={"48px"} height={"48px"} viewBox={"0 0 48px 48px"}/></SocialLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright>Madelyn Torff 2021</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    position: relative;
    z-index: 100;
    
    &::after {
        position: absolute;
        content: "";
        background-image: url(${wave});
        z-index: -1;
        width: 100%;
        height: 344px;
        left: 0;
        top: 0;
        
    }
`;

const SocialList = styled.ul`
    display: flex;
    padding-top: 5px;
    list-style: none;
    gap: 24px;
    
    margin-bottom: 32px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.secondaryFontColor};

`;
