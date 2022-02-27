import {FC} from 'react'
import { AlertItem } from './AlertItem.component'

export const DashboardAlertContainer: FC = () => {

    return(
        <>
            <AlertItem size={10}/>
            <AlertItem size={15}/>
            <AlertItem size={20}/>
            <AlertItem size={25}/>
        </>
    )
}