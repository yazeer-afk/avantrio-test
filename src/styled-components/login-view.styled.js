import styled from 'styled-components';

export const getStyledLoginView = () => styled.section`
    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const getStyledFormContainer = () => styled.div`
    width: 30%;
    height: 45%;
    
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0.1vw 0.1vh 0.5em  rgba(0, 0, 0, 0.05);
    padding: 4vh 3vw;

    display: flex;
    flex-direction: column;
    row-gap: 2vh;

    .title {
        font-size: 3em;
        margin: 0;
    }

    .subtitle {
        font-size: 1.5em;
        font-weight: 300;
        margin-top: 0;
    }
`

export const getStyledInputContainer = () => styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1vh;
    font-size: 1em;

    input {
        font-size: 1.2em;
        padding: 1vh 1vw;
        margin-top: 2vh;

        border: 2px solid #006C84;
        border-radius: 5px;
    }

    span {
        color: #FF674A;
    }
`

export const getStyledSignInButton = () => styled.button`
    width: 100%;
    padding: 1vh 0;
    margin-top: 2vh;
    font-size: 1.5em;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: #253244;
    color: #fdfdfd;
`