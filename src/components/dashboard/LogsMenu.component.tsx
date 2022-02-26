import {FC} from 'react'
import { getStyledLogsMenuContainer } from '../../styled-components/dashboard-logs.styled'
import { LogsMenuItemsContainer } from './LogsMenuItemsContainer.component'
import filter from '../../assets/filter.png'

export interface LogsMenuProps {
    
}

export const LogsMenu: FC<LogsMenuProps> = (props) => {

    const StyledMenuContainer = getStyledLogsMenuContainer()

    return(
        <StyledMenuContainer>
            <h3>History</h3>
            <span>( Jaison Burnette )</span>
            <div className='bar'/>
            <LogsMenuItemsContainer />

            <div className='place-end'>
                <img src={filter} alt="filter" />
            </div>
        </StyledMenuContainer>
    )
}