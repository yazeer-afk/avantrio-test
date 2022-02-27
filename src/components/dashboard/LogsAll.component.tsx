import { FC } from 'react'
import { useSelector } from 'react-redux'
import { userLog } from '../../app/app-actions'
import { IAppState } from '../../app/app-reducer'
import { getStyledLogItemContainer } from '../../styled-components/dashboard-logs.styled'
import { LogItem } from './LogItem.component'

export interface LogsAllProps {

}

export const LogsAll: FC<LogsAllProps> = (props) => {

    const logItems = useSelector<IAppState, userLog>((state) => state.empLog)
    const { logs } = logItems

    const StyledLogContainer = getStyledLogItemContainer()
    const titles = ['Date', 'Alert view', 'Time', 'Location']

    const getOnOff = (alert: boolean) => {
        if (alert) {
            return 'On'
        }

        return 'Off'
    }

    const renderLogs = () => {
        if (logs.length > 0) {
            return logs.map((value, index) => {
                const {date, alert_view, time} = value
                const titleArr = [date, getOnOff(alert_view), time, 'Live Location']

                return <LogItem content={titleArr} />
            })
        } else {
            return <span>Loading!</span>
        }
    }

    return (
        <StyledLogContainer>
            <LogItem content={titles} isTitle={true} />
            {renderLogs()}
        </StyledLogContainer>
    )
}