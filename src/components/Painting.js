import React from 'react';
import ty_fish from './../assets/images/ty_fish.jpeg';

function Painting() {
  const images = [];
  for (let i = 0; i < 20; i++) {
    images.push(ty_fish);
  }
  return(
    <div>
      <div className="header">
        <p className="title">Maxwell Prints</p>
      </div>
      <div className='pictureScroll'>
        {images.map((image, index) =>
          <img src={image} className='fishPics'/>
        )}
      </div>
    </div>
  )
}

export default Painting;
