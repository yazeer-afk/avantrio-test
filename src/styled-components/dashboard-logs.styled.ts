import styled from "styled-components";
import { GRAY_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, WHITE_COLOR } from "../util/colors";

export const getStyledDashboardLogsContainer = (shrink: boolean) => styled.div`
    height: ${shrink ? '90%' : '60%'};
    position: relative;
    background-color: ${WHITE_COLOR};
    box-shadow: 0.1vw 0.1vh 2em  rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    padding-bottom: 2vh;

    display: flex;
    flex-direction: column;
`

export const getStyledLogsMenuContainer = () => styled.div`
    padding: 4vh 2vw;
    display: flex;
    align-items: center;
    column-gap: 1vw;
    font-size: 1.2em;

    h3 {
        margin: 0;
        font-size: 1.5em;
    }

    .bar {
        border: 1px solid ${GRAY_COLOR};
        height: 100%;
    }

    .place-end {
        margin-left: auto;
    }

    img {
        width: 50%;
        height: 50%;
    }
`

export const getStyledLogHR = () => styled.hr`
    position: absolute;
    border: 1px solid ${GRAY_COLOR};
    width: 100%;
    margin-top: 10vh;
`

export const getStyledMenuItemsContainer = () => styled.div`
    display: flex;
    margin: 0 2vw;
`

export const getStyledMenuItem = (isSelected: boolean) => styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    color: ${isSelected ? PRIMARY_COLOR : GRAY_COLOR};

    span {
        margin: 0 1.5vw;
        font-weight: 500;
    }

    div {
        position: absolute;
        width: 100%;
        border: 1px solid ${isSelected ? PRIMARY_COLOR : GRAY_COLOR};
        margin-top: 5.4vh;
        z-index: 1;
    }
`

export const getStyledLogItemContainer = () => styled.div`
    padding: 1vh 2vw;
    display: flex;
    flex-direction: column;
    row-gap: 1vh;
    height: 100%;
    overflow-y: hidden;
`

export const getStyledLogItem = (title: boolean | undefined) => styled.div`
    display: flex;
    justify-content: space-between;

    padding: 1.5vh 1.5vw;

    ${title && `
        font-weight: 600;
        position: sticky;
    `}

    ${!title
        && `
            border: 1px solid ${SECONDARY_COLOR};
            border-radius: 5px;
        `
    }

    // span {
    //     width: 100%;
    //     text-align: center;
    // }
`