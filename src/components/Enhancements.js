import React from 'react'
import { connect } from 'react-redux';
import { addEnhancement } from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        enhancements: state[0].enhancements
    }
}

const mapDispatchToProps = dispatch => {
    return {   
        manageBuyEnhancement: (event) => {
            dispatch(addEnhancement(event.target.value))   
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
                    <button onClick={props.manageBuyEnhancement} value={enh.enhancementName}>Buy!</button>
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