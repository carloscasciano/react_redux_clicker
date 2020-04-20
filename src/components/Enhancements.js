import React from 'react'
import { connect } from 'react-redux';
import { addEnhancement, alertUser } from '../actions/actions'
import { EnhancementSkeleton, EnhancementShopSkeleton, EnhancementBoughtSkeleton , MiniTitleText, GameIcon, BuyEnhancementBlock, BuyButton, HorizontalDivider } from '../styles'
import enhancementMapBuilder from '../structure_assets/enhancementMapBuilder'


const checkIfCanBuy = (price, totalGold, expressionIfTrue, expressionIfFalse) => {
    if (price > totalGold) {
        return expressionIfFalse
    }
    return expressionIfTrue 
} 

const mapStateToProps = (state) => {
    return {
        enhancements: state[0].enhancements,
        gold: state[0].gold
    }
}

const mapDispatchToProps = (dispatch) => {
    return {   
        manageBuyEnhancement: (event) => {
            dispatch(addEnhancement(event.target.value))
            dispatch(alertUser(event.target.value + " bought."))  
        },
        notAvailable: (event) => {
            dispatch(alertUser("Not enough Gold."))
        }
    }
}

function Enhancements(props) {
    const enhancementsToMap = enhancementMapBuilder(props.enhancements)
    return (
        
            <EnhancementSkeleton>

                <MiniTitleText>Enhancements</MiniTitleText>

                <EnhancementShopSkeleton>
                    {props.enhancements.map(enh =>
                        <BuyEnhancementBlock key={Math.random()}>
                            <GameIcon src={`enhancements/${enh.enhancementName}.png`} />
                            <p>{enh.enhancementPrice} Gold </p>
                            <BuyButton onClick={checkIfCanBuy(enh.enhancementPrice, props.gold, props.manageBuyEnhancement, props.notAvailable) } 
                                    value={enh.enhancementName}
                            >
                                $
                            </BuyButton>
                        </BuyEnhancementBlock>              
                        )
                    }
                </EnhancementShopSkeleton>

                <HorizontalDivider/>

                <EnhancementBoughtSkeleton>
                    {enhancementsToMap.map(enh =><GameIcon src={`enhancements/${enh}.png`} key={Math.random()} />)}
                </EnhancementBoughtSkeleton>
                

            </EnhancementSkeleton>

        
    )
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(Enhancements)