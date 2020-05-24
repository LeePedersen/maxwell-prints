import React, { useEffect, useState } from 'react';
import ty_fish from './../assets/images/ty_fish.jpeg';

function Painting() {
  const images = [];
  for (let i = 0; i < 20; i++) {
    images.push(ty_fish);
  }

  const [imageState, setImageState] = useState('allImages');

  function imagesClick() {
    setImageState('bigImage');
  }

  function imageClick() {
    setImageState('allImages');
  }

  return(
    <div>
      <div className="header">
        <p className="title">Maxwell Prints</p>
      </div>
      { imageState === 'bigImage' && (
        <div>
        <img src={ty_fish} className="bigPic" onClick={imageClick}/>
        </div>
      )}
        <div className="pictureScroll">
        {images.map((image, index) =>
          <img src={image} className='fishPics' onClick={imagesClick}/>
        )}
        </div>
    </div>
  )
}

export default Painting;
