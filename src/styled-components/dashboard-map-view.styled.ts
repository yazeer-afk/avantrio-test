import styled from "styled-components";
import { PRIMARY_COLOR, WHITE_COLOR } from "../util/colors";
import shrinkImg from '../assets/shrink.png'

export const getStyledMapContainer = (shrink: boolean) => styled.div`
    position: relative;
    height: ${shrink ? '10%' : '40%'};
    background-color: ${WHITE_COLOR};
    box-shadow: 0.1vw 0.1vh 2em  rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 1vw;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    span {
        position: absolute;
        right: 40%;
        margin-top: 1vh;
        font-weight: 600;
        font-size: 1.2em;
    }
`

export const getStyledResetMapBtn = () => styled.button`
    position: absolute;
    right: 0;

    margin: 1vh 2vw 0 0;
    padding: .5vh .8vw;

    border: 2px solid ${PRIMARY_COLOR};
    border-radius: 5vw;
    background-color: ${WHITE_COLOR};
    color: ${PRIMARY_COLOR};

    cursor: pointer;
`

export const getStyledMagnifiers = () => styled.div`
    position: absolute;
    right: 0;
    bottom: 10%;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1vh;
    
    img {
        width: 35%;
        height: 35%;
        cursor: pointer;
        box-shadow: 0.5vw 0.5vh 3em  rgba(0, 0, 0, 0.1);
    }
`

export const getStyledShrinkAction = (shrink: boolean) => styled.div`
    background-image: url(${shrinkImg});
    background-repeat: no-repeat;
    background-size: contain;
    
    ${shrink ? 'transform: rotate(180deg);' : ''}

    position: absolute;
    bottom: ${shrink ? '22%' : '10%'};
    right: 50%;

    height: ${shrink ? '16%' : '7%'};
    width: ${shrink ? '10%' : '4%'};
    
    cursor: pointer;
`