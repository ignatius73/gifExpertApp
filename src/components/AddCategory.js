import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    //Defino el useState para la caja de texto

    

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
        
    }

    const handleFormSubmit = (e) =>{
        console.log('handlesubmit', inputValue);
        e.preventDefault();

        if ( inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
        
    };
            
            
 

    return ( 
        <form onSubmit= { handleFormSubmit }>
           <input 
            type='text'
            value={ inputValue }
            onChange={ handleInputChange } />
        
        </form>
        
    )


}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


