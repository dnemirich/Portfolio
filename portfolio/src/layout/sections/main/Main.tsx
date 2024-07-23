import React from 'react';
import styled from "styled-components"
import {FlexWrapper} from "../../../components/FlexWrapper";

import photo from "../../../assets/images/photo.webp"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <FlexWrapper direction={"column"}>
                    <MainTitle>Software Developer</MainTitle>
                    <Name>Hello, my name is Vahid Navazan</Name>
                    <p>Short text with details about you, what you do or your professional career. You can add more
                        information on the about page.</p>
                    <FlexWrapper justify={"space-around"}>
                        <Link href={"#"}>Projects</Link>
                        <Link href={"#"}>LinkedIn</Link>
                    </FlexWrapper>
                </FlexWrapper>
                <Photo src={photo} alt={"Photo"}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    min-height: 100vh;
    background-color: #fff0ae;
`;

const MainTitle = styled.h1``;

const Name = styled.h2``;

const Photo = styled.img`
    width: 100%;
    height: 629px;
    object-fit: cover;
`;

const Link = styled.a``;