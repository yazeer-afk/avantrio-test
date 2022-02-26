import {FC} from 'react'
import { getStyledNameCard, getStyledNameIcon } from '../../styled-components/dashboard-employee-list.styled'
import dots from '../../assets/dots.png'

export interface EmployeeNameCardProps {
    color: string
}

const StyledNameCard = getStyledNameCard()

export const EmployeeNameCard: FC<EmployeeNameCardProps> = ({color}) => {
    
    const StyledNameIcon = getStyledNameIcon(color)

    return(
        <StyledNameCard>
            <StyledNameIcon>N</StyledNameIcon>
            <div>Name</div>
            <div className='place-end'>
                <img src={dots} alt="dots" />
            </div>
        </StyledNameCard>
    )
}