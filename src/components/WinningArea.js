import React from 'react'
import { connect } from 'react-redux'
import { WinningConditionSkeleton, HorizontalDivider } from '../styles'

const mapStateToProps = (state) => {
    return {
            date: state[0].date,
            provinces: state[0].provinces
    }
}

function WinningArea(props) {

    const allConquered = props.provinces.filter(prov => prov.possession === false).length

    if (allConquered === 0) {
        return (
            <div>
                <WinningConditionSkeleton win >
                <HorizontalDivider/>
                
                    <p>Congratulations! You won the game in {props.date} days! Can it be done in less than 229 days? Press f5 to restart! </p>
                
                <HorizontalDivider/>
                </WinningConditionSkeleton>
            </div>
        )
    }

    return (
        <div>
            <WinningConditionSkeleton />
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