import { FC } from 'react'
import { getStyledNameCard, getStyledNameIcon } from '../../styled-components/dashboard-employee-list.styled'
import dots from '../../assets/dots.png'
import { employee } from './EmployeeContainer.component'
import axios from 'axios'
import { GET_EMPLOYEE_LOG } from '../../util/url'
import { useDispatch } from 'react-redux'
import { setLogs } from '../../app/app-actions'
import { toast } from 'react-toastify';
import { infoToast, successToast } from '../../util/toast-messages'

export interface EmployeeNameCardProps {
    color: string
    data: employee
}

const StyledNameCard = getStyledNameCard()

export const EmployeeNameCard: FC<EmployeeNameCardProps> = ({ color, data }) => {

    const StyledNameIcon = getStyledNameIcon(color)
    const dispatch = useDispatch()

    const getLogs = async () => {
        infoToast('Fetching user logs!')
        const response = await axios.get(`${GET_EMPLOYEE_LOG}/${data.id}/logs`)
        successToast('User logs retrieved')
        dispatch(setLogs(response.data))
    }

    const handleClick = () => {
        getLogs()
    }

    return (
        <StyledNameCard onClick={handleClick}>
            <StyledNameIcon>{data.name.charAt(0).toUpperCase()}</StyledNameIcon>
            <div>{data.name}</div>
            <div className='place-end'>
                <img src={dots} alt="dots" />
            </div>
        </StyledNameCard>
    )
}