import React from 'react'
import { connect } from 'react-redux'

import { InfoBlock, InformationSkeleton, VerticalDivider, HorizontalDivider} from '../styles'

const mapStateToProps = (state) => {
    return {
        gold: state[0].gold,
        date: state[0].date,
        message: state[0].message,
        daysUntilActionsChange: state[0].daysUntilActionsChange,
        roundLog: state[0].roundLog
    }
}

function Information(props) {
    return (
       
            <>
            <InformationSkeleton>
                 <InfoBlock>
                    <p>DUT </p>
                    <p>{props.daysUntilActionsChange - props.date % props.daysUntilActionsChange}</p>
                </InfoBlock>
                <VerticalDivider/>
                <InfoBlock>
                    <p>Date </p>
                    <p>{props.date} </p>
                </InfoBlock>
                <VerticalDivider/>
                <InfoBlock>
                    <p>Gold </p>
                    <p>{props.gold} </p>
                </InfoBlock>
            </InformationSkeleton>
            <HorizontalDivider/>
                <p>Alert: {props.message}</p>        
            </>
    
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

