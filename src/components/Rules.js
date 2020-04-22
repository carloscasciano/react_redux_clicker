import React from 'react'
import { connect } from 'react-redux'
import { RulesEskeleton, RegularText, MiniTitleText, GameIcon, GameIconHelper, HorizontalDivider } from '../styles'

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
                    <p>3</p>
                    <img src={`helmets/legionary.png`} alt={"legionary"}></img>
                    <p>= 1</p>
                    <img src={`helmets/conturbeniun.png`} alt={"conturbeniun"}></img>
                    <p>Conturbeniun</p>
                </GameIconHelper>
                <GameIconHelper>
                    <p>3</p>
                    <img src={`helmets/conturbeniun.png`} alt={"conturbeniun"}></img>
                    <p>= 1</p>
                    <img src={`helmets/century.png`} alt={"century"}></img>
                    <p>Century</p>
                </GameIconHelper>
                <GameIconHelper>
                    <p>3</p>
                    <img src={`helmets/century.png`} alt={"century"}></img>
                    <p>= 1</p>
                    <img src={`helmets/cohort.png`} alt={"cohort"}></img>
                    <p>Cohort</p>
                </GameIconHelper>
                <GameIconHelper>
                    <p>5</p>
                    <img src={`helmets/cohort.png`} alt={"cohort"}></img>
                    <p>= 1</p>
                    <img src={`helmets/legion.png`} alt={"legion"}></img>
                    <p>Legion</p>
                </GameIconHelper>
                <GameIconHelper>
                    <GameIcon src={`enhancements/Roman Bridge.png`}></GameIcon>
                    <p> 1 legionary per Bridge</p>
                </GameIconHelper>
                <GameIconHelper>
                    <GameIcon src={`enhancements/Roman Arc.png`}></GameIcon>
                    <p> +3pp gold per Arc</p>
                </GameIconHelper>
                <GameIconHelper>
                    <GameIcon src={`enhancements/Aqueduct.png`}></GameIcon>
                    <p> -3pp on needed Legionaries per Aqueduct</p>
                </GameIconHelper>
                 
                <HorizontalDivider/>

                <MiniTitleText>Rules</MiniTitleText>
                <RegularText>Conquer All 15 Territories</RegularText>
                <RegularText>Conquer Provinces with Legionaries</RegularText>
                <RegularText>GROW: Get Legionaries, Pass Day</RegularText>       
                <RegularText>Tribute Day: Get Gold, Higher Difficult</RegularText>
                <RegularText>Gold buys improvements to Rome</RegularText>
                <RegularText>Buy improvement, Double price</RegularText>
                <RegularText>Press F5 to restart</RegularText>

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