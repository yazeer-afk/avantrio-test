
import { AppAction } from "./app-actions";

export interface IAppState {
    token: string,
    shrink: boolean
}

const initialState:IAppState = {
    token: '',
    shrink: false
}

export const appReducer = (state: IAppState = initialState, action: AppAction) => {
    switch(action.type){
        case 'SET_TOKEN': 
            return {...state, token: action.payload as string}
        case 'SET_SHRINK': 
            return {...state, shrink: action.payload as boolean}
        default:
            return state;
    }
}