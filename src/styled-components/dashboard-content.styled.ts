import styled from "styled-components";
import { PRIMARY_COLOR, WHITE_COLOR } from "../util/colors";

export const getStyledHeaderContainer = () => styled.div`
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 2vw;

    span {
        margin-right: auto;
        font-size: 1.8em;
        font-weight: 500;
    }
`

export const getStyledMessageButton = (alert: boolean) => styled.button`
    background-color: ${alert ? PRIMARY_COLOR : WHITE_COLOR};
    border: ${alert ? 'none' : '2px solid #253244'};
    border-radius: 4px;

    position: relative;
    
    color: ${alert ? WHITE_COLOR : 'inherit'};
    font-size: 1.2em;
    font-weight: 600;
    padding: 1vh 2.5vw;
    cursor: pointer;
    transition: background-color .3s;
    
    &:hover {
        background-color: #FFADB3;
    }
`

export const getStyledHR = () => styled.hr`
    border: 1px solid #253244;
`

export const getStyledAlert = (size: number) => styled.div`
    position: absolute;
    z-index: 0;
    right: 0;
    top: 0;
    width: ${size}vw;
    height: ${size}vw;
    background-color: rgba(255, 0, 0, .1);
    border-radius: 0 0 0 ${size}vw;
`

export const getStyledAlertIcon = () => styled.div`
    position: absolute;
    width: 2.5vw;
    height: 2.5vw;
    background-color: ${WHITE_COLOR};

    box-shadow: 0.1vw 0.1vh 2em  rgba(0, 0, 0, 0.2);

    left: 0;
    top: 0;
    margin-left: -1.2vw;
    margin-top: -2.5vh;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`