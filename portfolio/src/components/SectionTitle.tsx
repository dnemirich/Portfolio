import styled from 'styled-components';
import {theme} from "../styles/Theme";

type SectionTitlePropsType = {
    marginBottom?: string,
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-size: 48px;
    
    position: relative;
    margin-bottom: ${props => props.marginBottom || "88px"};
    
    &::before{
        position: absolute;
        left: 50%;
        bottom: -8px;
        transform: translateX(-50%);
        
        content: "";
        display: inline-block;
        width: 100px;
        height: 4px;
        border-radius: 2px;
        background-color: ${theme.colors.accentColor};
    }
`;