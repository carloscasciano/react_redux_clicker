/* 

First Structure:

1 Legionary
8 Legionaries - 1 Conturbeniun
80 Legionaries - 10 Conturbeniun - 1 Century
480 Legionaries - 60 Conturbeniun - 6 Century - 1 Cohort
4800 Legionaries - 600 Conturbeniun - 60 Century - 10 Cohort - 1 Legion

Second Structure

1 Legionary
3 Legionaries - 1 Conturbeniun
9 Legionaries - 3 Conturbeniun - 1 Century
27 Legionaries - 9 Conturbeniun - 3 Century - 1 Cohort
135 Legionaries - 45 Conturbeniun - 15 Century - 5 Cohort - 1 Legion

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

    structure.legion = Math.floor(counter / 135)
    counter = totalLegionaries - (135 * structure.legion)
    structure.cohort = Math.floor(counter / 27)
    counter = counter - (27 * structure.cohort)
    structure.century = Math.floor(counter / 9)
    counter = counter - (9 * structure.century)
    structure.conturbeniun = Math.floor(counter / 3)
    counter = counter - (3 * structure.conturbeniun)
    structure.legionary = counter


    return structure
}
