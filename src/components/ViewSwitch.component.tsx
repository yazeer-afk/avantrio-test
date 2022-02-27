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


export const ViewSwitch: FC = () => {

    const tokenHave = useSelector<IAppState, string>((state) => state.token)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={tokenHave ? <DashboardView /> : <LoginView /> } />
                <Route path='/home' element={<DashboardView />} />
            </Routes>
        </BrowserRouter>
    )
}