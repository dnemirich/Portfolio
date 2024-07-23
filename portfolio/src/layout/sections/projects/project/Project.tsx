import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ProjectPropsType = {
    title: string,
    description: string,
    src: string,
    alt: string,
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction={"column"}>
                <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectDescription>{props.description}</ProjectDescription>
                <Link href={"#"}>View Project</Link>
            </FlexWrapper>
            <Image src={props.src} alt={props.alt}/>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    display: flex;
    align-items: center;
    width: 992px;

    background-color: #e4abef;
`;

const ProjectTitle = styled.h3``;

const ProjectDescription = styled.p``;

const Image = styled.img`
    height: 524px;
    width: 50%;
    object-fit: cover;
`;

const Link = styled.a``;