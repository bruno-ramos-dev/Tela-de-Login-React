import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #723373;
    color: #FFFFFF;
    cursor: pointer;

    border: 1px solid #723373;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
    }

    &:disabled {
        opacity: 0.3;
    }
`