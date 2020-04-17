import React from 'react'
import Information from './Information'
import {  MainTitleText, HorizontalDivider } from '../styles'
import CommandCentral from './CommandCentral'

export default function GameArea() {
    return (
        <>
            <MainTitleText>Roman Empire Clicker</MainTitleText>
            <HorizontalDivider/>
            <Information />
            <HorizontalDivider/>
            <CommandCentral/>
            <HorizontalDivider/>
        </>
    )
}
