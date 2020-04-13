import React from 'react'
import { connect } from 'react-redux'
import { addLegionaries } from '../actions/actions'

const mapDispatchToProps = dispatch => {
    return {
        addLegionaries: () => dispatch(addLegionaries())
    }
}

function CommandCentral(props) {
    return (
        <div>
            <h4>Command Central</h4>
            <button onClick={props.addLegionaries}>Click Me!</button>
        </div>
    )
}


export default connect(
    null, 
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(CommandCentral)
