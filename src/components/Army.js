import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        legionaries: state[0].legionaries
    }
}



function Army(props) {
    return (
        <div>
            <h4>Army</h4>
            <p>Total Army: {props.legionaries}</p>
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
)(Army)