import styled from "styled-components";
import {theme} from "../styles/Theme";

type LinkPropsType = {
    bgColor?: string,
    bordered?: boolean,
}

export const Link = styled.a<LinkPropsType>`
    display: flex;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    align-items: center;

    border-radius: 8px;
    padding: 0 24px;
    width: 100%;
    height: 43px;

    background-color: ${props => props.bgColor};
    border: ${props => props.bordered ? `2px solid ${theme.colors.primaryFontColor}` : `none`};
`;