import {Dispatch, FC, SetStateAction} from 'react'
import { getStyledEmployeeSwitch } from '../../styled-components/dashboard-employee-list.styled'
import { userType } from './DashboardEmployeeList.component'

export interface EmployeeSwitchProps {
    title: string
    type: userType
    selectedUser: userType
    setUser: Dispatch<SetStateAction<userType>>
}

export const EmployeeSwitch: FC<EmployeeSwitchProps> = ({title, type, selectedUser, setUser}) => {

    const isSelected = type === selectedUser
    const StyledEmployeeSwitch = getStyledEmployeeSwitch(isSelected)

    const handleOnSwitchClick = () => {
        setUser(type)
    }

    return(
        <StyledEmployeeSwitch onClick={handleOnSwitchClick}>
            <span>{title}</span>
            <hr />
        </StyledEmployeeSwitch>
    )
}