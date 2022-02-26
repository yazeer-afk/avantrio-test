import {FC} from 'react'
import { getStyledMenuItem } from '../../styled-components/dashboard-logs.styled'

export interface MenuItemProps {
    title: string
}

export const MenuItem: FC<MenuItemProps> = ({title}) => {

    const StyledMenuItem = getStyledMenuItem()

    return(
        <StyledMenuItem>
            <span>{title}</span>
            <div />
        </StyledMenuItem>
    )
}