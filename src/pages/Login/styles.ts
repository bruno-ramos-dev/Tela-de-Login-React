import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #22272E;
`

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 420px;
    background-color: #C8BFE7;

    border-radius: 8px;
    padding: 20px;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
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
    }
`

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color: #723373;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #C8BFE7;
`

export const Spacing = styled.div`
    margin: 10px 0;
`