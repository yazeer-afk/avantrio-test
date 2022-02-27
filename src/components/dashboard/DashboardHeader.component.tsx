import { FC } from 'react'
import { getStyledAlertIcon, getStyledHeaderContainer, getStyledMessageButton } from '../../styled-components/dashboard-content.styled'
import sos from '../../assets/sos.png'
import { useDispatch, useSelector } from 'react-redux'
import { IAppState } from '../../app/app-reducer'
import { setAlert } from '../../app/app-actions'
import alertImg from '../../assets/alert.png'

const StyledHeaderContainer = getStyledHeaderContainer()
const StyledAlertIcon = getStyledAlertIcon()

export const DashboardHeader: FC = () => {
    
    const alert = useSelector<IAppState, boolean>((state) => state.alert)
    const dispatch = useDispatch()
    
    const StyledMessageButton = getStyledMessageButton(alert)

    const handleMessageOnClick = () => {
        const newAlertState = !alert
        dispatch(setAlert(newAlertState))
    }

    const renderAlertIcon = () => {
        if (alert) {
            return (
                <StyledAlertIcon>
                    <img src={alertImg} alt="Alert" height={30}/>
                </StyledAlertIcon>
            )
        }
    }

    return (
        <StyledHeaderContainer>
            <span>Monitor</span>
            <StyledMessageButton onClick={handleMessageOnClick}>
                Message
                {renderAlertIcon()}
            </StyledMessageButton>
            <div>
                <img src={sos} alt="sos" />
            </div>
        </StyledHeaderContainer>
    )
}