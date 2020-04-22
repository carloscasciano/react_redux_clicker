import React from 'react'
import { PossessionsSkeleton, VerticalDivider }  from '../styles'
import Army from './Army'
import Enhancements from './Enhancements'
import Provinces from './Provinces'

export default function Possessions() {
    return (
        <PossessionsSkeleton>
            
            
            <Provinces/>
        </PossessionsSkeleton>
    )
}
