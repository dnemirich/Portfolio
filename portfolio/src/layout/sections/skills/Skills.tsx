import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} gap={"96px"}>
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
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding: 144px 0;
`;