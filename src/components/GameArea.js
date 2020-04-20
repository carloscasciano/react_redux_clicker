import React from 'react'
import Information from './Information'
import {  MainTitleText, HorizontalDivider } from '../styles'
import CommandCentral from './CommandCentral'
import Army from './Army'
import Enhancements from './Enhancements'
import Possessions from './Possessions'

export default function GameArea() {
    return (
        <>
            <MainTitleText>Roman Empire Clicker</MainTitleText>
            <HorizontalDivider/>
            <Information />
            <HorizontalDivider/>
            <CommandCentral/>
            <HorizontalDivider/>
            <Army/>
            <HorizontalDivider/>
            <Enhancements/>
            <HorizontalDivider/>
            <Possessions/>
        </>
    )
}
