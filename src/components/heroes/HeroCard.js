import React from 'react';
import { Link } from 'react-router-dom';
import '../ui/cardStyle.css';

export const HeroCard = ({
    id,
    superhero, 
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
    
        <div className="contenedor_tarjeta" >
            <Link to={`./hero/${ id }` }>
                <figure id="tarjeta">
                    <img src ={ `./assets/heroes/${ id }.jpg` } className="frontal" alt={ superhero } style={{ maxHeight: 350 }}/>
               
                        <figcaption className="trasera">
                    
                            <h5 className="titulo"> { superhero } </h5>
                            <p> { alter_ego } </p>
                                {
                                    ( characters !== alter_ego  )
                                        && <p>
                                                { characters }   
                                            </p>

                                }

                             <p>  { first_appearance } </p>
                                
                                
                        </figcaption>
                </figure>           
                 Ver mas...
            </Link>

            
        </div>
       
    
  )
}

