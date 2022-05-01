import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className="header">
        <nav className="navbar">
            <div className="logo__container">
              <h2 className='logo'>Nyankie</h2>
            </div>
            <div className='search__bar'>
              <input type="text" className="search__input" placeholder="I'm looking for ..."></input>
              <a href='#' className='search__button'>Search</a>
            </div>
            <div className='nav__options'>
                <p className='help'><strong><a href='#'>?</a></strong></p>
                <p className='cart'><strong><a href='#'>cart</a></strong></p>
                <p className='user'><strong><a href='#'>user</a></strong></p>
            </div>
        </nav>
    </div>
  )
}

export default Header