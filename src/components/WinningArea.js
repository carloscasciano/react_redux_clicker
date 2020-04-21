import React from 'react'
import { connect } from 'react-redux'
import { WinningConditionSkeleton, HorizontalDivider } from '../styles'

const mapStateToProps = (state) => {
    return {
            date: state[0].date,
            provincies: state[0].provincies
    }
}

function WinningArea(props) {

    const allConquered = props.provincies.filter(prov => prov.possession === false).length

    if (allConquered === 0) {
        return (
            <div>
                <WinningConditionSkeleton win >
                <HorizontalDivider/>
                
                    <p>Congratulations! You won the game in {props.date} days! </p>
                
                <HorizontalDivider/>
                </WinningConditionSkeleton>
            </div>
        )
    }

    return (
        <div>
            <WinningConditionSkeleton>
            </WinningConditionSkeleton>
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
)(WinningArea)