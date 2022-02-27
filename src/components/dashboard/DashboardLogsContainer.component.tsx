import { FC } from 'react'
import { useSelector } from 'react-redux'
import { IAppState } from '../../app/app-reducer'
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

    const shrink = useSelector<IAppState, boolean>((state) => state.shrink)

    const StyledDashboardLogsContainer = getStyledDashboardLogsContainer(shrink)
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