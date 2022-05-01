import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
        <div className='row1'>
          <div className='sidebar left__sidebar'>Left</div>
          <div className='middle__component'>I am the middle man</div>
          <div className='sidebar right__sidebar'>Right</div>
        </div>
        <div className='row2'>
        </div>
        </div>
    </div>
  )
}

export default Home