import React from 'react'
import { connect } from 'react-redux'
import { RulesEskeleton, RegularText, RegularList, MiniTitleText, GameIcon, GameIconHelper, HorizontalDivider } from '../styles'

const mapStateToProps = (state) => {
    return {
        roundLog: state[0].roundLog
    }
}

function Rules(props) {
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
                <GameIconHelper>
                    <GameIcon src={`enhancements/Roman Bridge.png`}></GameIcon>
                    <p>= 1 extra legionary per Bridge</p>
                </GameIconHelper>
                <GameIconHelper>
                    <GameIcon src={`enhancements/Roman Arc.png`}></GameIcon>
                    <p>= +3pp gold per Arc</p>
                </GameIconHelper>
                <GameIconHelper>
                    <GameIcon src={`enhancements/Aqueduct.png`}></GameIcon>
                    <p>= -3pp on needed Legionaries per Aqueduct</p>
                </GameIconHelper>
                 
                <HorizontalDivider/>

                <MiniTitleText>Rules</MiniTitleText>
                <RegularText>Conquer All 15 Territories</RegularText>
                <RegularList>
                    <li>Conquer Provinces with Legionaries</li>
                    <li>Click GROW, get legionaries and passes a day</li>
                </RegularList>
                
                
                <RegularText>On Tribute Day:</RegularText>
                <RegularList>
                    <li>Provinces pays you gold</li>
                    <li>Necessary legionaries raises</li>
                </RegularList>
                <RegularText>Gold buys improvements to Rome</RegularText>
                <RegularText>When you buy improvement, prices double.</RegularText>

                <HorizontalDivider/>

                <MiniTitleText>Log</MiniTitleText>
                {props.roundLog.map(entry=><p key={Math.random()}>{entry}</p>)}
            </RulesEskeleton>      
    )
}

export default connect(
    mapStateToProps, 
    null,
    null,
    {
        pure: false
    }
)(Rules)