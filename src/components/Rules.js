import React from 'react'
import { RegularText, RegularList } from '../styles'

export default function Rules() {
    return (
        <div>        
            
            <RegularText>Objective: Conquer All Territories</RegularText>
            <RegularText>Conquer Provinces with Legionaries</RegularText>
            <RegularText>Click TRAIN, get legionaries and passes a day</RegularText>
            <RegularText>DUT = Days Until Tribute</RegularText>
            <RegularText>On Tribute Day:</RegularText>
            <RegularList>
                <li>Provinces pays you gold</li>
                <li>Necessary legionaries raises</li>
            </RegularList>
            <RegularText>Gold buys improvements to Rome</RegularText>
            <RegularText>When you buy improvement, prices double.</RegularText>
            <RegularText>Improvements details:</RegularText>
            <RegularList>
                <li>Bridge: 1 extra legionary per click</li>
                <li>Roman Arch: +3pp of gold from provinces</li>
                <li>Aqueduct: -3pp on necessary legionaries</li>
            </RegularList>
    
                {/* {props.roundLog.map(entry=><p key={Math.random()}>{entry}</p>)} */}
        </div>
    )
}
