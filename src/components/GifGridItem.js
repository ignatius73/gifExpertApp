import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = (props) => {

   

    return (
        <div className='card animate__animated animate__bounce animate__jackInTheBox'>
          {  <img src={props.gif} alt={props.title} /> }
        </div>
    )
}

GifGridItem.propTypes = {
  gif : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired
  
}
