import { createStore } from 'redux'

const startGameRomanEmpire = [
    {
      "legionaries": 45,
      "gold": 1000,
      "date": 1,
      "message": "Conquer!",
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
      "baseProvincePrice": 30,
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
        {
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
        }  
      ]
    }
  ]


  const empireReducer = (state = startGameRomanEmpire, action) => {
    switch (action.type) {
  
        case 'ADD_LEGIONARIES':
            const howManyLegionaries = state[0]["enhancements"].filter(enh=>enh.enhancementName==="Roman Bridge")[0]["enhancementQty"]
            state[0]["legionaries"] = state[0]["legionaries"] + howManyLegionaries
            return state

        case 'ADD_ENHANCEMENT':
            const chosenEnhancement = action.data.enhancementName
            const enhancementToAdd = state[0]["enhancements"].filter(enh=>enh.enhancementName===chosenEnhancement)[0]
            const valueToManage = parseInt(enhancementToAdd["enhancementPrice"])
            enhancementToAdd["enhancementQty"] = enhancementToAdd["enhancementQty"] + 1
            state[0]["gold"] = state[0]["gold"] + valueToManage * -1
            return state

        case 'CONQUER_PROVINCY':
            const chosenProvincy = action.data.provincyName   
            const provincyToConquer = state[0]["provincies"].filter(prov=>prov.provinceName===chosenProvincy)[0]
            provincyToConquer["possession"] = true
            const priceToPay = Math.round((state[0]["baseProvincePrice"] * (1 - (state[0]["enhancements"].filter(enh=>enh.enhancementName==="Aqueduct")[0]["enhancementQty"]) / 100))) 
            state[0]["legionaries"] = state[0]["legionaries"] - priceToPay
            return state

        default:
        return state
      }
  }

  const romanEmpire = createStore(empireReducer)
  export default romanEmpire