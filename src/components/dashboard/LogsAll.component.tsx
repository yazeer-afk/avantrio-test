import {FC} from 'react'
import { getStyledLogItemContainer } from '../../styled-components/dashboard-logs.styled'
import { LogItem } from './LogItem.component'

export interface LogsAllProps {
    
}

export const LogsAll: FC<LogsAllProps> = (props) => {

    const StyledLogContainer = getStyledLogItemContainer()
    const titles = ['Date', 'Alert view', 'Time', 'Location']

    return(
        <StyledLogContainer>
            <LogItem content={titles} isTitle={true}/>
            <LogItem content={titles}/>
            <LogItem content={titles}/>
            <LogItem content={titles}/>
            <LogItem content={titles}/>
            <LogItem content={titles}/>
            <LogItem content={titles}/>
            <LogItem content={titles}/>
            <LogItem content={titles}/>
        </StyledLogContainer>
    )
}