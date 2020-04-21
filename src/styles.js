/* 
font: Muli
*/

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
    justify-content: space-around;
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
    display: flex;
    flex-direction: row;  
    justify-content: center;
    flex-wrap: wrap;
`

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    p {
        font-size: 1.3em;
        margin: 5px;
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
    };
`

/* Texts: */

export const MainTitleText = styled.h2`
    text-align: center;
    color: ${baseColors.red};
    font-size: 2.5em;
    margin: 3px;
`

export const MiniTitleText = styled.h2`
    text-align: center;
    color: ${baseColors.red};
    font-size: 1.5em;
    margin: 3px;
`

export const RegularText = styled.p`
    color: ${baseColors.textBlack};
    font-size: 1.2em;
`

export const RegularList = styled.ul`
    color: ${baseColors.textBlack};
    font-size: 1em;
    li {
        color: ${baseColors.textBlack};
        list-style-type: none;
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
`

/* Buttons: */

export const LegionaryButton = styled.button`
    border: none;
    background: ${baseColors.red};
    color: ${baseColors.blue} ;
    padding: 20px;
    border-radius: 6px;
    display: inline-block;
    width: 300px;
`

export const BuyButton = styled.button`
    border: none;
    background: ${baseColors.textGold};
    color: ${baseColors.textBlack};
    text-size: 1em;
    border-radius: 30px;
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 10px;
`

export const ConquerButton = styled.button `
    border: none;
    background: ${baseColors.red};
    color: ${baseColors.blue} ;
    padding: 20px;
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