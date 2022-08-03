import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/logo/crown.svg'
import './_navigation.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className='nav'>
        <Link className='nav__logo' to='/'>
            <CrownLogo className='nav__logo--svg' />    
        </Link>        
        <div className="nav__navbar">
            <Link className='nav__navbar--link' to='/'>Home</Link>
            <Link className='nav__navbar--link' to='/shop'>Shop</Link>
            <Link className='nav__navbar--link' to='/sign-in'>Sign In</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
