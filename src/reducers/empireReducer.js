import { createStore } from 'redux'

const startGameRomanEmpire = [
    {
      "gold": 100,
      "legionaries": 10,
      "enhancements": [
        {
          "Roman Bridge": 0,
          "Price": 100
        },
        {
          "Roman Arch": 0,
          "Price": 100
        },
        {
          "Aqueduct": 0,
          "Price": 100
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
      return state
  }

  const romanEmpire = createStore(empireReducer)
  export default romanEmpire