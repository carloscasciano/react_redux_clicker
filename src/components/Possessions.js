import React from 'react'
import { PossessionsSkeleton }  from '../styles'
import Army from './Army'
import Enhancements from './Enhancements'

export default function Possessions() {
    return (
        <PossessionsSkeleton>
            <Army/>
            {/* <Enhancements/> */}
        </PossessionsSkeleton>
    )
}
