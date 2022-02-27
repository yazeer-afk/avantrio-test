
export type log = {
    id: number
    date: string
    time: string
    alert_view: boolean
    latitude: number
    longitude: number
}

export type userLog = {
    user_id: number,
    user: string,
    logs: log[]
}

export type AppAction = {
    type: 'SET_TOKEN' | 'SET_SHRINK' | 'SET_EMPLOYEE_LOGS' | 'SET_ALERT', 
    payload: string | boolean | userLog}

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

export const setLogs = (value: userLog): AppAction => (
    {
        type: "SET_EMPLOYEE_LOGS",
        payload: value
    }
)

export const setAlert = (value: boolean): AppAction => (
    {
        type: "SET_ALERT",
        payload: value
    }
)