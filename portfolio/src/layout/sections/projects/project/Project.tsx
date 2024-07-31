import React from 'react';
import styled from 'styled-components';
import {theme} from "../../../../styles/Theme";

type ProjectPropsType = {
    title: string,
    description: string,
    src: string,
    alt: string,
    direction?: string,
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ProjectContent>
                <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectDescription>{props.description}</ProjectDescription>
                <Link href={"#"}>View Project</Link>
            </ProjectContent>
            <ImageWrapper>
                <Image src={props.src} alt={props.alt}/>
            </ImageWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    display: flex;
    align-items: center;

    width: 992px;
    height: 524px;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
`;

const ProjectContent = styled.div`
    width: 50%;
    padding-left: 50px;
    padding-right: 39px;
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ProjectTitle = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
`;

const ProjectDescription = styled.p`
    text-align: left;
    margin: 24px 0;
    font-size: 18px;
    color: ${theme.colors.secondaryFontColor};

`;

const ImageWrapper = styled.div`
    height: 526px;
    width: 50%;
    overflow: hidden;

    border-bottom-right-radius: 24px;
    border-top-right-radius: 24px;

`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const Link = styled.a`
    border: 1px solid ${theme.colors.primaryFontColor};
    border-radius: 24px;
    display: flex;
    padding: 8px 24px;

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
`;