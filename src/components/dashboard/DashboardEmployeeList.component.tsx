import { FC } from 'react'
import { getStyledListCard } from '../../styled-components/dashboard-employee-list.styled'
import { EmployeeContainer } from './EmployeeContainer.component'
import { EmployeeSwitch } from './EmployeeSwitch.component'

export interface DashboardEmployeeListProps {

}

const StyledEmployeeListCard = getStyledListCard()

export const DashboardEmployeeList: FC<DashboardEmployeeListProps> = (props) => {

    

    return (
        <StyledEmployeeListCard>
            <div className='switch-container'>
                <EmployeeSwitch title='Staff' />
                <EmployeeSwitch title='Employee' />
            </div>
            <EmployeeContainer />
        </StyledEmployeeListCard>
    )
}