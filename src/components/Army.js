import React from 'react'
import calculateArmy from '../structure_assets/calculateArmy'
import armyMapBuilder from '../structure_assets/armyMapBuilder'
import { connect } from 'react-redux'
import { ArmySkeleton, MiniTitleText, GameIcon } from '../styles'


const mapStateToProps = (state) => {
    return {
        legionaries: state[0].legionaries
    }
}

function Army(props) {
    const armySize = calculateArmy(props.legionaries)
    const armyToMap = armyMapBuilder(armySize)
    
    return (
        <ArmySkeleton>
            <MiniTitleText>Army:</MiniTitleText>
            <div>
                {
                armyToMap.map(el => <GameIcon key={Math.random()} src={`helmets/${el}.png`}/> )   
                } 
            </div>
                      
        </ArmySkeleton>
    )
}


export default connect(
    mapStateToProps, 
    null,
    null,
    {
        pure: false
    }
)(Army)