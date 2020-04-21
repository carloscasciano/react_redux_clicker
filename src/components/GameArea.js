import React from 'react'
import WinningArea from './WinningArea'
import Information from './Information'
import CommandCentral from './CommandCentral'
import Army from './Army'
import Enhancements from './Enhancements'
import Provincies from './Provincies'
import {  MainTitleText, HorizontalDivider } from '../styles'

export default function GameArea() {
    return (
        <>
            <MainTitleText>Roman Empire Clicker</MainTitleText>
            <HorizontalDivider/>
            <WinningArea/>
            <Information />
            <HorizontalDivider/>
            <CommandCentral/>
            <HorizontalDivider/>
            <Army/>
            <HorizontalDivider/>
            <Enhancements/>
            <HorizontalDivider/>
            <Provincies/>
        </>
    )
}
