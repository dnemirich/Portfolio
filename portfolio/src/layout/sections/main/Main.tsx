import React from 'react';
import styled from "styled-components"
import {FlexWrapper} from "../../../components/FlexWrapper";

import photo from "../../../assets/images/photo-mask.png"
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import blot from "../../../assets/images/blot.svg"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <FlexWrapper direction={"column"} align={"flex-start"}>
                    <MainTitle>Software Developer</MainTitle>
                    <Name>Hello, my name is Daria Nemirich</Name>
                    <Text>Short text with details about you, what you do or your professional career. You can add more
                        information on the about page.</Text>
                    <FlexWrapper justify={"space-around"} gap={"12px"}>
                        <Link href={"#"} bgColor={`${theme.colors.accentColor}`}>Projects</Link>
                        <Link href={"#"} bordered>LinkedIn</Link>
                    </FlexWrapper>
                </FlexWrapper>
                <PhotoWrapper>
                    <Photo src={photo} alt={"Photo"}/>
                </PhotoWrapper>

            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.main`
`;

const MainTitle = styled.h1`
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${theme.colors.accentColor};
`;

const Name = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 62px;
   text-align: left;
    color: ${theme.colors.heroTitleColor};
    
    margin: 12px 0 32px;
`;

const Text = styled.p`
    font-weight: 400;
    font-size: 24px;
    text-align: left;
    color: ${theme.colors.secondaryFontColor};
    
    padding-bottom: 32px;
`;

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        position: absolute;
        background-image: url(${blot});
        z-index: -1;
        width: 720px;
        height: 629px;
        
        top: -45px;
        left: 120px;
        
    }
`;

const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: cover;
    
    position: relative;
    left: 120px;
    bottom: 45px;
    z-index: 10;
    
`;

