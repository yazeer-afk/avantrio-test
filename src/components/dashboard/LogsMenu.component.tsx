import { FC } from 'react'
import { getStyledLogsMenuContainer } from '../../styled-components/dashboard-logs.styled'
import { LogsMenuItemsContainer } from './LogsMenuItemsContainer.component'
import filter from '../../assets/filter.png'
import { useSelector } from 'react-redux'
import { IAppState } from '../../app/app-reducer'
import { userLog } from '../../app/app-actions'

export const LogsMenu: FC = () => {

    const logItems = useSelector<IAppState, userLog>((state) => state.empLog)
    const { user } = logItems

    const StyledMenuContainer = getStyledLogsMenuContainer()

    const renderName = () => {
        if (user) {
            return user
        }

        return 'Loading!'
    }

    return (
        <StyledMenuContainer>
            <h3>History</h3>
            <span>{`( ${renderName()} )`}</span>
            <div className='bar' />
            <LogsMenuItemsContainer />

            <div className='place-end'>
                <img src={filter} alt="filter" />
            </div>
        </StyledMenuContainer>
    )
}