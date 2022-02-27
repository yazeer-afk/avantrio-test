
import { AppAction, userLog } from "./app-actions";

export interface IAppState {
    token: string,
    shrink: boolean,
    empLog: userLog
    alert: boolean
}

const initialState:IAppState = {
    token: '',
    shrink: false,
    alert: false,
    empLog: {
        user_id: 0,
        user: '',
        logs: []
    }
}

export const appReducer = (state: IAppState = initialState, action: AppAction) => {
    switch(action.type){
        case 'SET_TOKEN': 
            return {...state, token: action.payload as string}
        case 'SET_SHRINK': 
            return {...state, shrink: action.payload as boolean}
        case 'SET_EMPLOYEE_LOGS': 
            return {...state, empLog: action.payload as userLog}
        case 'SET_ALERT': 
            return {...state, alert: action.payload as boolean}
        default:
            return state;
    }
}