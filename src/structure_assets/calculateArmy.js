/* 

Structure:

1 Legionary
8 Legionaries - 1 Conturbeniun
80 Legionaries - 10 Conturbeniun - 1 Century
480 Legionaries - 60 Conturbeniun - 6 Century - 1 Cohort
4800 Legionaries - 600 Conturbeniun - 60 Century - 10 Cohort - 1 Legion



*/

export default function calculateArmy (totalLegionaries) {
    let counter = totalLegionaries
    let structure = {
        "legionary": 0,
        "conturbeniun": 0,
        "century": 0,
        "cohort": 0,
        "legion": 0
    }

    structure.legion = Math.floor(counter / 4800)
    counter = totalLegionaries - (4800 * structure.legion)
    structure.cohort = Math.floor(counter / 480)
    counter = counter - (480 * structure.cohort)
    structure.century = Math.floor(counter / 80)
    counter = counter - (80 * structure.century)
    structure.conturbeniun = Math.floor(counter / 8)
    counter = counter - (8 * structure.conturbeniun)
    structure.legionary = counter


    return structure
}
