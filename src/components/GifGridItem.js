import React from 'react'

export const GifGridItem = (props) => {

    console.log(props);

    return (
        <div>
          {  <img src={props.gif} alt={props.title} /> }
        </div>
    )
}
