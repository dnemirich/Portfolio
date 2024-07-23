import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"}>
                <Icon iconId={"vscode"}/>
                <Icon iconId={"js"}/>
                <Icon iconId={"css"}/>
                <Icon iconId={"html"}/>
                <Icon iconId={"greensock"}/>
                <Icon iconId={"vector"}/>
                <Icon iconId={"github"}/>
                <Icon iconId={"git"}/>
                <Icon iconId={"react"}/>
                <Icon iconId={"sass"}/>
                <Icon iconId={"bootstrap"}/>
                <Icon iconId={"tailwind"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #ffe5e4;
    min-height: 50vh;
`;