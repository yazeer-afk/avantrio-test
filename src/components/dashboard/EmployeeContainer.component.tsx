import { FC, useEffect, useState } from 'react'
import randomColor from 'node-random-color'
import { getStyledEmployeeContainer } from '../../styled-components/dashboard-employee-list.styled'
import { EmployeeNameCard } from './EmployeeNameCard.component'
import axios from 'axios'
import { GET_EMPLOYEES, GET_EMPLOYEE_LOG } from '../../util/url'
import { useDispatch } from 'react-redux'
import { setLogs } from '../../app/app-actions'

const StyledEmployeeContainer = getStyledEmployeeContainer()

export type employee = {
    id: number,
    name: string
}

interface IEmployeeResp {
    loading: boolean
    data: employee[]
}

export const EmployeeContainer: FC = () => {

    const [employeeList, setEmployeeList] = useState<IEmployeeResp>({
        data: [],
        loading: true
    })

    const dispatch = useDispatch()

    const getEmployees = async () => {
        const employeeResponse = await axios.get(GET_EMPLOYEES)
        const empList = employeeResponse.data
        const stateVal: IEmployeeResp = {
            loading: false,
            data: empList
        }

        const logResponse = await axios.get(`${GET_EMPLOYEE_LOG}/${empList[0].id}/logs`)
        setEmployeeList(stateVal)
        dispatch(setLogs(logResponse.data))
    }

    useEffect(() => {
        getEmployees()
    }, [])

    const renderEmployees = () => {
        if (employeeList.loading) {
            return <span>Loading</span>
        } else {
            return employeeList.data.map((value, index) => {

                const color = randomColor({
                    difference: 25,
                    considerations: 5
                });

                return <EmployeeNameCard key={value.name + index} color={color} data={value} />
            })
        }
    }

    return (
        <StyledEmployeeContainer>
            {renderEmployees()}
        </StyledEmployeeContainer>
    )
}