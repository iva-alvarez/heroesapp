import React from 'react'
//import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = ( ) => {

    
    return (
       <div>
            <h1>MarvelScreen</h1>
            <hr/>

            <HeroList publisher="Marvel Comics"/>
       </div>
    )
}
