export default function armyMapBuilder (armyObj) {
    let armyMappedArray = []
    const armyKeys = Object.keys(armyObj)
    const armyValues = Object.values(armyObj)
    
    for (let i = 0; i < armyKeys.length; i++) {
        for (let j = 0; j < armyValues[i]; j++) {
            armyMappedArray.push(armyKeys[i])
        }
    }
    return armyMappedArray
}

