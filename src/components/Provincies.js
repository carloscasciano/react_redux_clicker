import React from 'react'
import { connect } from 'react-redux'
import calculateArmy from '../structure_assets/calculateArmy'
import armyMapBuilder from '../structure_assets/armyMapBuilder'
import { conquerProvincy , alertUser } from '../actions/actions'
import { ProvinceSkeleton, MiniTitleText, EmpireSkeleton, 
        TerritorySkeleton , BuyProvinceBlock, ConquerButton, GameIcon, HorizontalDivider, 
        RegularText, ConqueredTerritorySkeleton, ToConquerTerritorySkeleton } from '../styles'


const checkIfCanConquer = (provinceCurrentPrice, totalLegionaries, expressionIfTrue, expressionIfFalse) => {
    if (provinceCurrentPrice > totalLegionaries) {
        return expressionIfFalse
    }
    return expressionIfTrue 
} 

const mapStateToProps = (state) => {
    return {
        provincies: state[0].provincies,
        totalProvincies: state[0].provincies.filter(prov=>prov.possession===true).length,
        baseProvincePrice: state[0].baseProvincePrice,
        baseProvinceGold: state[0].baseProvinceGold,
        provincePriceWithBonus: state[0].provincePriceWithBonus,
        provinceGoldWithBonus: state[0].provinceGoldWithBonus,
        legionaries: state[0].legionaries,
        arcBonus: state[0].enhancements.filter(enh=>enh.enhancementName==="Roman Arc")[0]["enhancementQty"]
    }
}

const mapDispatchToProps = dispatch => {
    return {   
        manageConquerProvincy: (event) => {
            dispatch(conquerProvincy(event.target.value))
            dispatch(alertUser(event.target.value + " conquered."))
        },
        notAvailable: () => {
            dispatch(alertUser("Not enough Legionaries."))
        }
    }
}

function Provincies(props) {
    const armyNeededSize = calculateArmy(props.provincePriceWithBonus)
    const armyToMap = armyMapBuilder(armyNeededSize)
    return (
        <ProvinceSkeleton>
            
            <MiniTitleText>Provincies</MiniTitleText>
            
            <TerritorySkeleton>
                    <RegularText>Roman Empire - Total Tribute: { (props.baseProvinceGold * props.totalProvincies) + (Math.round( props.arcBonus/100 * props.baseProvinceGold) * props.totalProvincies) }</RegularText>
                    <ConqueredTerritorySkeleton>
                        {props.provincies
                            .filter(prov => prov.possession === true)
                            .map(prov =>
                                <div key={Math.random()}>
                                    <p>| {prov.provinceName} | </p>
                                </div>
                                )
                        }
                    </ConqueredTerritorySkeleton>                    
            </TerritorySkeleton>
            <HorizontalDivider/>

            <RegularText>Legionaries Needed To Conquer:</RegularText>
            <div>
                {
                    armyToMap.map(el => <GameIcon key={Math.random()} src={`helmets/${el}.png`}/> )   
                }   
            </div>
            
            <EmpireSkeleton>
                <ToConquerTerritorySkeleton>
                    {props.provincies
                            .filter(prov => prov.possession === false)
                            .map(prov => 
                                <div key={Math.random()}>
                                    <BuyProvinceBlock>
                                        <RegularText>{prov.provinceName}</RegularText>
                                        <ConquerButton onClick={checkIfCanConquer(props.provincePriceWithBonus, props.legionaries, props.manageConquerProvincy, props.notAvailable)} 
                                                value={prov.provinceName}
                                        />
                                    </BuyProvinceBlock>
                                </div>
                                )
                        }
                </ToConquerTerritorySkeleton>
            </EmpireSkeleton>
            <HorizontalDivider/>

        </ProvinceSkeleton>
    )
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(Provincies)