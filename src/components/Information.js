
 
import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log("teste", state[0].gold)
    return {
        gold: state[0].gold
    }
}

function Information(props) {
    return (
       
            <div>
                <h4>Information</h4>
                <p>Gold: {props.gold} </p>
                <p>Date: </p>
                <p>Status: </p>
            </div>
    
    )
}

export default connect(mapStateToProps)(Information)

