import { FC } from 'react'
import { getStyledHR } from '../../styled-components/dashboard-content.styled'
import { getStyledDashboardContentHolder, getStyledDashboardContent } from '../../styled-components/dashboard-view.styled'
import { DashboardEmployeeList } from './DashboardEmployeeList.component'
import { DashboardHeader } from './DashboardHeader.component'
import { DashboardLogsContainer } from './DashboardLogsContainer.component'
import { DashboardMapView } from './DashboardMapView.component'

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