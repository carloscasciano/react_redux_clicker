import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        gold: state[0].gold,
        date: state[0].date,
        message: state[0].message,
        roundLog: state[0].roundLog

    }
}

function Information(props) {
    return (
       
            <div>
                <h4>Information</h4>
                <p>Gold: {props.gold} </p>
                <p>Date: {props.date} </p>
                <p>Alert: {props.message}</p>
                <p>Log:</p>
                {props.roundLog.map(entry=><p key={Math.random()}>{entry}</p>)}
                
            </div>
    
    )
}

export default connect(
    mapStateToProps, 
    null,
    null,
    {
        pure: false
    }
)(Information)

