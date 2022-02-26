import { FC, useState } from 'react'
import {
    getStyledMagnifiers,
    getStyledMapContainer,
    getStyledResetMapBtn,
    getStyledShrinkAction
} from '../../styled-components/dashboard-map-view.styled'

//images
import map from '../../assets/map.png'
import zoomOut from '../../assets/zoom-out.png'
import zoomIn from '../../assets/zoom-in.png'

export interface DashboardMapViewProps {

}


export const DashboardMapView: FC<DashboardMapViewProps> = (props) => {
    
    const [shrink, setShrink] = useState(false)
    
    const StyledMapContainer = getStyledMapContainer(shrink)
    const StyledShrinkAction = getStyledShrinkAction(shrink);
    const StyledMagnifiers = getStyledMagnifiers()
    const StyledResetButton = getStyledResetMapBtn()

    const renderContent = () => {
        if (shrink) {
            return (
                <span>Live location map here</span>
            )
        } else {
            return (
                <>
                    <StyledResetButton>Reset Map</StyledResetButton>
                    <StyledMagnifiers>
                        <img src={zoomIn} alt="zoom in"/>
                        <img src={zoomOut} alt="zoom out" />
                    </StyledMagnifiers>
                </>
            )
        }
    }

    const handleShrinkAction = () => {
        setShrink(prevState => !prevState)
    }

    return (
        <StyledMapContainer>

            {renderContent()}
            <StyledShrinkAction onClick={handleShrinkAction} />

            <img src={map} alt="map" />
        </StyledMapContainer>
    )
}