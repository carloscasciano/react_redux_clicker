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