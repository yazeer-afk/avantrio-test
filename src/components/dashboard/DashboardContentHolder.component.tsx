import { FC } from 'react'
import { getStyledHR } from '../../styled-components/dashboard-content.styled'
import { getStyledDashboardContentHolder, getStyledDashboardContent } from '../../styled-components/dashboard-view.styled'
import { DashboardEmployeeList } from './DashboardEmployeeList.component'
import { DashboardHeader } from './DashboardHeader.component'
import { DashboardLogsContainer } from './DashboardLogsContainer.component'
import { DashboardMapView } from './DashboardMapView.component'
import axios from "axios";

axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImFjaGFsYSIsImV4cCI6MTY0NTk1MTYzNSwiZW1haWwiOiJhY2hhbGFAbWFpbGluYXRvci5jb20iLCJvcmlnX2lhdCI6MTY0NTk0ODAzNX0.xs4jNkXziU4zoA1V95pj7i3JdvYp8-JlYUxu7Zn-wVU';

export interface DashboardContentProps {

}

const StyledDashboardContentHolder = getStyledDashboardContentHolder()
const StyledDashboardContent = getStyledDashboardContent()
const StyledHR = getStyledHR()

export const DashboardContent: FC<DashboardContentProps> = (props) => {

    return (
        <StyledDashboardContentHolder>
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