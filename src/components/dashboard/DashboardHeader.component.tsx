import {FC} from 'react'
import { getStyledHeaderContainer, getStyledMessageButton } from '../../styled-components/dashboard-content.styled'
import sos from '../../assets/sos.png'

export interface DashboardHeaderProps {
    
}

const StyledHeaderContainer = getStyledHeaderContainer()
const StyledMessageButton = getStyledMessageButton()

export const DashboardHeader: FC<DashboardHeaderProps> = (props) => {

    return(
        <StyledHeaderContainer>
            <span>Monitor</span>
            <StyledMessageButton>Message</StyledMessageButton>
            <div>
                <img src={sos} alt="sos" />
            </div>
        </StyledHeaderContainer>
    )
}