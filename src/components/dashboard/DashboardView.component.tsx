import {FC} from 'react'
import { getStyledDashboardContainer } from '../../styled-components/dashboard-view.styled'
import { DashboardContent } from './DashboardContentHolder.component'
import { DashboardSideNav } from './DashboardSideNav.component'

const StyledDashboardContainer = getStyledDashboardContainer()

export const DashboardView: FC = () => {

    return(
        <StyledDashboardContainer>
            <DashboardSideNav />
            <DashboardContent />
        </StyledDashboardContainer>
    )
}