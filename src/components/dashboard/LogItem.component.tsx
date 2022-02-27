import { FC } from 'react'
import { getStyledLogItem } from '../../styled-components/dashboard-logs.styled'

export interface LogItemProps {
    isTitle?: boolean
    content: string[]
}

export const LogItem: FC<LogItemProps> = ({ isTitle, content }) => {

    const StyledLogItem = getStyledLogItem(isTitle)

    const renderContent = () => {
        return content.map((value, index) => {
            return <span key={index + value}>{value}</span>
        })
    }

    return (
        <StyledLogItem>
            {renderContent()}
        </StyledLogItem>
    )
}

LogItem.defaultProps = {
    isTitle: false
}