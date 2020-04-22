import styled from "styled-components"

/* Colors: */

const baseColors = 
    {
        "textGold": "#ED8E00",
        "blue": "#22333B",
        "textBlack": "#272727",
        "backgroundWhite": "white",
        "red": "#A53F2B"
    }


/* Skeletons: */

export const WinningConditionSkeleton = styled.div`
    display: ${props => props.win ? "flex" : "none"};
    height: 80px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainSkeleton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: ${baseColors.backgroundWhite};
`
export const GameAreaSkeleton = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    align-content: flex-end;
    background: ${baseColors.backgroundWhite};
`
export const RulesAreaSkeleton = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: baseline;
    justify-content: flex-start;
    align-content: flex-start;
    background: ${baseColors.backgroundWhite};
`
export const InformationSkeleton = styled.div`

    display: flex;
    flex-direction: row;
`

export const PossessionsSkeleton = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: space-around;
`

export const ArmySkeleton = styled.div`
    display: flex;
    flex-direction: column;  
    justify-content: flex-start;
    height: 80px;

`

export const EnhancementSkeleton = styled.div`
    display: flex;
    flex-direction: column;  
    justify-content: flex-start;
`

export const EnhancementShopSkeleton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const EnhancementBoughtSkeleton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export const EmpireSkeleton = styled.div`
    display: flex;
    flex-direction: row;  
    align-items: baseline;
    justify-content: space-around;
`
export const TerritorySkeleton = styled.div`
    display: flex;
    flex-direction: column;  
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const ProvinceSkeleton = styled.div`
    display: flex;
    flex-direction: column;  
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 5px;
`

export const ConqueredTerritorySkeleton = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: center;
    flex-wrap: wrap;
`

export const ToConquerTerritorySkeleton = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;  
    justify-content: center;
    flex-wrap: wrap;
`

export const RulesEskeleton = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: baseline;
    justify-content: flex-start;
    align-content: flex-start;
`

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    p {
        font-size: 1.3em;
        margin: 5px;
        font-family: 'Muli', sans-serif;
    }
`

export const BuyEnhancementBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 35px;
    margin-right: 35px;
    p {
        font-size: 1.3em;
        margin: 5px;
        font-family: 'Muli', sans-serif;
    }
`

export const BuyProvinceBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    p {
        font-size: 0.8em;
        margin: 3px;
        font-family: 'Muli', sans-serif;
    };
`

/* Texts: */

export const MainTitleText = styled.h2`
    text-align: center;
    color: ${baseColors.red};
    font-size: 2.5em;
    margin: 3px;
    font-family: 'Muli', sans-serif;
`

export const MiniTitleText = styled.h2`
    text-align: center;
    color: ${baseColors.red};
    font-size: 1.5em;
    margin: 3px;
    font-family: 'Muli', sans-serif;
`

export const RegularText = styled.p`
    color: ${baseColors.textBlack};
    font-size: 1.2em;
    margin: 5px;
    font-family: 'Muli', sans-serif;
`

export const RegularList = styled.ul`
    color: ${baseColors.textBlack};
    font-size: 1em;
    font-family: 'Muli', sans-serif;
    li {
        color: ${baseColors.textBlack};
        list-style-type: none;
        font-family: 'Muli', sans-serif;
    }
`

/* Dividers: */

export const VerticalDivider = styled.hr`
    border-left: 2px dotted ${baseColors.red};
    margin: 10px;
`

export const HorizontalDivider = styled.hr`
    width: 100%;
    border-right: 3px ${baseColors.red};
    opacity: 0.2;
`

/* Buttons: */

export const LegionaryButton = styled.button`
    border: none;
    height: 60px;
    background: ${baseColors.red};
    color: ${baseColors.backgroundWhite};
    font-size: 1em;
    padding: 20px;
    border-radius: 6px;
    display: inline-block;
    width: 300px;
    transition: 0.1s all ease-out;
    
    
    &:active {
        background-color: ${baseColors.red};
        color: ${baseColors.red};
        font-size: 1.1em;
        box-shadow: inset 0 0 10px ${baseColors.textBlack};
      }
   
`

export const BuyButton = styled.button`
    border: none;
    background: ${baseColors.textGold};
    color: ${baseColors.backgroundWhite};
    font-size: 1.5em;
    border-radius: 30px;
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 10px;
    transition: 0.2s all ease-out;

    &:active {
        background-color: ${baseColors.textGold};
        color: ${baseColors.textGold};
        font-size: 1.3em;
      },
`

export const ConquerButton = styled.button `
    border: none;
    background: ${baseColors.red};
    color: ${baseColors.backgroundWhite} ;
    border-radius: 30px;
    display: inline-block;
    width: 30px;
    height: 30px;

`

/* Icons: */

export const GameIcon = styled.img`
    width: 30px;
    height: 30px;
    margin: 15px; 
`

export const GameIconHelper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
        color: ${baseColors.textBlack};
        font-size: 1.0em;
    };
    img {
        width: 20px;
        height: 20px;
        margin: 10px;
    }
`