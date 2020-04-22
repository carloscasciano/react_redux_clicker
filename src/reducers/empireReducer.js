import { createStore } from 'redux'

const startGameRomanEmpire = [
    {
      "legionaries": 1,
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
      "provinces": [
        {
          "provinceName": "Rome",
          "possession": true
        },
        {
            "provinceName": "Africa",
            "possession": false
        },
        {
            "provinceName": "Crete",
            "possession": false
        },
        {
            "provinceName": "Sardinia & Corsica",
            "possession": false
        },
        {
            "provinceName": "Aquitania",
            "possession": false
        },
        {
            "provinceName": "Arabia",
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
            "provinceName": "Germania",
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
            "provinceName": "Judaea",
            "possession": false
        },
        {
            "provinceName": "Gallia",
            "possession": false
        },
        {
            "provinceName": "Aegyptus",
            "possession": false
        }  
      ],
      "roundLog": []
    }
  ]


  const empireReducer = (state = startGameRomanEmpire, action) => {

    const bonusPercentual = 3
    const daysRule = state[0]["daysUntilActionsChange"]
    const multiplierFactor = 1.2
    const totalProvincesConquered = state[0]["provinces"].filter(prov=>prov.possession===true).length
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
                state[0].provincePriceWithBonus = Math.round (state[0].baseProvincePrice * (1 - totalAqueducts /  100 * bonusPercentual))
                state[0].provinceGoldWithBonus = Math.round (state[0].baseProvinceGold) * (1 + totalRomanArc / 100 * bonusPercentual)
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
            state[0]["roundLog"] = state[0]["roundLog"].concat("Day " + state[0]["date"] + " : " + enhancementToAdd["enhancementName"] + " built")
            return state

        case 'CONQUER_PROVINCE':

            const chosenProvince = action.data.provinceName   
            const provinceToConquer = state[0]["provinces"].filter(prov=>prov.provinceName===chosenProvince)[0]
            provinceToConquer["possession"] = true

            state[0]["legionaries"] = state[0]["legionaries"] - state[0].provincePriceWithBonus

            state[0]["roundLog"] = state[0]["roundLog"].concat("Day " + state[0]["date"] + " : " + provinceToConquer["provinceName"] + " conquered")
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