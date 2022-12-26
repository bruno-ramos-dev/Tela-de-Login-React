import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #FFFFFF;

    border: 1px solid #723373;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;

    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background: transparent;
        border: 0;
        outline: none;
        color: #512452;
        font-size: 15px;
    }

    &:hover {
        outline: 3px ridge rgba(170, 50, 220, .6);
    }

    input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px #C8BFE7 inset;
    box-shadow: 0 0 0 50px #C8BFE7 inset;
    -webkit-text-fill-color: #723373;
    }
`

export const ErrorMessage = styled.p`
    color: #F00000;
    font-size: 12px;
    font-weight: 700;
    margin-top: 8px;
    margin-left: 10px;
`