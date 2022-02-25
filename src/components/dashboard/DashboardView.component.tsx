import {FC} from 'react'
import { getStyledDashboardContainer } from '../../styled-components/dashboard-view.styled'
import { DashboardSideNav } from './DashboardSideNav.component'

export interface DashboardViewProps {
    
}

const StyledDashboardContainer = getStyledDashboardContainer()

export const DashboardView: FC<DashboardViewProps> = (props) => {

    return(
        <StyledDashboardContainer>
            <DashboardSideNav />
        </StyledDashboardContainer>
    )
}