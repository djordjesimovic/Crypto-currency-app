import React from 'react'

const Header = ({login, setLogin, setDetail, setRenderFavorites}) => {

  const homeFun = () => {
    setDetail('');
    setRenderFavorites(false)
  }

  return (
    <header className='header'>
        <div className='navigation'>
            <button className='nav-btn' onClick={() => homeFun()}>Home</button>
            {login ? <button className='nav-btn' onClick={() => setRenderFavorites(true)}>Favorites</button> : null}
        </div>
        {login === false ? <button className='login-btn' onClick={() => setLogin(prevValue => !prevValue)}>Login</button> : null}
    </header>
  )
}

export default Header