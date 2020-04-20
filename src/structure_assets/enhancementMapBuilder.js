
export default function enhancementMapBuilder (enhObj) {
    let mappedEnhancements = []
    for (let i = 0; i < enhObj.length; i++) {
        for (let j=0; j < enhObj[i]["enhancementQty"]; j++) {
            mappedEnhancements.push(enhObj[i]["enhancementName"])
        }
    }

    return mappedEnhancements
}
