import { FC } from 'react'
import {
    getStyledDashboardLogsContainer,
    getStyledLogHR,
    getStyledLogItemContainer
} from '../../styled-components/dashboard-logs.styled'
import { LogsAll } from './LogsAll.component'
import { LogsMenu } from './LogsMenu.component'

export interface DashboardLogsContainerProps {

}


export const DashboardLogsContainer: FC<DashboardLogsContainerProps> = (props) => {

    const StyledDashboardLogsContainer = getStyledDashboardLogsContainer()
    const StyledHR = getStyledLogHR()
    const StyledLogItemsContainer = getStyledLogItemContainer()

    return (
        <StyledDashboardLogsContainer>
            <LogsMenu />
            <StyledHR />

            <StyledLogItemsContainer>

                <LogsAll />
            </StyledLogItemsContainer>
        </StyledDashboardLogsContainer>
    )
}