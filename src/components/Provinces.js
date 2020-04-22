import React from 'react'
import { connect } from 'react-redux'
import calculateArmy from '../structure_assets/calculateArmy'
import armyMapBuilder from '../structure_assets/armyMapBuilder'
import { conquerProvince , alertUser } from '../actions/actions'
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
        provinces: state[0].provinces,
        totalProvinces: state[0].provinces.filter(prov=>prov.possession===true).length,
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
        manageConquerProvinceconquerProvince: (event) => {
            dispatch(conquerProvince(event.target.value))
            dispatch(alertUser(event.target.value + " conquered."))
        },
        notAvailable: () => {
            dispatch(alertUser("Not enough Legionaries."))
        }
    }
}

function Provinces(props) {
    const armyNeededSize = calculateArmy(props.provincePriceWithBonus)
    const armyToMap = armyMapBuilder(armyNeededSize)
    return (
        <ProvinceSkeleton>
            
            <MiniTitleText>Roman Empire</MiniTitleText>
            
            <TerritorySkeleton>
                    <RegularText>Total Tribute: { (props.baseProvinceGold * props.totalProvinces) + (Math.round( props.arcBonus/100 * props.baseProvinceGold) * props.totalProvinces) }</RegularText>
                    <ConqueredTerritorySkeleton>
                        {props.provinces
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
                    {props.provinces
                            .filter(prov => prov.possession === false)
                            .map(prov => 
                                <div key={Math.random()}>
                                    <BuyProvinceBlock>
                                        <RegularText>{prov.provinceName}</RegularText>
                                        <ConquerButton onClick={checkIfCanConquer(props.provincePriceWithBonus, props.legionaries, props.manageConquerProvinceconquerProvince, props.notAvailable)} 
                                                value={prov.provinceName}
                                        >
                                            C
                                        </ConquerButton>
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
)(Provinces)