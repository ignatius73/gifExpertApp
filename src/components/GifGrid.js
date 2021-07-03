import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
/*import { getGifs } from '../helpers/getGifs';*/

export const GifGrid = ({category}) => {
   
    const { data:images, loading } = useFetchGifs({category});
    
    return (
                <>
                <h3>{ category } </h3>
                <hr />
                { loading && <p>Loading...</p>}
                <div className='card-grid'>
                
                    {
                        images.map( imagen => (
                           
                                <GifGridItem 
                                    key= {imagen.id }
                                    { ...imagen } />
                            
                        ))
                    }
                        
                   
                </div> 
                </>  
                    
            )
}
