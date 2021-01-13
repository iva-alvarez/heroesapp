import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        //history.push('/');
        
        const lastPath = localStorage.getItem('lastpath') || '/';

        dispatch ({
            type: types.login,
            payload: {
                name:'Ivana'
            }
        });

        history.replace(lastPath); 

    }

    return (
    
        <div className = " container mt-5">
            <h1>Ingresar</h1>
            <hr/>

            <button
                className= "btn btn-dark"
                onClick={ handleLogin }
            >
                Ingresar 
            </button>
        </div>
        
   
    )
    
} 
