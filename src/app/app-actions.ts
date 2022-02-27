
export type AppAction = {
    type: 'SET_TOKEN' | 'SET_SHRINK' | 'SET_EMPLOYEE_LOGS', 
    payload: string | boolean }

export const setToken = (value: string):AppAction => (
    {
        type: 'SET_TOKEN',
        payload: value
    }
)

export const setShrink = (value: boolean) : AppAction => (
    {
        type: "SET_SHRINK",
        payload: value
    }
)