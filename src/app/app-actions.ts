
export type AppAction = {type: 'SET_TOKEN', payload: string}

export const setToken = (value: string):AppAction => (
    {
        type: 'SET_TOKEN',
        payload: value
    }
)