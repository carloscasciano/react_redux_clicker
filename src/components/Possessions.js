import React from 'react'
import { PossessionsSkeleton, VerticalDivider }  from '../styles'
import Army from './Army'
import Enhancements from './Enhancements'
import Provincies from './Provincies'

export default function Possessions() {
    return (
        <PossessionsSkeleton>
            
            
            <Provincies/>
        </PossessionsSkeleton>
    )
}
