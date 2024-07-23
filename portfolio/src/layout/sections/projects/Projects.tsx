import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import {FlexWrapper} from "../../../components/FlexWrapper";
import project1 from "../../../assets/images/proj-1.webp"
import project2 from "../../../assets/images/proj-2.webp"
import project3 from "../../../assets/images/proj-3.webp"

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Project  title={"Project Name"} description={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} src={project1} alt={"Project 1"}/>
                <Project title={"Project Name"} description={"What was your role, your deliverables, if the project was personal, freelancing."} src={project2} alt={"Project 2"}/>
                <Project title={"Project Name"} description={"You can also add in this description the type of the project, if it was for web, mobile, electron."} src={project3} alt={"Project 3"}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #bdcbea;`;