import styled from "styled-components";
import { GRAY_COLOR } from "../util/colors";

export const getStyledListCard = () => styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100%;    
    width: 40%;
    margin: 1vh 1vw;

    border-radius: 10px;
    
    background-color: #fdfdfd;
    box-shadow: 0.1vw 0.1vh 2em  rgba(0, 0, 0, 0.05);

    .switch-container {
        display: flex;
    }
`

export const getStyledSwitchContainer = () => styled.div`
    display: flex;
`

export const getStyledEmployeeSwitch = () => styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;

    span {
        margin: 3vh 1vw;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.2em;
        font-weight: 500;
    }

    hr {
        width: 100%;
        border: 1px solid ${GRAY_COLOR};
    }

    &:hover {
        color: #FFADB3;
    }
`

export const getStyledEmployeeContainer = () => styled.div`
    margin: 5vh 1vw;
    
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
`

export const getStyledNameCard = () => styled.div`
    border: 1px solid #253244;
    border-radius: 10px;

    padding: 1.5vh 1vw;

    display: flex;
    align-items: center;
    column-gap: 1.5vw;

    cursor: pointer;

    .place-end {
        margin-left: auto;
    }

    img {
        width: 40%;
        height: 40%;
    }
`

export const getStyledNameIcon = (color: string) => styled.div`
    background-image: linear-gradient(40deg, ${color}, white);
    height: 1.5vw;
    width: 1.5vw;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`