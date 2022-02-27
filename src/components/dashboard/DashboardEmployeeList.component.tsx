import { FC, useState } from 'react'
import { getStyledListCard } from '../../styled-components/dashboard-employee-list.styled'
import { EmployeeContainer } from './EmployeeContainer.component'
import { EmployeeSwitch } from './EmployeeSwitch.component'

export interface DashboardEmployeeListProps {

}

export type userType = 'STAFF' | 'EMPLOYEE'

const StyledEmployeeListCard = getStyledListCard()

export const DashboardEmployeeList: FC<DashboardEmployeeListProps> = (props) => {

    const [selectedUser, setSelectedUser] = useState<userType>('STAFF')

    return (
        <StyledEmployeeListCard>
            <div className='switch-container'>
                <EmployeeSwitch title='Staff' type='STAFF' selectedUser={selectedUser} setUser={setSelectedUser} />
                <EmployeeSwitch title='Employee' type='EMPLOYEE' selectedUser={selectedUser}setUser={setSelectedUser}/>
            </div>
            <EmployeeContainer />
        </StyledEmployeeListCard>
    )
}