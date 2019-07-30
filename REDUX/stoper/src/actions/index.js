export const incValue = activeSession => {
    return {
        type: "INC_VALUE",
    }
}
export const decValue = activeSession => {
    return {
        type: "DEC_VALUE",
    }
}
export const setSession = newSession => {
    return {
        type: "SET_SESSION",
        payload: newSession
    }
}