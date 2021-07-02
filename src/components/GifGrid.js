import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect( () => {
        getGiphes();
    }, []);

    const getGiphes = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q={category}&limit=10&api_key=B4VMClSog6hZwFQ5i6KsnU7CgUxUWeDJ'
        const resp = await fetch(url);
        const { data } = await resp.json();
        
        const gifs = data.map( img => {
            return{
                id: img.id,
                gif: img.images?.downsized_large.url,
                title: img.title   
            }
        });
            
        console.log(gifs);
        setImages(gifs);
        
    }

    getGiphes();
    return (
                <>
                   {
                        images.map( imagen => (
                           
                                <GifGridItem 
                                    key=imagen.id
                                    img = { imagen } />
                            
                        ))
                    }
                        
                   
                </>    
                    
            )
}
