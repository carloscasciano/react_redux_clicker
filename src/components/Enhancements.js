import React from 'react'
import { connect } from 'react-redux';
import { addEnhancement, alertUser } from '../actions/actions'

const checkIfCanBuy = (price, totalGold, expressionIfTrue, expressionIfFalse) => {
    if (price > totalGold) {
        return expressionIfFalse
    }
    return expressionIfTrue 
} 

const mapStateToProps = (state) => {
    return {
        enhancements: state[0].enhancements,
        gold: state[0].gold
    }
}

const mapDispatchToProps = (dispatch) => {
    return {   
        manageBuyEnhancement: (event) => {
            dispatch(addEnhancement(event.target.value))
            dispatch(alertUser(event.target.value + " bought."))  
        },
        notAvailable: (event) => {
            dispatch(alertUser("Not enough Gold."))
        }
    }
}

function Enhancements(props) {
    return (
        <div>
            <h4>Enhancements</h4>
            {props.enhancements.map(enh =>
                <div key={Math.random()}>
                    <p>{enh.enhancementName}</p>
                    <p>Price: {enh.enhancementPrice}</p>
                    <p>Qty: {enh.enhancementQty}</p>
                    <button onClick={checkIfCanBuy(enh.enhancementPrice, props.gold, props.manageBuyEnhancement, props.notAvailable) } value={enh.enhancementName} >Buy!</button>
                </div>
                
                )
            }
        </div>
    )
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(Enhancements)