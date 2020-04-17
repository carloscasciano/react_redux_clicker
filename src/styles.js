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
        "backgroundWhite": "#EBEBD3",
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
    background: ${baseColors.blue};
`
export const InformationSkeleton = styled.div`
    display: flex;
    flex-direction: row;
`

/* Texts: */

export const MainTitleText = styled.h2`
    text-align: center;
    color: ${baseColors.red};
    font-size: 2.5em;
    margin: 3px;
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
/* Dividers: */

export const VerticalDivider = styled.hr`
    border-left: 2px dotted ${baseColors.red};
`

export const HorizontalDivider = styled.hr`
    width: 100%;
    border-right: 3px ${baseColors.red};
`

/* Buttons: */

export const LegionaryButton = styled.button`
    border: none;
    background: ${baseColors.red};
    color: #ffffff ;
    padding: 20px;
    border-radius: 6px;
    display: inline-block;
`