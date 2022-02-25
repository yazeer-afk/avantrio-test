
import { AppAction } from "./app-actions";

export interface IAppState {
    userLoggedIn: boolean
}

const initialState:IAppState = {
    userLoggedIn: false
}

export const appReducer = (state: IAppState = initialState, action: AppAction) => {
    switch(action.type){
        case 'TOGGLE_LOGIN': 
            return {...state, userLoggedIn: action.payload}
        default:
            return state;
    }
}