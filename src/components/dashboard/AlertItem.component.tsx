import {FC} from 'react'
import { getStyledAlert } from '../../styled-components/dashboard-content.styled'

export interface AlertItemProps {
    size: number
}

export const AlertItem: FC<AlertItemProps> = ({size}) => {

    const StyledAlert = getStyledAlert(size)
    return(
        <StyledAlert />
    )
}