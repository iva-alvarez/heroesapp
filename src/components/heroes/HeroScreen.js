import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();


    const hero = useMemo(() => getHeroById(heroeId), [ heroeId ]);
    

    if ( !hero ) {
        return <Redirect to="/"/> 
    }
     const handleReturn = () => {
         
        if( history.length <= 2 ){
            history.push('/');
        } else {
            history.goBack();
        }
     }

    const {
        superhero,
        publisher, 
        alter_ego,
        first_appearance,
        characters,

    } = hero;

    return (
        <div className="row mt-4">
            <div className="col-5">
                <img
                    src={ `../assets/heroes/${ heroeId }.jpg` }
                    alt={ superhero }
                    className="img=tumbnail animate__animated animate__fadeInLeft"
                    style={{maxHeight:700}}

                />

            </div>

            <div className="col-4">
                <h3> { superhero }</h3>
                
                <ul className="list-group list-group-flush animate__animated animate__fadeInUp">
                    <li className="list-group-item"><b> alter ego:</b> { alter_ego } </li>
                    <li className="list-group-item"><b> publisher:</b> { publisher } </li>
                    <li className="list-group-item"><b> first appearance:</b> { first_appearance } </li>

                </ul>

                    
                <h5> Characters </h5>
                <p className="text-inline"> { characters}</p>

                    <button 
                    className="btn btn-outline-dark"
                    onClick={ handleReturn }
                    >
                        Regresar
                    </button>
            </div>
            
        </div>
    )
}
