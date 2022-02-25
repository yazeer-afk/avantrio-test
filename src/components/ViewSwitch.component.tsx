import { FC } from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { IAppState } from '../app/app-reducer';
import { DashboardView } from './dashboard/DashboardView.component';
import { LoginView } from './login-view/LoginView.component';

export interface ViewSwitchProps {

}

export const ViewSwitch: FC<ViewSwitchProps> = (props) => {

    const isUseLoggedIn = useSelector<IAppState, boolean>((state) => state.userLoggedIn)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={isUseLoggedIn ? <DashboardView /> : <LoginView /> } />
                <Route path='/home' element={<DashboardView />} />
            </Routes>
        </BrowserRouter>
    )
}