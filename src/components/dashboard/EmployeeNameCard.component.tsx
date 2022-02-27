import {FC} from 'react'
import { getStyledNameCard, getStyledNameIcon } from '../../styled-components/dashboard-employee-list.styled'
import dots from '../../assets/dots.png'
import { employee } from './EmployeeContainer.component'

export interface EmployeeNameCardProps {
    color: string
    data: employee
}

const StyledNameCard = getStyledNameCard()

export const EmployeeNameCard: FC<EmployeeNameCardProps> = ({color, data}) => {
    
    const StyledNameIcon = getStyledNameIcon(color)

    return(
        <StyledNameCard>
            <StyledNameIcon>{data.name.charAt(0).toUpperCase()}</StyledNameIcon>
            <div>{data.name}</div>
            <div className='place-end'>
                <img src={dots} alt="dots" />
            </div>
        </StyledNameCard>
    )
}