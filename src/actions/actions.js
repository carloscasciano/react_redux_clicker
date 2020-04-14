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