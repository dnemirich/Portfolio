import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    
    align-self: flex-end;

    border-radius: 8px;
    padding: 8px 24px;
    background-color: ${theme.colors.accentColor};

`;
