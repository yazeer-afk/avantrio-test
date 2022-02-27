import { FC } from 'react'
import { useSelector } from 'react-redux'
import { IAppState } from '../../app/app-reducer'
import {
    getStyledDashboardLogsContainer,
    getStyledLogHR
} from '../../styled-components/dashboard-logs.styled'
import { LogsAll } from './LogsAll.component'
import { LogsMenu } from './LogsMenu.component'


const StyledHR = getStyledLogHR()

export const DashboardLogsContainer: FC = () => {

    const shrink = useSelector<IAppState, boolean>((state) => state.shrink)

    const StyledDashboardLogsContainer = getStyledDashboardLogsContainer(shrink)

    return (
        <StyledDashboardLogsContainer>
            <LogsMenu />
            <StyledHR />
            <LogsAll />
        </StyledDashboardLogsContainer>
    )
}