import styled from 'styled-components'

export const getStyledDashboardContainer = () => styled.div`
    height: 100vh;
    display: flex;
    position: relative;
    z-index: 5;
    
    nav {
        display: flex;
        height: 100%;
        flex-direction: column;
        background-color: #253244;
    }
    
    section {
        background-color: #f1f3f7;
        width: 100%;
        height: 90%;
    }
`

export const getStyledNavIconContainer = (backgroundColor?: string, placeEnd?: boolean) => styled.div`
    padding: 2.5vh 1vw;
    width: 3vw;
    height: 3vw;
    background-color: #${backgroundColor};
    cursor: pointer;
    ${placeEnd ? 'margin-top: auto;' : ''}

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &:hover {
        background-color: #141A24;
    }
`

export const getStyledDashboardContentHolder = () => styled.section`
    padding: 5vh 4vw;
    position: relative;

    display: flex;
    flex-direction: column;
`

export const getStyledDashboardContent = () => styled.section`
    display: flex;
    align-items: center;
    column-gap: 1vw;
    margin-top: 4vh;

    .log {
        display: flex;
        flex-direction: column;
        row-gap: 2vh;
        width: 100%;
        height: 100%;
    }
`