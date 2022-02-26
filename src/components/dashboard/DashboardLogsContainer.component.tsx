import {FC} from 'react'
import { getStyledDashboardLogsContainer } from '../../styled-components/dashboard-logs.styled'

export interface DashboardLogsContainerProps {
    
}

const StyledDashboardLogsContainer = getStyledDashboardLogsContainer()

export const DashboardLogsContainer: FC<DashboardLogsContainerProps> = (props) => {

    return(
        <StyledDashboardLogsContainer>
            asd
        </StyledDashboardLogsContainer>
    )
}