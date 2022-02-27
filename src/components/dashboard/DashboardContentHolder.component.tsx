import { FC } from 'react'
import { getStyledHR } from '../../styled-components/dashboard-content.styled'
import { getStyledDashboardContentHolder, getStyledDashboardContent } from '../../styled-components/dashboard-view.styled'
import { DashboardEmployeeList } from './DashboardEmployeeList.component'
import { DashboardHeader } from './DashboardHeader.component'
import { DashboardLogsContainer } from './DashboardLogsContainer.component'
import { DashboardMapView } from './DashboardMapView.component'
import axios from "axios";
import { DashboardAlertContainer } from './DashboardAlertContainer.component'
import { useSelector } from 'react-redux'
import { IAppState } from '../../app/app-reducer'

const StyledDashboardContentHolder = getStyledDashboardContentHolder()
const StyledDashboardContent = getStyledDashboardContent()
const StyledHR = getStyledHR()

export const DashboardContent: FC = () => {
    
    const alert = useSelector<IAppState, boolean>((state) => state.alert)
    const token = useSelector<IAppState, string>((state) => state.token)

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const renderAlert = () => {
        if (alert) {
            return <DashboardAlertContainer />
        }
    }

    return (
        <StyledDashboardContentHolder>
            {renderAlert()}
            <DashboardHeader />
            <div>
                <StyledHR />
            </div>

            <StyledDashboardContent>
                <DashboardEmployeeList />
                <div className='log'>
                    <DashboardMapView />
                    <DashboardLogsContainer />
                </div>
            </StyledDashboardContent>
        </StyledDashboardContentHolder>
    )
}