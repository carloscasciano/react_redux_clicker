import React from 'react'
import { RulesEskeleton, RegularText, RegularList, MiniTitleText, GameIcon, GameIconHelper } from '../styles'

export default function Rules() {
    return (
        
            <RulesEskeleton>
                <MiniTitleText>Helper</MiniTitleText>
                <RegularText>DUT = Days Until Tribute</RegularText>
                
                <GameIconHelper>
                    <p>1</p>
                    <img src={`helmets/legionary.png`} alt={"legionary"}></img>
                    <p>Legionary</p>
                    
                </GameIconHelper>
                <GameIconHelper>
                    <p>8</p>
                    <img src={`helmets/legionary.png`} alt={"legionary"}></img>
                    <p>= 1</p>
                    <img src={`helmets/conturbeniun.png`} alt={"conturbeniun"}></img>
                    <p>Conturbeniun</p>
                </GameIconHelper>
                <GameIconHelper>
                    <p>10</p>
                    <img src={`helmets/conturbeniun.png`} alt={"conturbeniun"}></img>
                    <p>= 1</p>
                    <img src={`helmets/century.png`} alt={"century"}></img>
                    <p>Century</p>
                </GameIconHelper>
                <GameIconHelper>
                    <p>6</p>
                    <img src={`helmets/century.png`} alt={"century"}></img>
                    <p>= 1</p>
                    <img src={`helmets/cohort.png`} alt={"cohort"}></img>
                    <p>Cohort</p>
                </GameIconHelper>
                <GameIconHelper>
                    <p>10</p>
                    <img src={`helmets/cohort.png`} alt={"cohort"}></img>
                    <p>= 1</p>
                    <img src={`helmets/legion.png`} alt={"legion"}></img>
                    <p>Legion</p>
                </GameIconHelper>
                
                

                <MiniTitleText>Rules</MiniTitleText>
                <RegularText>Conquer All 15 Territories</RegularText>
                <RegularText>Conquer Provinces with Legionaries</RegularText>
                <RegularText>Click GROW, get legionaries and passes a day</RegularText>
                
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
            </RulesEskeleton>
            
            
    
                
        
    )
}

{/* {props.roundLog.map(entry=><p key={Math.random()}>{entry}</p>)} */}
