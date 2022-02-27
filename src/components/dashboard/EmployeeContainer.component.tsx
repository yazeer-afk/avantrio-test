import { FC, useEffect, useState } from 'react'
import randomColor from 'node-random-color'
import { getStyledEmployeeContainer } from '../../styled-components/dashboard-employee-list.styled'
import { EmployeeNameCard } from './EmployeeNameCard.component'
import axios from 'axios'
import { GET_EMPLOYEES } from '../../util/url'

export interface EmployeeContainerProps {

}

const StyledEmployeeContainer = getStyledEmployeeContainer()

export type employee = {
    id: number,
    name: string
}

interface IEmployeeResp {
    loading: boolean
    data: employee[]
}

export const EmployeeContainer: FC<EmployeeContainerProps> = (props) => {

    const [employeeList, setEmployeeList] = useState<IEmployeeResp>({
        data: [],
        loading: true
    })

    useEffect(() => {
        const getEmployees = async () => {
            const response = await axios.get(GET_EMPLOYEES)
            const stateVal:IEmployeeResp = {
                loading: false,
                data: response.data
            }
            setEmployeeList(stateVal)
        }

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

                return <EmployeeNameCard color={color} data={value} />
            })
        }
    }

    return (
        <StyledEmployeeContainer>
            {renderEmployees()}
        </StyledEmployeeContainer>
    )
}