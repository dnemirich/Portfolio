import React from 'react';
import styled from 'styled-components';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <TextLogo>Daria Nemirich</TextLogo>
                    <Menu>
                        <li><a href={"#"}>About</a></li>
                        <li><a href={"#"}>Projects</a></li>
                        <li><a href={"#"}>Contacts</a></li>
                    </Menu>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 12px;
    position: relative;
    z-index: 100;
`;

const Menu = styled.ul`
    display: flex;
    gap: 48px;

    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 18px;

    a {
        color: ${theme.colors.primaryFontColor};

        &:hover {
            text-decoration: underline solid;
        }
    }


`;

const TextLogo = styled.a`
    font-family: "Comfortaa", sans-serif;
    font-weight: 700;
    font-size: 18px;
`