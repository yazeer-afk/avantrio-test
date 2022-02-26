import {FC} from 'react'
import { getStyledEmployeeSwitch } from '../../styled-components/dashboard-employee-list.styled'

export interface EmployeeSwitchProps {
    title: string
}

export const EmployeeSwitch: FC<EmployeeSwitchProps> = ({title}) => {

    const StyledEmployeeSwitch = getStyledEmployeeSwitch()

    return(
        <StyledEmployeeSwitch>
            <span>{title}</span>
            <hr />
        </StyledEmployeeSwitch>
    )
}