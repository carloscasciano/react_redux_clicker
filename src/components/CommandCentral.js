import React from 'react'
import { connect } from 'react-redux'
import { addLegionaries, passTurn } from '../actions/actions'
import { LegionaryButton } from '../styles'

const mapDispatchToProps = dispatch => {
    return {
        addLegionaries: () => {
            dispatch(addLegionaries())
            dispatch(passTurn())
        }
    }
}

function CommandCentral(props) {
    return (
        <>
            <LegionaryButton onClick={props.addLegionaries}>GROW</LegionaryButton>
        </>
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
