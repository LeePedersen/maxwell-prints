import React from 'react';
import ty_fish from './../assets/images/ty_fish.jpeg';

function Portfolio() {
  const images = [];
  for (let i = 0; i < 20; i++) {
    images.push(ty_fish);
  }
  return(
    <div className='pictureScroll'>
      {images.map((image, index) =>
        <img src={image} className='fishPics'/>
      )}
    </div>
  )
}

export default Portfolio;
