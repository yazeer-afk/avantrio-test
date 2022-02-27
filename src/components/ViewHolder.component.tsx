import { FC } from 'react'
import { Provider } from 'react-redux'
import { appStore } from '../app/app-store'
import { ViewSwitch } from './ViewSwitch.component'
import { ToastContainer } from 'react-toastify';


export const ViewHolder: FC = () => {

    return (
        <Provider store={appStore}>
            <ViewSwitch />
            <ToastContainer />
        </Provider>
    )
}