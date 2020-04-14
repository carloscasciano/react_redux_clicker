export const addLegionaries = () => {
    return (
        {
            type: "ADD_LEGIONARIES"
        }
    )
}

export const addEnhancement = (enhancementName) => {
    return (
        {
            type: "ADD_ENHANCEMENT",
            data: {
                enhancementName: enhancementName
            }
        }
    )
}

export const conquerProvincy = (provincyName) => {
    return (
        {
            type: "CONQUER_PROVINCY",
            data: {
                provincyName: provincyName
            }
        }
    )
}

export const passTurn = () => {
    return (
        {
            type: "PASS_TURN",
        }
    )
}

export const alertUser = (alertString) => {
    return (
        {
            type: "ALERT_USER",
            data: {
                alertString: alertString
            }
        }
    )
}