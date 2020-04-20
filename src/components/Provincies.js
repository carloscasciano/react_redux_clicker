import React from 'react'
import { connect } from 'react-redux'
import calculateArmy from '../structure_assets/calculateArmy'
import armyMapBuilder from '../structure_assets/armyMapBuilder'
import { conquerProvincy , alertUser } from '../actions/actions'
import { ProvinceSkeleton, ArmySkeleton, MiniTitleText, EmpireSkeleton, TerritorySkeleton , BuyProvinceBlock, ConquerButton, GameIcon} from '../styles'



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
            <ArmySkeleton>
                {
                armyToMap.map(el => <GameIcon key={Math.random()} src={`helmets/${el}.png`}/> )   
                }           
            </ArmySkeleton>
            

            <EmpireSkeleton>
                <TerritorySkeleton>
                    <h5>Roman Empire</h5>
                    <p>Tribute per Province: {props.baseProvinceGold} + Arc Bonus: { Math.round( props.arcBonus/100 * props.baseProvinceGold ) } </p>
                    <p>Total Tribute: { (props.baseProvinceGold * props.totalProvincies) + (Math.round( props.arcBonus/100 * props.baseProvinceGold) * props.totalProvincies) }</p>

                    {props.provincies
                        .filter(prov => prov.possession === true)
                        .map(prov =>
                            <div key={Math.random()}>
                                <p>{prov.provinceName}</p>
                            </div>
                            )
                    }
                </TerritorySkeleton>
               
               <TerritorySkeleton>
                <h5>To Conquer</h5>
                    {props.provincies
                        .filter(prov => prov.possession === false)
                        .map(prov => 
                            <div key={Math.random()}>
                                <BuyProvinceBlock>
                                    <p>{prov.provinceName}</p>
                                    <ConquerButton onClick={checkIfCanConquer(props.provincePriceWithBonus, props.legionaries, props.manageConquerProvincy, props.notAvailable)} 
                                            value={prov.provinceName}
                                    />
                                </BuyProvinceBlock>
                                
                            </div>
                            )
                    }
               </TerritorySkeleton>
            </EmpireSkeleton>

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