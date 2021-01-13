import React, { useMemo } from 'react';
import queryString from 'query-string';


import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
    
    const location = useLocation();
    const { q = ''} = queryString.parse(location.search);
    
    const [ formValues,handleInputChange]=useForm({
        SearchText: q
    });

    const { SearchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ]);
     


    const  handleSearch = (e) => {
       e.preventDefault();
       history.push(`?q=${ SearchText }`);
       
       
    }
    
    return (
        <div>
            <h1> Search </h1>     
            <hr/>

            <div className="row">
                <div className="col-6">
                    <h4> Search Form </h4>
                    <hr/>

                    <form onSubmit ={ handleSearch }>
                        <input
                            type="text"
                            name="SearchText"
                            autoComplete="off"
                            placeholder="Encuentra tu heroe"
                            value={ SearchText }
                            onChange={ handleInputChange }
                            className="form-control " 
                        />
                            
                        <button 
                            type="submit"
                            className="btn mt-2  btn-outline-dark "
                        >
                                Buscar
                        </button>
                    </form>
                </div>    

                    <div className="col-6 ">
                        <h4 >  Resultados </h4>
                        <hr/>

                        {
                            (q === '')
                                &&  
                                <div className= "alert alert-info">
                                    Busca un heroe
                                </div>
                       }

                        {
                            (q !== '' && heroesFiltered.length === 0 )
                                &&  
                                <div className= "alert alert-danger">
                                    Este heroe { q } no se encuentra
                                </div>
                       }

                        {
                            heroesFiltered.map( hero => (
                                <HeroCard
                                    key={hero.id}
                                    {...hero}
                                />
                            ))
                        }

                    </div>

                

            </div>

        </div>
    )
}
