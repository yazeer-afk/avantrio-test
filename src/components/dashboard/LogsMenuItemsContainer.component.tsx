import {FC} from 'react'
import { getStyledMenuItemsContainer } from '../../styled-components/dashboard-logs.styled'
import { MenuItem } from './MenuItem.component'

export interface LogsMenuItemsProps {
    
}

export const LogsMenuItemsContainer: FC<LogsMenuItemsProps> = (props) => {

    const StyledMenuItemsContainer = getStyledMenuItemsContainer()

    return(
        <StyledMenuItemsContainer>
            <MenuItem title='All'/>
            <MenuItem title='Location'/>
            <MenuItem title='Message'/>
            <MenuItem title='Alert'/>
        </StyledMenuItemsContainer>
    )
}