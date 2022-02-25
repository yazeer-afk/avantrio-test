
import { AppAction } from "./app-actions";

export interface IAppState {
    token: string
}

const initialState:IAppState = {
    token: ''
}

export const appReducer = (state: IAppState = initialState, action: AppAction) => {
    switch(action.type){
        case 'SET_TOKEN': 
            return {...state, token: action.payload}
        default:
            return state;
    }
}