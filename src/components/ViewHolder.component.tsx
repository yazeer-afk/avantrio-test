import { FC } from 'react'
import { Provider } from 'react-redux'
import { appStore } from '../app/app-store'
import { ViewSwitch } from './ViewSwitch.component'

export interface ViewHolderProps {

}

export const ViewHolder: FC<ViewHolderProps> = (props) => {

    return (
        <Provider store={appStore}>
            <ViewSwitch />
        </Provider>
    )
}