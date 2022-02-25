import styled from 'styled-components'

export const getStyledDashboardContainer = () => styled.div`
    height: 100vh;
    display: flex;
    
    nav {
        display: flex;
        height: 100%;
        flex-direction: column;
        background-color: #253244;
    }
    
    section {
        background-color: #222222;
        width: 100%;
    }
`

export const getStyledNavIconContainer = (backgroundColor, placeEnd) => styled.div`
    padding: 1vw;
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