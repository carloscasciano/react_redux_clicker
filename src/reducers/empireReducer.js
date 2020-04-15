import { createStore } from 'redux'

const startGameRomanEmpire = [
    {
      "legionaries": 0,
      "gold": 100,
      "date": 1,
      "daysUntilActionsChange": 14,
      "message": "Grow your Empire!",
      "enhancements": [
        {
            "enhancementName" : "Roman Bridge",
            "enhancementQty": 1,
            "enhancementPrice": 100
        },
        {
            "enhancementName" : "Roman Arc",
            "enhancementQty": 1,
            "enhancementPrice": 200
        },
        {
            "enhancementName" : "Aqueduct",
            "enhancementQty": 1,
            "enhancementPrice": 400
        }
      ],
      "baseProvincePrice": 25,
      "provincePriceWithBonus": 0,
      "baseProvinceGold": 100,
      "provinceGoldWithBonus": 0,
      "provincies": [
        {
          "provinceName": "Rome",
          "possession": true
        },
        {
            "provinceName": "Africa",
            "possession": false
        },
        {
            "provinceName": "Asia Minor",
            "possession": false
        },
        {
            "provinceName": "Achaea",
            "possession": false
        },
        {
            "provinceName": "Cyprus",
            "possession": false
        },
        {
            "provinceName": "Crete",
            "possession": false
        },
        {
            "provinceName": "Cyrenaica",
            "possession": false
        },
        {
            "provinceName": "Gallia Narbonensis",
            "possession": false
        },
        {
            "provinceName": "Lycia Pamphylia",
            "possession": false
        },
        {
            "provinceName": "Macedonia & Epirus",
            "possession": false
        },
        {
            "provinceName": "Sardinia & Corsica",
            "possession": false
        },
        {
            "provinceName": "Sicilia",
            "possession": false
        },
        {
            "provinceName": "Aquitania",
            "possession": false
        },
        {
            "provinceName": "Gallia",
            "possession": false
        },
        {
            "provinceName": "Arabia",
            "possession": false
        },
        {
            "provinceName": "Baetica",
            "possession": false
        },
        {
            "provinceName": "Belgica",
            "possession": false
        },
        {
            "provinceName": "Britannia",
            "possession": false
        },
        {
            "provinceName": "Cappadocia",
            "possession": false
        },
        {
            "provinceName": "Cilicia",
            "possession": false
        },
        {
            "provinceName": "Dacia",
            "possession": false
        },
        /*{
            "provinceName": "Dalmatia",
            "possession": false
        },
        {
            "provinceName": "Galatia",
            "possession": false
        },
        {
            "provinceName": "Germania Inferior",
            "possession": false
        },
        {
            "provinceName": "Germania Superior",
            "possession": false
        },
        {
            "provinceName": "Hispania Tarraconensis",
            "possession": false
        },
        {
            "provinceName": "Lugdunensis",
            "possession": false
        },
        {
            "provinceName": "Lusitania",
            "possession": false
        },
        {
            "provinceName": "Moesia Inferior",
            "possession": false
        },
        {
            "provinceName": "Moesia Superior",
            "possession": false
        },
        {
            "provinceName": "Noricum",
            "possession": false
        },
        {
            "provinceName": "Numidia",
            "possession": false
        },
        {
            "provinceName": "Judaea",
            "possession": false
        },
        {
            "provinceName": "Pannonia Inferior",
            "possession": false
        },
        {
            "provinceName": "Pannonia Superior",
            "possession": false
        },
        {
            "provinceName": "Pontus & Bithynia",
            "possession": false
        },
        {
            "provinceName": "Raetia",
            "possession": false
        },
        {
            "provinceName": "Syria",
            "possession": false
        },
        {
            "provinceName": "Thracia",
            "possession": false
        },
        {
            "provinceName": "Aegyptus",
            "possession": false
        },
        {
            "provinceName": "Alpes Cottiae",
            "possession": false
        },
        {
            "provinceName": "Alpes Penninae",
            "possession": false
        },
        {
            "provinceName": "Alpes Maritimae",
            "possession": false
        },
        {
            "provinceName": "Mauretania Caesarensis",
            "possession": false
        },
        {
            "provinceName": "Mauretania Tingitana",
            "possession": false
        }   */
      ],
      "roundLog": []
    }
  ]


  const empireReducer = (state = startGameRomanEmpire, action) => {

    const bonusPercentual = 3
    const daysRule = state[0]["daysUntilActionsChange"]
    const multiplierFactor = 1.2
    const totalProvincesConquered = state[0]["provincies"].filter(prov=>prov.possession===true).length
    const totalRomanBridges = state[0]["enhancements"].filter(enh=>enh.enhancementName==="Roman Bridge")[0]["enhancementQty"]
    const totalRomanArc = state[0]["enhancements"].filter(enh=>enh.enhancementName==="Roman Arc")[0]["enhancementQty"]
    const totalAqueducts = state[0]["enhancements"].filter(enh=>enh.enhancementName==="Aqueduct")[0]["enhancementQty"]
    
    state[0].provincePriceWithBonus = Math.round (state[0].baseProvincePrice * (1 - totalAqueducts /  100 * bonusPercentual))
    state[0].provinceGoldWithBonus = Math.round (state[0].baseProvinceGold) * (1 + totalRomanArc / 100 * bonusPercentual)

    switch (action.type) {
  
        case 'PASS_TURN':
            state[0]["date"]++
            if (state[0]["date"] % daysRule === 0) {
                state[0]["gold"] = Math.round(state[0]["gold"] + state[0]["provinceGoldWithBonus"] * totalProvincesConquered)
                state[0]["baseProvincePrice"] = Math.round(state[0]["baseProvincePrice"] * multiplierFactor)
                state[0]["baseProvinceGold"] = Math.round( state[0]["baseProvinceGold"] * multiplierFactor )
            }
            return state

        case 'ADD_LEGIONARIES':
            
            state[0]["legionaries"] = state[0]["legionaries"] + totalRomanBridges
            return state

        case 'ADD_ENHANCEMENT':
            const chosenEnhancement = action.data.enhancementName
            const enhancementToAdd = state[0]["enhancements"].filter(enh=>enh.enhancementName===chosenEnhancement)[0]
            const valueToManage = parseInt(enhancementToAdd["enhancementPrice"])
            state[0]["gold"] = state[0]["gold"] + valueToManage * -1
            enhancementToAdd["enhancementQty"] = enhancementToAdd["enhancementQty"] + 1
            enhancementToAdd["enhancementPrice"] = enhancementToAdd["enhancementPrice"] * 2
            state[0]["roundLog"] = state[0]["roundLog"].concat("Day " + state[0]["date"] + " : " + enhancementToAdd["enhancementName"] + " bought")
            return state

        case 'CONQUER_PROVINCY':

            const chosenProvincy = action.data.provincyName   
            const provincyToConquer = state[0]["provincies"].filter(prov=>prov.provinceName===chosenProvincy)[0]
            provincyToConquer["possession"] = true

            state[0]["legionaries"] = state[0]["legionaries"] - state[0].provincePriceWithBonus
            state[0]["roundLog"] = state[0]["roundLog"].concat("Day " + state[0]["date"] + " : " + provincyToConquer["provinceName"] + " conquered")
            return state


        case 'ALERT_USER':
            const alertMessage = action.data.alertString
            state[0]["message"] = alertMessage
            return state  

        default:
        return state
      }
  }

  const romanEmpire = createStore(empireReducer)
  export default romanEmpire