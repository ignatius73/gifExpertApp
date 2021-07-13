import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = []}) => {

    const [categories, setcategories] = useState(defaultCategories);


   /* const handleAdd = () => {
        const nuevaCategoria = 'Doraemon';
        setcategories([...categories, nuevaCategoria]);
    }*/

    return ( 
        <div>
            <h2> GifExpertApp</h2>
            <AddCategory setCategories = { setcategories }/>
        <hr / >

        <ol > {
            /*categories.map( cat => {
                return <li key= { cat }> { cat } < /li>;
            })*/
            categories.map( cat => (
                    <GifGrid 
                        key= {cat}
                        category= { cat }
                        /> )  
            )} 
            </ol> </div>
    )
}