import {FC} from 'react'
import { AlertItem } from './AlertItem.component'

export interface DashboardAlertContainerProps {
    
}

export const DashboardAlertContainer: FC<DashboardAlertContainerProps> = (props) => {

    return(
        <>
            <AlertItem size={10}/>
            <AlertItem size={15}/>
            <AlertItem size={20}/>
            <AlertItem size={25}/>
        </>
    )
}