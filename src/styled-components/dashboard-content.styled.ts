import styled from "styled-components";

export const getStyledHeaderContainer = () => styled.div`
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