import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import {FlexWrapper} from "../../../components/FlexWrapper";
import project1 from "../../../assets/images/proj-1-cropped.png"
import project2 from "../../../assets/images/proj-2-cropped.png"
import project3 from "../../../assets/images/proj-3-cropped.png"
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"} gap={"80px"}>
                    <Project title={"Project Name"}
                             description={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."}
                             src={project1} alt={"Project 1"}/>
                    <Project title={"Project Name"}
                             description={"What was your role, your deliverables, if the project was personal, freelancing."}
                             src={project2} alt={"Project 2"}/>
                    <Project title={"Project Name"}
                             description={"You can also add in this description the type of the project, if it was for web, mobile, electron."}
                             src={project3} alt={"Project 3"}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    padding-bottom: 144px;
`;