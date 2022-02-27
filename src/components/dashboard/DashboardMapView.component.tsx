import { FC } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { IAppState } from '../../app/app-reducer'
import { setShrink } from '../../app/app-actions'

const StyledMagnifiers = getStyledMagnifiers()
const StyledResetButton = getStyledResetMapBtn()

export const DashboardMapView: FC = () => {
    
    const shrink = useSelector<IAppState, boolean>((state) => state.shrink)
    const dispatch = useDispatch()
    
    const StyledMapContainer = getStyledMapContainer(shrink)
    const StyledShrinkAction = getStyledShrinkAction(shrink);

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
        dispatch(setShrink(!shrink))
    }

    return (
        <StyledMapContainer>

            {renderContent()}
            <StyledShrinkAction onClick={handleShrinkAction} />

            <img src={map} alt="map" />
        </StyledMapContainer>
    )
}