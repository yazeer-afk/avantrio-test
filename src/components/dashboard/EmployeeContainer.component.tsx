import {FC} from 'react'
import randomColor from 'node-random-color'
import { getStyledEmployeeContainer } from '../../styled-components/dashboard-employee-list.styled'
import { EmployeeNameCard } from './EmployeeNameCard.component'

export interface EmployeeContainerProps {
    
}

const StyledEmployeeContainer = getStyledEmployeeContainer()

const color1 = randomColor({
    difference: 25,
    considerations: 5
});

const color2 = randomColor({
    difference: 25,
    considerations: 5
});

export const EmployeeContainer: FC<EmployeeContainerProps> = (props) => {

    return(
        <StyledEmployeeContainer>
            <EmployeeNameCard color={color1} />
            <EmployeeNameCard color={color2}/>
        </StyledEmployeeContainer>
    )
}