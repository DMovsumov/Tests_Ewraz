import styled, { css } from "styled-components";

export const ButtonWrap = styled.button`
    height: 60px;
    font-size: 30px;
    outline: none;
    border-radius: 10px;
    background-color: gray;
    border: none;
    cursor: pointer;
    
    :active {
        opacity: 0.8;
    }
    
    ${({ disabled }) => disabled && css`
        opacity: 0.5;
        cursor: not-allowed;
    `}
`;
