
export type AppAction = {type: 'TOGGLE_LOGIN', payload: boolean}

export const toggleUser = (value: boolean):AppAction => (
    {
        type: 'TOGGLE_LOGIN',
        payload: value
    }
)