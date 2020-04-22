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

export const conquerProvince = (provinceName) => {
    console.log(provinceName)
    return (
        {
            type: "CONQUER_PROVINCE",
            data: {
                provinceName: provinceName
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