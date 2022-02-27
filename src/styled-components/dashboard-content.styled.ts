import styled from "styled-components";

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

export const getStyledMessageButton = () => styled.button`
    background-color: #fdfdfd;
    border: 2px solid #253244;
    border-radius: 4px;
    
    font-size: 1.2em;
    padding: .5vh 2.5vw;
    cursor: pointer;
    
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