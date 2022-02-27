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

axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImFjaGFsYSIsImV4cCI6MTY0NTk1ODI2MywiZW1haWwiOiJhY2hhbGFAbWFpbGluYXRvci5jb20iLCJvcmlnX2lhdCI6MTY0NTk1NDY2M30.GSI_CuKM1KviPVIuE0NzQyfhbECZuNCo0qZ8zgdZuwo';

export interface DashboardContentProps {

}

const StyledDashboardContentHolder = getStyledDashboardContentHolder()
const StyledDashboardContent = getStyledDashboardContent()
const StyledHR = getStyledHR()

export const DashboardContent: FC<DashboardContentProps> = (props) => {

    const alert = useSelector<IAppState, boolean>((state) => state.alert)

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