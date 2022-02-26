import { FC } from 'react'
import { getStyledDashboardContentHolder, getStyledDashboardContent } from '../../styled-components/dashboard-view.styled'
import { DashboardHeader } from './DashboardHeader.component'

export interface DashboardContentProps {

}

const StyledDashboardContentHolder = getStyledDashboardContentHolder()
const StyledDashboardContent = getStyledDashboardContent()

export const DashboardContent: FC<DashboardContentProps> = (props) => {

    return (
        <StyledDashboardContentHolder>
            <DashboardHeader />
            <div>hr</div>
            <StyledDashboardContent>
                <div className='item'>con</div>
                <div className='item col'>
                    <div>con</div>
                    <div>con</div>
                </div>
            </StyledDashboardContent>
        </StyledDashboardContentHolder>
    )
}