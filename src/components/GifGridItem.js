import React from 'react'

export const GifGridItem = (props) => {

    console.log(props);

    return (
        <div className='card animate__animated animate__bounce animate__jackInTheBox'>
          {  <img src={props.gif} alt={props.title} /> }
        </div>
    )
}
