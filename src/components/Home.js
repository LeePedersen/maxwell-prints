import React from 'react';

function Home() {
  return(
    <div className='homeScreen'>
      <div className="header">
        <p className="homeTitle">Maxwell Prints</p>
      </div>
      <div className="links">
        <span className='link'><a href="/painting">Painting</a></span>
        <span className='link'><a href="/painting">Photography</a></span>
        <span className='link'><a href="/painting">Design</a></span>
      </div>
    </div>
  )
}

export default Home;
